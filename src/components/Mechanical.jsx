import { Cog, DraftingCompass, Factory, Wrench } from 'lucide-react';
import Section from './Section.jsx';

const points = [
  { icon: DraftingCompass, title: '机械设计基础', desc: '理解结构、材料、传动与工程表达。' },
  { icon: Cog, title: 'SolidWorks / CAD', desc: '具备建模与工程图基础，持续提升表达能力。' },
  { icon: Factory, title: '智能制造方向', desc: '关注自动化、数据驱动制造与 AI 工具落地。' },
  { icon: Wrench, title: '工程实践意识', desc: '把学习结果沉淀为可展示、可复盘的作品。' },
];

export default function Mechanical() {
  return (
    <Section id="mechanical" eyebrow="Mechanical Engineering" title="机械工程背景">
      <div className="grid gap-5 md:grid-cols-2">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <article key={point.title} className="cyber-card flex gap-5 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-violet-200/25 bg-violet-300/10 text-violet-100 shadow-violet">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{point.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{point.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
