import { CircuitBoard, Layers, NotebookText } from 'lucide-react';
import Section from './Section.jsx';

const projects = [
  {
    icon: NotebookText,
    title: '小齿轮进化中',
    desc: '记录从 0 学 AI 的过程，整理学习笔记、阶段总结和成长内容。',
    status: '进行中',
    tags: ['AI学习', '个人成长', '内容记录'],
  },
  {
    icon: Layers,
    title: 'AI + 机械个人主页',
    desc: '搭建一个展示个人方向、学习记录和项目作品的网页。',
    status: '进行中',
    tags: ['React', 'Tailwind', '个人网站'],
  },
  {
    icon: CircuitBoard,
    title: '机械 AI 工具探索',
    desc: '探索 AI 在机械设计、资料整理、学习辅助和工程实践中的应用。',
    status: '构思中',
    tags: ['机械工程', 'AI工具', '智能制造'],
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="项目作品集">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="cyber-card flex min-h-[280px] flex-col p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-pink-200/25 bg-pink-300/10 px-3 py-1 text-xs text-pink-100">
                  {project.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{project.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
