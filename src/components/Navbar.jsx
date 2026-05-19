import { Cog, Search } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '成长记录', href: '#journey' },
  { label: '项目方向', href: '#mechanical-ai' },
  { label: '技能方向', href: '#skills' },
  { label: '联系我', href: '#contact' },
];

const searchTargets = [
  { keywords: ['首页', '主页', '小齿轮'], href: '#home' },
  { keywords: ['关于', '个人', '介绍'], href: '#about' },
  { keywords: ['成长', '记录', '学习', '日志', '时间线'], href: '#journey' },
  { keywords: ['项目', '方向', '机械', '智能制造'], href: '#mechanical-ai' },
  { keywords: ['技能', '工具', '能力', 'ai', '人工智能'], href: '#skills' },
  { keywords: ['联系', '邮箱', 'email', 'github', '小红书'], href: '#contact' },
];

export default function Navbar() {
  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const normalizedQuery = String(formData.get('search') || '').trim().toLowerCase();

    if (!normalizedQuery) return;

    const target = searchTargets.find((item) =>
      item.keywords.some((keyword) => normalizedQuery.includes(keyword.toLowerCase())),
    );

    window.location.hash = target?.href ?? '#home';
    event.currentTarget.reset();
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-300/10 bg-cyber-dark/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <a href="#home" className="group flex items-center gap-3 font-display text-xl font-bold sm:text-2xl">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-neon transition group-hover:rotate-45 sm:h-11 sm:w-11">
            <Cog className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-pink-200 bg-clip-text text-transparent">
            小齿轮进化中
          </span>
        </a>

        <form onSubmit={handleSearch} className="order-3 flex w-full items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[.04] px-3 py-2 text-sm shadow-neon backdrop-blur sm:order-none sm:w-64 md:w-72">
          <Search className="h-4 w-4 text-cyan-100/75" />
          <input
            name="search"
            aria-label="搜索页面区域"
            placeholder="搜索成长记录、项目方向..."
            className="min-w-0 flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
          />
        </form>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-neon"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
