import { formidable } from 'formidable';
import fs from 'node:fs/promises';

const DASHSCOPE_BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
const QWEN_MODEL = process.env.QWEN_MODEL || 'qwen-vl-plus';

const fieldLabels = {
  dimension: '尺寸',
  tolerance: '公差',
  explanation: '解释',
  beginnerExplanation: '新人解释',
  name: '名称',
  value: '数值',
  content: '内容',
  title: '标题',
  description: '说明',
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    if (!process.env.DASHSCOPE_API_KEY) {
      return response.status(500).json({
        message: '后端缺少 DASHSCOPE_API_KEY，请在 Vercel 环境变量中配置。',
      });
    }

    const { fields, files } = await parseForm(request);
    const drawing = Array.isArray(files.drawing) ? files.drawing[0] : files.drawing;

    if (!drawing) {
      return response.status(400).json({ message: '请上传一张机械图纸图片。' });
    }

    const mimeType = drawing.mimetype || 'image/png';
    if (!mimeType.startsWith('image/')) {
      return response.status(400).json({ message: '当前只支持图片文件。' });
    }

    const imageBuffer = await fs.readFile(drawing.filepath);
    const imageDataUrl = `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
    const beginnerMode = String(Array.isArray(fields.beginnerMode) ? fields.beginnerMode[0] : fields.beginnerMode) === 'true';
    const modelResponse = await callQwenVision(imageDataUrl, beginnerMode);
    const content = modelResponse.choices?.[0]?.message?.content;

    if (!content) {
      return response.status(502).json({
        message: '千问视觉模型没有返回可读取的报告内容。',
      });
    }

    return response.status(200).json({
      model: modelResponse.model || QWEN_MODEL,
      report: parseReport(content),
    });
  } catch (error) {
    console.error(error);
    return response.status(error.status || 500).json({
      message: error.message || '图纸分析失败，请检查 Vercel Function 日志。',
    });
  }
}

async function parseForm(request) {
  const form = formidable({
    maxFileSize: 12 * 1024 * 1024,
    multiples: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(request, (error, fields, files) => {
      if (error) reject(error);
      else resolve({ fields, files });
    });
  });
}

async function callQwenVision(imageDataUrl, beginnerMode) {
  const reportSchema =
    '{"partType":"","material":"","dimensions":[],"tolerances":[],"surfaceRoughness":[],"technicalRequirements":[],"processingNotes":[],"warnings":[]' +
    (beginnerMode ? ',"beginnerExplanation":["关键尺寸解释","公差解释","表面粗糙度解释","技术要求解释","加工注意事项解释","哪些内容需要人工复核"]' : '') +
    '}';
  const beginnerInstruction = beginnerMode
    ? '当前已开启新人解释模式。请额外输出 beginnerExplanation 字段，内容面向机械新人，避免太专业但要准确。必须解释关键尺寸、公差、表面粗糙度、技术要求、加工注意事项，以及哪些内容需要人工复核。例如：如果识别到 Ø60 H7，需要解释“这是直径 60mm 的孔公差，H7 常用于较精密的孔配合，通常需要镗孔、铰孔或磨削保证。”如果识别到 Ra1.6，需要解释“Ra1.6 表示表面粗糙度要求较高，通常用于配合面或需要较好表面质量的位置。”如果识别到 GB/T 1804-m，需要解释“未注尺寸公差按 GB/T 1804-m 执行，表示没有单独标注公差的尺寸也有默认普通公差要求。”'
    : '';

  const apiResponse = await fetch(`${DASHSCOPE_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.DASHSCOPE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: QWEN_MODEL,
      messages: [
        {
          role: 'system',
          content: `你是一个机械工程图纸阅读助手，擅长识别齿轮、轴、孔、键槽、倒角、公差、材料、表面粗糙度、技术要求和加工要求。所有尺寸默认单位为 mm，除非图纸另有说明。不确定的内容必须标注“需人工复核”，不要编造。报告必须使用机械工程师能看懂的语言，不要输出过度确定的结论。${beginnerInstruction} 只返回严格 JSON，不要返回 markdown，不要返回 \`\`\`json 代码块，不要输出解释文字。`,
        },
        {
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: imageDataUrl } },
            {
              type: 'text',
              text: `请根据用户上传的机械图纸生成结构化图纸阅读报告。重点识别：零件类型、材料、关键尺寸、关键公差、表面粗糙度、技术要求、加工注意事项、重点提醒/需人工复核项。如果图纸存在红圈、箭头、问号等人工标记，必须在 warnings 中说明。返回格式必须是这个严格 JSON 对象：${reportSchema}。无法识别的字段请写“未识别或图纸中未明确标注，需人工复核”。不要返回 markdown，不要返回代码块，不要输出 JSON 以外的任何文字。`,
            },
          ],
        },
      ],
      temperature: 0.2,
    }),
  });

  const payload = await apiResponse.json().catch(() => null);
  if (!apiResponse.ok) {
    const message = payload?.error?.message || payload?.message || `百炼接口请求失败，HTTP ${apiResponse.status}`;
    const error = new Error(message);
    error.status = apiResponse.status;
    throw error;
  }

  return payload;
}

