import { Github, Mail, Sparkles } from 'lucide-react';
import Section from './Section.jsx';

const contacts = [
  {
    label: 'GitHub',
    text: '查看我的项目代码与网页更新',
    href: 'https://github.com/weiquanjin1-byte',
    icon: Github,
    meta: 'weiquanjin1-byte',
  },
  {
    label: '小红书',
    text: '查看我的学习记录和成长内容',
    href: '#',
    icon: Sparkles,
    meta: '小齿轮进化中',
  },
  {
    label: 'Email',
    text: '用于交流、合作或建议',
    href: 'mailto:weiquanjin1@gmail.com',
    icon: Mail,
    meta: 'weiquanjin1@gmail.com',
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="联系我">
      <div className="cyber-card p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="font-display text-2xl font-bold leading-9 text-white sm:text-3xl">
                一起交流 AI、机械工程、智能制造和成长记录
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                如果你也对 AI、机械工程、智能制造或个人成长记录感兴趣，欢迎和我一起交流。
                这里是“小齿轮进化中”，一个从 0 开始学习 AI × 机械工程的成长主页。
              </p>
            </div>

            <div className="rounded-lg border border-cyan-200/15 bg-cyber-panel/55 p-5 shadow-[inset_0_0_28px_rgba(0,229,255,0.05)]">
              <p className="font-display text-sm uppercase tracking-[0.22em] text-cyan-100/70">
                Closing Signal
              </p>
              <p className="mt-3 text-lg font-semibold leading-8 text-white">
                一个小齿轮，也可以慢慢咬合更大的系统。
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group rounded-lg border border-cyan-200/15 bg-white/[.045] p-5 shadow-[0_0_22px_rgba(0,229,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-200/[.06] hover:shadow-neon"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.12)] transition duration-300 group-hover:border-pink-200/40 group-hover:text-pink-100 group-hover:shadow-violet">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-xl font-bold text-white">{contact.label}</span>
                        <span className="rounded-full border border-violet-200/25 bg-violet-300/10 px-3 py-1 text-xs text-violet-100">
                          {contact.meta}
                        </span>
                      </span>
                      <span className="mt-3 block leading-7 text-slate-300">{contact.text}</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
