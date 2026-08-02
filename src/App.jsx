import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const totalSlides = 3;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Intro Splash screen timing
  useEffect(() => {
    const fadeTimer = setTimeout(() => setSplashFading(true), 1200);
    const removeTimer = setTimeout(() => setShowSplash(false), 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Keyboard navigation (Left / Right Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#09070F] text-slate-100 selection:bg-violet-500 selection:text-white">
      {/* Intro Splash Overlay */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#09070F] transition-all duration-700 pointer-events-none ${
            splashFading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30 animate-bounce">
              <span className="text-2xl font-black text-white">LV</span>
            </div>
            <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 uppercase">
              Initializing Portfolio
            </h2>
          </div>
        </div>
      )}

      {/* Animated Slide Track (Slower 1.5s Transition) */}
      <div
        className="flex h-full w-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        <Hero goToProjects={() => setActiveSlide(2)} goToAbout={() => setActiveSlide(1)} />
        <About />
        <Projects />
      </div>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              activeSlide === index
                ? 'w-8 bg-violet-400'
                : 'w-2.5 bg-zinc-600 hover:bg-zinc-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
}