import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cyber-dark text-slate-100">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,255,.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(255,61,242,.13),transparent_24%),linear-gradient(135deg,#050814_0%,#090d1d_46%,#120722_100%)]" />
      <div className="fixed inset-0 -z-10 bg-cyber-grid bg-[length:34px_34px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
