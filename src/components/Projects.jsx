const projects = [
  {
    title: 'EmoTunes',
    description: 'A real-time facial expression mapping application using ONNX models to calibrate and categorize baseline emotions.',
    tech: ['C#', 'OpenCV', 'ONNX', 'AI/ML'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, highly responsive developer portfolio built with React and Tailwind CSS featuring dynamic components.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI Vision Dashboard',
    description: 'Analytics dashboard monitoring real-time computer vision streams and emotion detection telemetry.',
    tech: ['React', 'Tailwind CSS', 'C#'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function Projects() {
  return (
    <section className="h-screen w-screen min-w-[100vw] flex-shrink-0 flex items-center justify-center relative overflow-hidden px-6">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          A selection of recent applications, machine learning experiments, and development work.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-violet-400 font-mono"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}