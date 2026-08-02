export default function About() {
  const skills = [
    "C#", ".NET", "React", "Tailwind CSS", 
    "OpenCV", "ONNX / AI", "JavaScript", "Git"
  ];

  return (
    <section className="h-screen w-screen min-w-[100vw] flex-shrink-0 flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
            Background & Focus
          </h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white">
            More About Me
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio Box */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 backdrop-blur-sm">
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              I’m a developer passionate about building performant applications, clean architectures, and interactive user experiences. 
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              Lately, I’ve been deep-diving into real-time computer vision and machine learning integrations—mapping facial telemetry and fine-tuning baseline models like EmoTunes, alongside crafting modern web platforms.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              When I'm away from the keyboard, you'll usually find me hitting the gym, spending quality time with family, or immersing myself in The Legend of Zelda.
            </p>
          </div>

          {/* Tech Stack Box */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <h4 className="text-sm font-semibold text-zinc-200 mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1.5 rounded-lg bg-violet-950/60 border border-violet-800/40 text-violet-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stat / Status */}
            <div className="pt-6 border-t border-zinc-800/60">
              <span className="text-xs text-zinc-500 block">Current Focus</span>
              <span className="text-sm font-medium text-zinc-300">
                AI Vision & Modern Web Apps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}