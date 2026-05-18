import { Cpu, DraftingCompass, Sparkles } from 'lucide-react';

const tags = ['机械工程', 'AI 学习', 'Python', 'SolidWorks', '智能制造', '个人成长'];

const cards = [
  {
    icon: DraftingCompass,
    title: '工程基础',
    text: '机械设计、制图与工程实践',
  },
  {
    icon: Cpu,
    title: 'AI 方向',
    text: '工具使用、编程入门与智能制造',
  },
  {
    icon: Sparkles,
    title: '成长记录',
    text: '把每次尝试沉淀成可复盘内容',
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-20">
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
      <div className="mb-10">
        <p className="font-display text-sm uppercase tracking-[0.28em] text-cyan-200/80">
          About Me
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          关于我
        </h2>
        <p className="mt-4 text-lg text-cyan-100">
          从机械工程出发，走向 AI 实践
        </p>
      </div>

      <div className="cyber-card grid gap-8 p-6 md:grid-cols-[1.15fr_.85fr] md:p-8">
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            我有机械工程学习背景，正在系统学习 AI、Python 和智能制造相关知识。
          </p>
          <p>
            我希望未来走向 AI + 机械工程的方向，把人工智能、机械设计、自动化和工程实践结合起来。
          </p>
          <p>
            这个网站会记录我的学习过程、项目尝试和成长变化。
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.08)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-lg border border-violet-200/20 bg-white/[.04] p-5 shadow-violet backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:shadow-neon"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                </div>
                <p className="leading-7 text-slate-300">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
