import { ArrowRight, Binary, Cog, Cpu, Gauge, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 lg:grid-cols-[1.02fr_.98fr]">
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-neon">
          <Sparkles className="h-4 w-4" />
          AI × Mechanical Engineering Growth Log
        </div>
        <h1 className="font-display text-5xl font-black leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
          小齿轮
          <span className="block bg-gradient-to-r from-cyan-200 via-violet-300 to-pink-300 bg-clip-text text-transparent">
            进化中
          </span>
        </h1>
        <p className="mt-5 max-w-2xl font-display text-xl leading-8 text-cyan-100 sm:text-2xl">
          一个机械工程学生从 0 学 AI 的真实进化记录
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          从机械图纸、结构设计和工程思维出发，记录学习 AI 工具、Python、智能制造与个人项目的每一步。
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a className="neon-button group" href="#journey">
            查看学习日志
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a className="neon-button-secondary" href="#projects">
            查看四个模块
          </a>
        </div>
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
          {[
            ['AI', '从 0 起步'],
            ['CAD', '机械底色'],
            ['Python', '持续练习'],
          ].map(([name, desc]) => (
            <div key={name} className="rounded-lg border border-white/10 bg-white/[.04] p-4 backdrop-blur">
              <div className="font-display text-lg text-cyan-100">{name}</div>
              <div className="mt-1 text-xs text-slate-400">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px]">
        <div className="absolute inset-3 rounded-full border border-cyan-300/20 bg-cyan-300/[.03] shadow-neon" />
        <div className="absolute inset-12 rounded-full border border-violet-300/25 shadow-violet" />
        <div className="absolute inset-24 rounded-full border border-pink-300/25 shadow-pink" />
        <div className="gear-visual gear-teeth absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan-200/50 bg-cyber-panel/80 shadow-neon backdrop-blur-xl">
          <Cog className="absolute h-32 w-32 text-cyan-100/30" />
          <Cpu className="relative h-16 w-16 text-cyan-100" />
        </div>
        <div className="hud-line left-6 top-24 w-36" />
        <div className="hud-line bottom-28 right-5 w-40" />
        <div className="absolute left-8 top-32 rounded-lg border border-cyan-300/20 bg-cyber-panel/70 p-3 text-cyan-100 shadow-neon backdrop-blur">
          <Binary className="h-5 w-5" />
        </div>
        <div className="absolute bottom-24 left-12 rounded-lg border border-violet-300/25 bg-cyber-panel/70 p-3 text-violet-100 shadow-violet backdrop-blur">
          <Gauge className="h-5 w-5" />
        </div>
        <div className="absolute right-10 top-28 rounded-lg border border-pink-300/25 bg-cyber-panel/70 px-4 py-3 font-display text-sm text-pink-100 shadow-pink backdrop-blur">
          EVOLVE_01
        </div>
      </div>
    </section>
  );
}
