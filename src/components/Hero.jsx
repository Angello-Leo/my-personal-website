import { useState, useEffect } from 'react';

export default function Hero({ goToProjects, goToAbout }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation right after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen w-screen min-w-[100vw] flex-shrink-0 flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Accent Blur - Scales up & glows */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none transition-all duration-1000 ease-out ${
          loaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      />

      <div
        className={`max-w-4xl mx-auto text-center z-10 space-y-6 transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
          Stand out{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            be different.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed">
          Hi, I'm <strong className="text-zinc-200">Leo Angello P. Visto</strong>, a 3rd year Computer Science student from Laguna State Polytechnic University specializing in Intelligent Systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 z-10">
          <button
            onClick={goToProjects}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all shadow-lg shadow-violet-600/25 cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={goToAbout}
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-zinc-800 hover:border-violet-500/50 text-zinc-300 hover:text-white font-medium transition-all bg-zinc-900/40 backdrop-blur-sm cursor-pointer"
          >
            More About Me
          </button>
        </div>
      </div>
    </section>
  );
}