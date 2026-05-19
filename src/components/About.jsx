import {
  Bot,
  BrainCircuit,
  Cpu,
  DraftingCompass,
  Gauge,
  Rocket,
  Tags,
} from 'lucide-react';

const focusItems = [
  {
    icon: Gauge,
    label: '当前任务',
    value: '从 0 搭建 AI + 编程学习节奏',
  },
  {
    icon: Rocket,
    label: '当前方向',
    value: 'AI × 机械工程 × 智能制造',
  },
  {
    icon: Tags,
    label: '学习标签',
    value: 'Python / React / 自动化 / 工程表达',
  },
];

const learningTags = [
  '机械工程',
  'AI 工具',
  'Python',
  'React',
  '智能制造',
  '工程应用',
  '成长记录',
];

const cards = [
  {
    icon: DraftingCompass,
    title: '机械工程底盘',
    text: '把机械制图、结构理解、工艺意识和工程问题拆解能力作为基础，让 AI 学习不飘在空中。',
  },
  {
    icon: BrainCircuit,
    title: 'AI 工具进化',
    text: '从提示词、资料整理、代码辅助开始，逐步学习 Python、React 和自动化，把工具变成能力。',
  },
  {
    icon: Cpu,
    title: '工程应用探索',
    text: '面向智能制造、设计效率、数据分析和工程流程优化，尝试把新技能落到真实场景里。',
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
          关于小齿轮进化中
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-cyan-100/90">
          这里不是最终作品集，而是一块正在发光的成长记录板。
        </p>
      </div>

      <div className="cyber-card p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.12)]">
              <Bot className="h-4 w-4" />
              Learning in public
            </div>

            <p>
              我是一个机械工程方向学习者，正在把过去对机械结构、工程图纸和制造流程的理解，慢慢接到 AI
              与编程能力上。
            </p>
            <p>
              现在的我仍在从 0 学习 AI、Python、React 和智能制造。这个网站会记录学习路线、阶段复盘、工具实验和项目尝试，
              它会随着我一起升级，而不是假装已经抵达终点。
            </p>
            <p>
              我的目标很清晰：走向 AI × 机械工程方向，用工程思维理解问题，用 AI 工具提升效率，再把能力落到可验证的应用里。
            </p>
          </div>

          <div className="grid gap-4">
            {focusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group rounded-lg border border-violet-200/20 bg-white/[.045] p-5 shadow-violet backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-200/[.06] hover:shadow-neon"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-200/30 bg-cyan-200/10 text-cyan-100 transition duration-300 group-hover:border-pink-200/40 group-hover:text-pink-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-cyan-100/75">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-lg font-semibold leading-7 text-white">{item.value}</p>
                </div>
              );
            })}

            <div className="rounded-lg border border-cyan-200/15 bg-cyber-panel/55 p-5 shadow-[inset_0_0_28px_rgba(0,229,255,0.05)]">
              <div className="flex flex-wrap gap-3">
                {learningTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-pink-200/35 hover:bg-pink-300/10 hover:text-pink-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group rounded-lg border border-cyan-200/15 bg-gradient-to-br from-cyan-300/[.08] via-white/[.035] to-violet-400/[.08] p-5 shadow-[0_0_22px_rgba(0,229,255,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-neon"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-200/30 bg-cyan-200/10 text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.14)] transition duration-300 group-hover:border-violet-200/45 group-hover:text-white group-hover:shadow-violet">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-cyan-200/35 via-violet-200/25 to-transparent" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
