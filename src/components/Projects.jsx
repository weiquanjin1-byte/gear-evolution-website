import { useState } from 'react';
import { Bot, BrainCircuit, CalendarDays, DraftingCompass, NotebookText } from 'lucide-react';
import Section from './Section.jsx';

const modules = [
  {
    id: 'journey',
    icon: NotebookText,
    title: '成长记录',
    desc: '记录从零学习 AI 的每日输入、关键概念、踩坑过程和阶段复盘。',
    status: '持续记录',
    tags: ['AI 学习', '成长记录', '复盘'],
  },
  {
    id: 'lab',
    icon: Bot,
    title: '技能方向',
    desc: '围绕 AI 工具、编程入门、资料整理和学习辅助能力持续练习。',
    status: '持续探索',
    tags: ['AI 工具', '提示词', '效率提升'],
  },
  {
    id: 'mechanical-ai',
    icon: DraftingCompass,
    title: '项目方向',
    desc: '探索 AI 在机械设计、工艺加工自动化、智能制造和工程实践中的应用。',
    status: '构思中',
    tags: ['机械设计与工艺加工自动化', '智能制造', '项目实践'],
  },
  {
    id: 'about',
    icon: BrainCircuit,
    title: '关于我',
    desc: '机械工程背景学习者，正在把工程思维、AI 能力和持续输出结合起来。',
    status: '进化中',
    tags: ['机械工程', '编程入门', '个人成长'],
  },
];

const timeline = [
  {
    day: '第 1 天',
    title: '启动 AI 学习计划',
    detail: '确定从机械工程出发学习 AI，梳理需要补齐的基础能力。',
  },
  {
    day: '第 2 天',
    title: '建立成长记录',
    detail: '整理“小齿轮进化中”的定位，开始记录学习过程和阶段变化。',
  },
  {
    day: '第 3 天',
    title: '搭建个人主页',
    detail: '用 React、Vite 和 Tailwind CSS 做出第一版赛博朋克风格首页。',
  },
  {
    day: '第 4 天',
    title: '调整个人 IP 视觉',
    detail: '把个人形象放进首页 Hero 区域，形成更明确的个人主页识别。',
  },
];

export default function Projects() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <Section id="projects" eyebrow="Home Modules" title="成长与项目模块">
      <div className="grid gap-5 md:grid-cols-2">
        {modules.map((module) => {
          const Icon = module.icon;
          const isJourney = module.id === 'journey';

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
              {isJourney && (
                <button
                  type="button"
                  onClick={() => setShowJourney((current) => !current)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/60 hover:bg-cyan-300/20 hover:shadow-neon"
                >
                  <CalendarDays className="h-4 w-4" />
                  {showJourney ? '收起时间表' : '查看时间表'}
                </button>
              )}
            </article>
          );
        })}
      </div>

      {showJourney && (
        <div className="cyber-card mt-6 p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-cyan-100" />
            <h3 className="font-display text-2xl font-bold text-white">每日学习时间表</h3>
          </div>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.day} className="grid gap-3 border-l border-cyan-200/25 pl-5 md:grid-cols-[120px_1fr]">
                <div className="font-display text-sm text-pink-100">{item.day}</div>
                <div>
                  <h4 className="font-semibold text-cyan-50">{item.title}</h4>
                  <p className="mt-1 leading-7 text-slate-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
