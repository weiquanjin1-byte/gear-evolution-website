import { lazy, Suspense } from 'react';
import { ArrowRight, Binary, Cpu, Gauge, ScanLine, Sparkles } from 'lucide-react';
import profileChibi from '../assets/profile-chibi.png';

const HeroBackground = lazy(() => import('./HeroBackground.jsx'));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Suspense fallback={<div className="hero-background hero-background-fallback" aria-hidden="true" />}>
        <HeroBackground />
      </Suspense>
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.02fr_.98fr]">
        <div className="hero-copy-panel relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-neon">
            <Sparkles className="h-4 w-4" />
            AI × Mechanical Engineering
          </div>
          <h1 className="font-display text-5xl font-black leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
            小齿轮
            <span className="block bg-gradient-to-r from-cyan-200 via-violet-300 to-pink-300 bg-clip-text text-transparent">
              进化中
            </span>
          </h1>
          <p className="mt-5 font-display text-2xl text-cyan-100 sm:text-3xl">
            AI × 机械工程
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            从机械工程出发，探索 AI 的未来。
            <br />
            记录每一次学习、每一次思考、每一次进化。
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="neon-button group" href="#journey">
              查看成长记录
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a className="neon-button-secondary" href="#mechanical-ai">
              查看项目方向
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ['AI 学习', '从工具使用到模型理解'],
              ['机械工程', '从制图基础到智能制造'],
              ['项目实践', '从想法构思到作品落地'],
            ].map(([name, desc]) => (
              <div key={name} className="hud-mini-card rounded-lg border border-cyan-200/15 bg-white/[.04] p-4 backdrop-blur">
                <div className="font-display text-lg text-cyan-100">{name}</div>
                <div className="mt-2 text-sm leading-6 text-slate-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[560px] w-full max-w-[560px] sm:h-[650px] lg:h-[620px]">
          <div className="assistant-glow absolute left-1/2 top-[44%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <div className="lab-orbit lab-orbit-a" />
          <div className="lab-orbit lab-orbit-b" />
          <div className="gear-visual gear-teeth absolute left-1/2 top-[44%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30 bg-cyber-panel/20 shadow-neon backdrop-blur-[2px] sm:h-[400px] sm:w-[400px]" />
          <div className="circuit-line circuit-line-a" />
          <div className="circuit-line circuit-line-b" />
          <div className="circuit-line circuit-line-c" />

          <div className="absolute left-8 top-28 rounded-lg border border-cyan-300/25 bg-cyber-panel/70 p-3 text-cyan-100 shadow-neon backdrop-blur">
            <Binary className="h-5 w-5" />
          </div>
          <div className="absolute bottom-44 left-10 rounded-lg border border-violet-300/30 bg-cyber-panel/70 p-3 text-violet-100 shadow-violet backdrop-blur">
            <Gauge className="h-5 w-5" />
          </div>
          <div className="absolute right-8 top-28 rounded-lg border border-pink-300/30 bg-cyber-panel/70 p-3 text-pink-100 shadow-pink backdrop-blur">
            <Cpu className="h-5 w-5" />
          </div>
          <div className="absolute right-10 bottom-52 rounded-lg border border-cyan-300/25 bg-cyber-panel/70 p-3 text-cyan-100 shadow-neon backdrop-blur">
            <ScanLine className="h-5 w-5" />
          </div>

          <div className="ip-card absolute left-1/2 top-[45%] flex h-[360px] w-[290px] -translate-x-1/2 -translate-y-1/2 items-end justify-center rounded-[28px] border border-cyan-200/30 bg-slate-950/12 p-2 shadow-neon backdrop-blur-[1px] sm:h-[470px] sm:w-[370px] sm:p-3">
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_24%,rgba(0,229,255,.18),transparent_34%),linear-gradient(145deg,rgba(139,92,246,.18),transparent_48%)]" />
            <img
              src={profileChibi}
              alt="小齿轮进化中个人 IP 形象"
              className="relative z-10 max-h-[98%] w-full object-contain drop-shadow-[0_0_34px_rgba(0,229,255,0.42)]"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 w-[min(92%,460px)] -translate-x-1/2 rounded-2xl border border-cyan-200/30 bg-cyber-panel/82 p-4 text-center shadow-neon backdrop-blur-xl sm:p-5">
            <p className="text-sm leading-7 text-slate-200 sm:text-base">
              机械工程学习者，正在从零探索人工智能。
              <br />
              用工程思维记录学习，用 AI 工具放大能力，
              <br />
              让每一次尝试都成为进化的一步。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
