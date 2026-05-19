import { Bot, BrainCircuit, DraftingCompass, Rocket, TerminalSquare } from 'lucide-react';
import Section from './Section.jsx';

const items = [
  {
    number: '01',
    title: '启动小齿轮进化中',
    text: '决定公开记录自己从 0 学 AI 的过程，把学习、踩坑、项目实践都沉淀下来。',
    status: '已完成',
    icon: Rocket,
  },
  {
    number: '02',
    title: '搭建个人网页',
    text: '使用 React、Vite、Tailwind 搭建 AI × 机械工程个人主页，完成 Hero 和 About 模块。',
    status: '已完成',
    icon: TerminalSquare,
  },
  {
    number: '03',
    title: 'AI 工具学习',
    text: '学习 Codex、ChatGPT、Python、VS Code 等工具，理解 Agent、模型、自动化等基础概念。',
    status: '进行中',
    icon: Bot,
  },
  {
    number: '04',
    title: '机械 × AI 探索',
    text: '未来尝试把 AI 用到机械设计、工程资料整理、智能制造和自动化流程中。',
    status: '下一步',
    icon: DraftingCompass,
  },
];

const statusStyles = {
  已完成: 'border-cyan-200/30 bg-cyan-300/10 text-cyan-100',
  进行中: 'border-pink-200/35 bg-pink-300/10 text-pink-100',
  下一步: 'border-violet-200/35 bg-violet-300/10 text-violet-100',
};

export default function Timeline() {
  return (
    <Section id="journey" eyebrow="Growth Timeline" title="成长记录">
      <div className="mb-8 max-w-3xl text-lg leading-8 text-cyan-100/85">
        从决定开始，到搭建网页，再到持续学习工具和探索机械工程应用，这里记录的不是完美结果，而是一步一步变强的过程。
      </div>

      <div className="relative">
        <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-200/50 via-violet-200/30 to-transparent md:block xl:left-1/2 xl:-translate-x-1/2" />

        <div className="grid gap-5 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.number}
                className="cyber-card group min-h-[300px] p-6 hover:border-cyan-200/40 hover:shadow-neon"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.24em] text-cyan-100/65">
                      Phase
                    </p>
                    <div className="mt-2 flex items-end gap-2">
                      <span className="font-display text-4xl font-bold text-white drop-shadow-[0_0_18px_rgba(0,229,255,0.24)]">
                        {item.number}
                      </span>
                      <span className="mb-1 h-px w-12 bg-gradient-to-r from-cyan-200/70 to-transparent" />
                    </div>
                  </div>

                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.12)] transition duration-300 group-hover:border-pink-200/40 group-hover:text-pink-100 group-hover:shadow-violet">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-violet-200/25 bg-violet-300/10 px-3 py-1 text-xs font-medium text-violet-100">
                    阶段 {item.number}
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold leading-7 text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-6 cyber-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-pink-200/25 bg-pink-300/10 text-pink-100 shadow-pink">
            <BrainCircuit className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-cyan-100/75">
              Current Signal
            </p>
            <p className="mt-1 text-white">继续把 AI 学习过程拆成可记录、可复盘、可展示的小阶段。</p>
          </div>
        </div>
        <span className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
          小齿轮正在进化中
        </span>
      </div>
    </Section>
  );
}
