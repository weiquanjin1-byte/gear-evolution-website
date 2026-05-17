import Section from './Section.jsx';

const tags = ['机械工程', 'AI 学习', 'Python', 'SolidWorks', '智能制造', '俄罗斯留学'];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="关于我">
      <div className="cyber-card grid gap-8 p-6 md:grid-cols-[1.25fr_.75fr] md:p-8">
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            我有机械工程学习背景，正在系统学习 AI、Python 和智能制造相关知识。
          </p>
          <p>
            我希望未来走向 AI + 机械工程的方向，把人工智能、机械设计、自动化和工程实践结合起来。
          </p>
          <p>
            这个网站会记录我的学习过程、项目尝试和成长变化。
          </p>
        </div>
        <div className="flex flex-wrap content-start gap-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
