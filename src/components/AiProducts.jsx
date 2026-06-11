import { ArrowRight, Bot, ScanLine } from 'lucide-react';
import Section from './Section.jsx';

const products = [
  {
    title: '齿轮图纸助手',
    desc: '上传机械图纸，AI 帮你整理零件类型、关键尺寸、公差、粗糙度、技术要求和新人解释。',
    href: '/gear-drawing-ai',
    status: 'V0.3 可体验',
    tags: ['机械制图', 'AI 视觉', '新人解释模式'],
  },
];

export default function AiProducts() {
  return (
    <Section id="ai-products" eyebrow="AI Products" title="我的 AI 产品">
      <div className="mb-8 max-w-3xl text-lg leading-8 text-cyan-100/85">
        这些是我把机械工程学习痛点和 AI 能力结合起来做的小工具。先从能真实解决一个小问题开始，慢慢进化。
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <a
            key={product.title}
            href={product.href}
            className="cyber-card group block p-6 hover:border-cyan-200/40 hover:shadow-neon"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.12)] transition duration-300 group-hover:border-pink-200/40 group-hover:text-pink-100 group-hover:shadow-violet">
                <ScanLine className="h-6 w-6" />
              </span>
              <span className="rounded-full border border-pink-200/35 bg-pink-300/10 px-3 py-1 text-xs font-medium text-pink-100">
                {product.status}
              </span>
            </div>

            <div className="mb-5 h-px bg-gradient-to-r from-cyan-200/45 via-violet-200/25 to-transparent" />

            <div className="flex items-start gap-3">
              <Bot className="mt-1 h-5 w-5 shrink-0 text-cyan-100" />
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{product.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{product.desc}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">
              立即体验
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
