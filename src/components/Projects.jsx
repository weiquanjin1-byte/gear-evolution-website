import { Bot, CircuitBoard, Globe2, NotebookText } from 'lucide-react';
import Section from './Section.jsx';

const projects = [
  {
    number: '01',
    icon: NotebookText,
    title: '小齿轮进化中',
    desc: '记录从 0 学 AI 的真实成长过程，包括学习笔记、阶段复盘、项目实践和内容发布。',
    status: '进行中',
    tags: ['AI 学习', '成长记录', '内容创作'],
  },
  {
    number: '02',
    icon: Globe2,
    title: 'AI × 机械工程个人主页',
    desc: '用 React、Vite、Tailwind 搭建个人网站，展示个人方向、成长记录、项目实践和技能路线。',
    status: '进行中',
    tags: ['React', 'Tailwind', '个人网站'],
  },
  {
    number: '03',
    icon: CircuitBoard,
    title: '机械资料整理助手',
    desc: '探索用 AI 辅助整理机械工程资料、学习笔记、图纸说明、工艺知识和项目文档。',
    status: '计划中',
    tags: ['机械工程', 'AI 助手', '知识整理'],
  },
  {
    number: '04',
    icon: Bot,
    title: '智能制造探索实验',
    desc: '未来尝试把 Python、AI 工具和工程思维结合，用于自动化流程、数据整理和智能制造学习。',
    status: '构思中',
    tags: ['Python', '智能制造', '自动化'],
  },
];

const statusStyles = {
  进行中: 'border-pink-200/35 bg-pink-300/10 text-pink-100',
  计划中: 'border-cyan-200/30 bg-cyan-300/10 text-cyan-100',
  构思中: 'border-violet-200/35 bg-violet-300/10 text-violet-100',
};

export default function Projects() {
  return (
    <Section id="mechanical-ai" eyebrow="Projects" title="项目方向">
      <div className="mb-8 max-w-3xl text-lg leading-8 text-cyan-100/85">
        这些不是一次性摆出来的作品，而是未来会持续推进、持续更新的方向。每一个项目都会从小实验开始，慢慢长成更完整的工程记录。
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              key={project.number}
              className="cyber-card group flex min-h-[320px] flex-col p-6 hover:border-cyan-200/40 hover:shadow-neon"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.12)] transition duration-300 group-hover:border-pink-200/40 group-hover:text-pink-100 group-hover:shadow-violet">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.24em] text-cyan-100/60">
                      Project
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-white">
                      {project.number}
                    </p>
                  </div>
                </div>

                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <div className="mb-5 h-px bg-gradient-to-r from-cyan-200/45 via-violet-200/25 to-transparent" />

              <h3 className="font-display text-xl font-bold leading-7 text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-slate-300 transition duration-300 hover:border-cyan-200/35 hover:bg-cyan-200/10 hover:text-cyan-100"
                  >
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
