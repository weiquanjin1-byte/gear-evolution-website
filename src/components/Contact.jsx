import { Github, Mail, MessageCircle, RadioTower } from 'lucide-react';
import Section from './Section.jsx';

const contacts = [
  { label: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/' },
  { label: '微信', icon: MessageCircle, href: '#contact' },
  { label: '内容平台', icon: RadioTower, href: '#contact' },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="联系方式">
      <div className="cyber-card p-6 text-center md:p-10">
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
          如果你也关注 AI、机械工程、智能制造或个人成长，欢迎交流。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a key={contact.label} className="neon-button-secondary" href={contact.href}>
                <Icon className="h-4 w-4" />
                {contact.label}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
