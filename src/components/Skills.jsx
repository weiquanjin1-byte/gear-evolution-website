import { Bot, Code2, DraftingCompass, Factory } from 'lucide-react';
import Section from './Section.jsx';

const skillGroups = [
  {
    number: '01',
    icon: DraftingCompass,
    title: '机械工程基础',
    desc: '继续巩固工程底盘，把机械表达、结构理解和资料整理能力变成长期优势。',
    status: '学习中',
    skills: ['CAD / 工程制图', 'SolidWorks', '机械结构理解', '工程资料整理'],
  },
  {
    number: '02',
    icon: Bot,
    title: 'AI 工具能力',
    desc: '把 AI 从“会用”推进到“会协作”，逐步理解 Agent、模型和工作流。',
    status: '进化中',
    skills: ['ChatGPT', 'Codex', 'Agent 工作流', 'AI 辅助学习与创作'],
  },
  {
    number: '03',
    icon: Code2,
    title: '编程与网页',
    desc: '从基础语法和页面搭建开始，逐步形成能做小工具、能展示作品的能力。',
    status: '入门中',
    skills: ['Python 入门', 'React', 'Vite', 'Tailwind CSS', 'Git / GitHub'],
  },
  {
    number: '04',
    icon: Factory,
    title: '智能制造方向',
    desc: '面向更长期的工程应用，把自动化、数据整理和 AI × 机械探索连接起来。',
    status: '探索中',
    skills: ['自动化流程', '数据整理', '工程知识库', 'AI × 机械应用探索'],
  },
];

const statusStyles = {
  学习中: 'border-cyan-200/30 bg-cyan-300/10 text-cyan-100',
  进化中: 'border-pink-200/35 bg-pink-300/10 text-pink-100',
  入门中: 'border-violet-200/35 bg-violet-300/10 text-violet-100',
  探索中: 'border-cyan-200/25 bg-white/[.06] text-cyan-50',
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skill Roadmap" title="技能方向">
      <div className="mb-8 max-w-3xl text-lg leading-8 text-cyan-100/85">
        技能路线会跟着项目一起更新：一边补机械工程底盘，一边学习 AI 工具、编程网页和智能制造应用。
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article
              key={group.number}
              className="cyber-card group flex min-h-[340px] flex-col p-6 hover:border-cyan-200/40 hover:shadow-neon"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.12)] transition duration-300 group-hover:border-pink-200/40 group-hover:text-pink-100 group-hover:shadow-violet">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-100/60">
                      Skill
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-white">{group.number}</p>
                  </div>
                </div>

                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[group.status]}`}>
                  {group.status}
                </span>
              </div>

              <div className="mb-5 h-px bg-gradient-to-r from-cyan-200/45 via-violet-200/25 to-transparent" />

              <h3 className="font-display text-xl font-bold leading-7 text-white">{group.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{group.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-slate-300 transition duration-300 hover:border-cyan-200/35 hover:bg-cyan-200/10 hover:text-cyan-100"
                  >
                    {skill}
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
