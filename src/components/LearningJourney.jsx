import { Rocket, ScanLine, TerminalSquare } from 'lucide-react';
import Section from './Section.jsx';

const items = [
  {
    day: 'Day 1',
    title: '启动 AI 学习计划',
    text: '确定学习方向，开始从 0 了解 AI 工具和应用场景。',
    icon: Rocket,
  },
  {
    day: 'Day 2',
    title: '建立“小齿轮进化中”项目',
    text: '决定记录自己的 AI 学习过程，形成个人成长账号。',
    icon: ScanLine,
  },
  {
    day: 'Day 3',
    title: '规划个人网页',
    text: '开始搭建属于自己的 AI + 机械成长主页。',
    icon: TerminalSquare,
  },
];

export default function LearningJourney() {
  return (
    <Section id="journey" eyebrow="AI Learning Journey" title="AI 学习日志">
      <div className="relative grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.day} className="cyber-card p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-sm text-pink-200">{item.day}</span>
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
