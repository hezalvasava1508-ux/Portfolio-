import { useState } from 'react';
import { 
  Play, ArrowUpRight, CheckCircle2, Layers, Sparkles, ExternalLink, Code
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import CareerRecommenderModal from './modals/CareerRecommenderModal';
import ResumeBuilderModal from './modals/ResumeBuilderModal';
import IdeaGeneratorModal from './modals/IdeaGeneratorModal';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeSimulator, setActiveSimulator] = useState<string | null>(null);

  const handleOpenSimulator = (demoType: string) => {
    setActiveSimulator(demoType);
  };

  return (
    <section id="projects" className="py-20 bg-[#070a12]/60 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-2">
              Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Flagship Projects
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Interactive software projects demonstrating backend Java architecture, dynamic web frontends, and native Android development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-purple-500/50 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/20 border-b border-slate-800/80 relative">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    {/* Zero-Pill unboxed metadata */}
                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      <span className="text-purple-400 font-semibold">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>0{index + 1}</span>
                    </div>

                    <button
                      onClick={() => handleOpenSimulator(project.demoType)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-600/30 border border-purple-500/30 rounded-md transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" /> Live Simulator
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-purple-400/90 font-medium mt-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
                    <span>{project.highlight}</span>
                  </p>
                </div>

                {/* Tech Stack Bar */}
                <div className="px-6 py-3 bg-[#06080e]/60 border-b border-slate-800/60 flex flex-wrap items-center gap-1.5 text-xs">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description Bullets */}
                <div className="p-6 space-y-2.5">
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                    {project.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-2">
                <button
                  onClick={() => handleOpenSimulator(project.demoType)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-md transition-all active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Demo Simulator</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Simulator Modals */}
      <CareerRecommenderModal
        isOpen={activeSimulator === 'career-recommender'}
        onClose={() => setActiveSimulator(null)}
      />

      <ResumeBuilderModal
        isOpen={activeSimulator === 'resume-builder'}
        onClose={() => setActiveSimulator(null)}
      />

      <IdeaGeneratorModal
        isOpen={activeSimulator === 'idea-generator'}
        onClose={() => setActiveSimulator(null)}
      />
    </section>
  );
}
