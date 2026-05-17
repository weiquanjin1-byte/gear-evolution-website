import { Mail, MessageCircle, Sparkles } from 'lucide-react';

const contacts = [
  {
    label: 'Gmail',
    value: 'weiquanjin1@gmail.com',
    href: 'mailto:weiquanjin1@gmail.com',
    icon: Mail,
  },
  {
    label: '微信',
    value: '16696762257',
    href: null,
    icon: MessageCircle,
  },
  {
    label: 'QQ',
    value: '1124893176',
    href: null,
    icon: MessageCircle,
  },
  {
    label: '小红书',
    value: '小齿轮进化中',
    href: null,
    icon: Sparkles,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 px-5 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <>
                <Icon className="h-4 w-4 text-cyan-100" />
                <span className="text-slate-500">{contact.label}</span>
                <span className="text-cyan-50">{contact.value}</span>
              </>
            );

            return contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[.04] px-4 py-2 transition hover:border-cyan-100/45 hover:bg-cyan-300/10 hover:shadow-neon"
              >
                {content}
              </a>
            ) : (
              <div
                key={contact.label}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[.04] px-4 py-2"
              >
                {content}
              </div>
            );
          })}
        </div>
        <div>
          <p>© 2026 小齿轮进化中</p>
          <p className="mt-2 font-display text-cyan-100">Keep Evolving.</p>
        </div>
      </div>
    </footer>
  );
}