function parseReport(content) {
  const parsedReport = parseReportObject(content);
  return parsedReport ? normalizeReport(parsedReport) : fallbackReport();
}

function parseReportObject(content) {
  if (content && typeof content === 'object' && !Array.isArray(content)) return content;
  if (typeof content !== 'string') return null;

  let text = extractJson(stripJsonFence(content.trim()));
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const parsed = JSON.parse(text);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
      if (typeof parsed === 'string') {
        text = extractJson(stripJsonFence(parsed.trim()));
      } else {
        return null;
      }
    } catch {
      return null;
    }
  }

  return null;
}

function stripJsonFence(text) {
  const fencedMatch = text.match(/^```(?:json)?\s*([\s\S]*?)```$/i);
  return fencedMatch ? fencedMatch[1].trim() : text;
}

function extractJson(text) {
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  return firstBrace >= 0 && lastBrace > firstBrace ? text.slice(firstBrace, lastBrace + 1) : text;
}

function fallbackReport() {
  return {
    partType: '未识别或图纸中未明确标注，需人工复核',
    material: '未识别或图纸中未明确标注，需人工复核',
    dimensions: [],
    tolerances: [],
    surfaceRoughness: [],
    technicalRequirements: [],
    processingNotes: [],
    warnings: ['模型未返回可解析的标准 JSON，需人工复核。'],
    beginnerExplanation: [],
  };
}

function normalizeReport(report) {
  return {
    partType: displayValue(report.partType || report.part_type),
    material: displayValue(report.material),
    dimensions: listValue(report.dimensions || report.keyDimensions || report.key_dimensions),
    tolerances: listValue(report.tolerances || report.keyTolerances || report.key_tolerances),
    surfaceRoughness: listValue(report.surfaceRoughness || report.surface_roughness || report.roughness),
    technicalRequirements: listValue(report.technicalRequirements || report.technical_requirements || report.requirements),
    processingNotes: listValue(report.processingNotes || report.processing_notes || report.notes || report.machiningNotes || report.machining_notes),
    warnings: listValue(report.warnings || report.reminders || report.keyReminders || report.key_reminders),
    beginnerExplanation: listValue(report.beginnerExplanation || report.beginner_explanation || report.beginnerNotes),
  };
}

function listValue(value) {
  if (Array.isArray(value)) return value.flatMap(listValue).filter(Boolean);
  const text = displayValue(value);
  return text ? [text] : [];
}

function displayValue(value) {
  if (value == null) return '';
  if (Array.isArray(value)) return value.flatMap(listValue).join('；');
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'object') {
    const pairedText = pairedObjectValue(value);
    if (pairedText) return pairedText;

    const readableEntries = Object.entries(value)
      .map(([key, entryValue]) => {
        const text = displayValue(entryValue);
        return text ? `${fieldLabels[key] || key}：${text}` : '';
      })
      .filter(Boolean);

    if (readableEntries.length > 0) return readableEntries.join('\n');

    return JSON.stringify(value);
  }

  return String(value);
}

function pairedObjectValue(value) {
  for (const [labelField, valueField] of [['name', 'value'], ['label', 'value'], ['title', 'description']]) {
    const label = displayValue(value[labelField]);
    const detail = displayValue(value[valueField]);
    if (label && detail) return `${label}：${detail}`;
  }

  return '';
}
