export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Accent Blurs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
          Building digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">precision & purpose.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed">
          Hi, I'm <strong className="text-zinc-200">Leo Angello P. Visto</strong>, A 3rd year Computer Science student from Laguna State Polytechnic University specializing in Intelligent Systems.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all shadow-lg shadow-violet-600/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-zinc-800 hover:border-violet-500/50 text-zinc-300 hover:text-white font-medium transition-all bg-zinc-900/40 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}