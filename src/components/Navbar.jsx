import { Cog } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '学习日志', href: '#journey' },
  { label: 'AI实验室', href: '#lab' },
  { label: '机械+AI', href: '#mechanical-ai' },
  { label: '关于我', href: '#about' },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-300/10 bg-cyber-dark/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="group flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-neon transition group-hover:rotate-45">
            <Cog className="h-5 w-5" />
          </span>
          <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-pink-200 bg-clip-text text-transparent">
            小齿轮进化中
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
