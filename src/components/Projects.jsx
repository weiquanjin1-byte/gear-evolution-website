import { Bot, BrainCircuit, DraftingCompass, NotebookText } from 'lucide-react';
import Section from './Section.jsx';

const modules = [
  {
    id: 'journey',
    icon: NotebookText,
    title: '学习日志',
    desc: '记录从 0 学 AI 的每日输入、关键概念、踩坑过程和阶段复盘。',
    status: '持续记录',
    tags: ['AI学习', '成长记录', '复盘'],
  },
  {
    id: 'lab',
    icon: Bot,
    title: 'AI工具实验室',
    desc: '尝试 ChatGPT、代码助手、资料整理和学习辅助工具，把工具变成生产力。',
    status: '实验中',
    tags: ['AI工具', 'Prompt', '效率提升'],
  },
  {
    id: 'mechanical-ai',
    icon: DraftingCompass,
    title: '机械+AI项目',
    desc: '探索 AI 在机械设计、CAD资料、智能制造和工程实践中的真实应用。',
    status: '构思中',
    tags: ['机械工程', '智能制造', '项目实践'],
  },
  {
    id: 'about',
    icon: BrainCircuit,
    title: '关于我',
    desc: '机械工程背景学习者，正在把工程思维、AI能力和持续输出结合起来。',
    status: '进化中',
    tags: ['机械学生', 'Python入门', '个人成长'],
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Home Modules" title="首页四个模块">
      <div className="grid gap-5 md:grid-cols-2">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <article key={module.title} id={module.id} className="cyber-card flex min-h-[260px] flex-col p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-pink-200/25 bg-pink-300/10 px-3 py-1 text-xs text-pink-100">
                  {module.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{module.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{module.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {module.tags.map((tag) => (
                  <span key={tag} className="rounded border border-white/10 bg-white/[.05] px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
