import React from 'react';
import { ArrowLeft, Loader2, ScanLine, UploadCloud } from 'lucide-react';

const emptyReport = {
  partType: '',
  material: '',
  dimensions: [],
  tolerances: [],
  surfaceRoughness: [],
  technicalRequirements: [],
  processingNotes: [],
  warnings: [],
  beginnerExplanation: [],
};

const fieldLabels = {
  dimension: '尺寸',
  dimensions: '尺寸',
  tolerance: '公差',
  tolerances: '公差',
  explanation: '解释',
  beginnerExplanation: '新人解释',
  beginner_explanation: '新人解释',
  name: '名称',
  value: '数值',
  content: '内容',
  title: '标题',
  description: '说明',
  text: '文本',
  note: '备注',
  message: '信息',
};

export default function GearDrawingAI() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState('');
  const [fileName, setFileName] = React.useState('');
  const [report, setReport] = React.useState(null);
  const [status, setStatus] = React.useState('');
  const [error, setError] = React.useState('');
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [beginnerMode, setBeginnerMode] = React.useState(false);

  function handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (previewUrl) URL.revokeObjectURL(previewUrl);

    setSelectedFile(file);
    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
    setReport(null);
    setStatus('');
    setError('');
  }

  async function handleAnalyze() {
    if (!selectedFile) {
      setError('请先上传一张机械图纸图片。');
      return;
    }

    const formData = new FormData();
    formData.append('drawing', selectedFile);
    formData.append('beginnerMode', beginnerMode ? 'true' : 'false');

    setIsAnalyzing(true);
    setStatus('正在调用通义千问视觉模型分析图纸...');
    setError('');
    setReport(null);

    try {
      const response = await fetch('/api/analyze-drawing', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '图纸分析失败，请稍后重试。');
      }

      setReport(normalizeReport(data.report));
      setStatus(`分析完成，模型：${data.model || 'Qwen VL'}`);
    } catch (analysisError) {
      setError(analysisError.message || '图纸分析失败，请检查后端服务和 API Key。');
      setStatus('');
    } finally {
      setIsAnalyzing(false);
    }
  }

  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <main className="min-h-screen bg-cyber-dark px-5 pb-16 pt-8 text-slate-100">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,255,.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(255,61,242,.13),transparent_24%),linear-gradient(135deg,#050814_0%,#090d1d_46%,#120722_100%)]" />
      <div className="fixed inset-0 -z-10 bg-cyber-grid bg-[length:34px_34px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/15 pb-5">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/45 hover:bg-cyan-200/15"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </a>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-pink-200/30 bg-pink-300/10 text-pink-100">
              <ScanLine className="h-5 w-5" />
            </span>
            <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">齿轮图纸助手</h1>
          </div>
        </header>

        <section className="mb-8 max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-cyan-100/70">
            Gear Drawing AI
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            上传机械图纸，AI 帮你整理关键尺寸、公差、粗糙度、技术要求和加工注意事项。开启新人解释模式后，会把工程术语解释得更容易理解。
          </p>
        </section>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <section className="cyber-card p-5">
            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap gap-3">
                <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-cyan-200/25 bg-cyan-200/10 px-4 font-semibold text-cyan-100 shadow-neon transition hover:border-cyan-200/45">
                  <UploadCloud className="h-5 w-5" />
                  上传图片
                  <input className="sr-only" type="file" accept="image/*" onChange={handleUpload} />
                </label>
                <button
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-pink-200/25 bg-pink-300/10 px-4 font-semibold text-pink-100 shadow-pink transition hover:border-pink-200/45 disabled:cursor-not-allowed disabled:opacity-60"
                  type="button"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? <Loader2 className="h-5 w-5 animate-spin" /> : <ScanLine className="h-5 w-5" />}
                  {isAnalyzing ? '分析中...' : '开始分析'}
                </button>
              </div>

              <label className="mb-4 inline-flex cursor-pointer items-center gap-2 font-semibold text-slate-200">
                <input
                  className="h-4 w-4 accent-cyan-300"
                  type="checkbox"
                  checked={beginnerMode}
                  onChange={(event) => setBeginnerMode(event.target.checked)}
                />
                新人解释模式
              </label>

              {status ? (
                <p className="mb-4 rounded-lg border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-sm text-cyan-100">
                  {status}
                </p>
              ) : null}
              {error ? (
                <p className="mb-4 rounded-lg border border-red-300/25 bg-red-400/10 px-4 py-3 text-sm text-red-100">
                  {error}
                </p>
              ) : null}

              <div className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-lg border border-dashed border-cyan-200/25 bg-white/[.035]">
                {previewUrl ? (
                  <>
                    <img className="max-h-[560px] w-full object-contain p-4" src={previewUrl} alt="已上传的机械图纸预览" />
                    <span className="absolute bottom-3 right-3 max-w-[calc(100%-24px)] truncate rounded-md bg-black/70 px-3 py-2 text-xs text-white">
                      {fileName}
                    </span>
                  </>
                ) : (
                  <div className="rounded-lg border border-cyan-200/15 bg-cyan-200/5 px-6 py-8 text-center text-cyan-100/75">
                    等待上传图纸图片
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="cyber-card p-5">
            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-bold text-white">图纸阅读报告</h2>
                <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {report ? '真实分析' : '未生成'}
                </span>
              </div>

              {report ? (
                <div className="grid gap-4">
                  <ReportItem title="零件类型" value={report.partType} />
                  <ReportItem title="材料" value={report.material} />
                  <ReportList title="关键尺寸" items={report.dimensions} />
                  <ReportList title="关键公差" items={report.tolerances} />
                  <ReportList title="表面粗糙度" items={report.surfaceRoughness} />
                  <ReportList title="技术要求" items={report.technicalRequirements} />
                  <ReportList title="加工注意事项" items={report.processingNotes} />
                  <ReportList title="重点提醒" items={report.warnings} />
                  {beginnerMode ? (
                    <div className="border-t border-cyan-200/15 pt-4">
                      <h2 className="mb-4 font-display text-xl font-bold text-white">新人解释模式</h2>
                      <ReportList title="图纸要点解释" items={report.beginnerExplanation} />
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="grid min-h-[260px] place-items-center rounded-lg border border-dashed border-cyan-200/20 bg-white/[.035] p-6 text-center leading-7 text-slate-300">
                  上传图纸后点击“开始分析”，这里会显示千问视觉模型返回的结构化报告。
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ReportItem({ title, value }) {
  return (
    <div className="rounded-lg border-l-4 border-cyan-300 bg-white/[.045] p-4">
      <h3 className="mb-2 font-semibold text-cyan-100">{title}</h3>
      <p className="whitespace-pre-line leading-7 text-slate-300">
        {toDisplayText(value) || '未识别或图纸中未明确标注，需人工复核'}
      </p>
    </div>
  );
}

function ReportList({ title, items }) {
  const safeItems = toList(items);
  const displayItems = safeItems.length > 0 ? safeItems : ['未识别或图纸中未明确标注，需人工复核'];

  return (
    <div className="rounded-lg border-l-4 border-cyan-300 bg-white/[.045] p-4">
      <h3 className="mb-2 font-semibold text-cyan-100">{title}</h3>
      <ul className="list-disc space-y-1 pl-5 leading-7 text-slate-300">
        {displayItems.map((item, index) => (
          <li className="whitespace-pre-line" key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function normalizeReport(report) {
  const source = parseReportSource(report) || emptyReport;

  return {
    partType: source.partType || source.part_type || '',
    material: source.material || '',
    dimensions: toList(source.dimensions || source.keyDimensions || source.key_dimensions),
    tolerances: toList(source.tolerances || source.keyTolerances || source.key_tolerances),
    surfaceRoughness: toList(source.surfaceRoughness || source.surface_roughness || source.roughness),
    technicalRequirements: toList(source.technicalRequirements || source.technical_requirements || source.requirements),
    processingNotes: toList(source.processingNotes || source.processing_notes || source.notes || source.machiningNotes || source.machining_notes),
    warnings: toList(source.warnings || source.reminders || source.keyReminders || source.key_reminders),
    beginnerExplanation: toList(source.beginnerExplanation || source.beginner_explanation || source.beginnerNotes),
  };
}

function parseReportSource(report) {
  if (report && typeof report === 'object' && !Array.isArray(report)) return report;
  if (typeof report !== 'string') return null;

  let text = stripJsonFence(report.trim());
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const parsed = JSON.parse(text);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
      if (typeof parsed === 'string') {
        text = stripJsonFence(parsed.trim());
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

function toList(value) {
  if (Array.isArray(value)) return value.flatMap(toList).filter(Boolean);
  const text = toDisplayText(value);
  return text ? [text] : [];
}

function toDisplayText(value) {
  if (value == null) return '';
  if (Array.isArray(value)) return toList(value).join('；');
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);

  if (typeof value === 'object') {
    const pairedText = toPairedObjectText(value);
    if (pairedText) return pairedText;

    const readableEntries = Object.entries(value)
      .map(([key, entryValue]) => {
        const entryText = toDisplayText(entryValue);
        return entryText ? `${toFieldLabel(key)}：${entryText}` : '';
      })
      .filter(Boolean);

    if (readableEntries.length > 0) return readableEntries.join('\n');

    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }

  return String(value);
}

function toPairedObjectText(value) {
  const pairs = [
    ['name', 'value'],
    ['label', 'value'],
    ['title', 'description'],
  ];

  for (const [labelField, valueField] of pairs) {
    const label = toDisplayText(value[labelField]);
    const detail = toDisplayText(value[valueField]);
    if (label && detail) return `${label}：${detail}`;
  }

  return '';
}

function toFieldLabel(key) {
  return fieldLabels[key] || key;
}
