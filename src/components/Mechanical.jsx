import { BrainCircuit, Cog, DraftingCompass, Factory, Wrench } from 'lucide-react';
import Section from './Section.jsx';

const skills = [
  {
    icon: BrainCircuit,
    title: 'AI 工具与提示词',
    desc: '学习使用 ChatGPT、AI 搜索、内容整理和提示词方法，把 AI 变成稳定的学习助手。',
  },
  {
    icon: Cog,
    title: '机械工程基础',
    desc: '持续巩固机械设计、机械制图、材料、结构和传动相关知识，保持工程底盘。',
  },
  {
    icon: DraftingCompass,
    title: 'CAD / SolidWorks',
    desc: '提升建模、工程图表达和设计复盘能力，为后续机械项目展示做准备。',
  },
  {
    icon: Wrench,
    title: 'Python 与自动化',
    desc: '从基础语法开始，尝试脚本、数据整理和小工具开发，让重复任务变简单。',
  },
  {
    icon: Factory,
    title: '智能制造方向',
    desc: '关注自动化、数据驱动制造、AI 辅助设计和工程现场中的实际应用场景。',
  },
];

export default function Mechanical() {
  return (
    <Section id="skills" eyebrow="Skill Roadmap" title="技能方向">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <article key={skill.title} className="cyber-card p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-violet-200/25 bg-violet-300/10 text-violet-100 shadow-violet">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">{skill.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{skill.desc}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
