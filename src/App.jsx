import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <main className="bg-[#09070F] text-slate-100 min-h-screen selection:bg-violet-500 selection:text-white">
      <Hero />
      <Projects />
    </main>
  );
}