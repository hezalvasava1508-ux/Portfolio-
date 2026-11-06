import { 
  Puzzle, Users, MessageSquare, Zap, Shuffle, Clock, Languages as LangIcon, CheckCircle2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SoftSkillsAndLanguages() {
  const { softSkills, languages } = PORTFOLIO_DATA;

  const getSoftSkillIcon = (title: string) => {
    switch (title) {
      case 'Problem Solving': return <Puzzle className="w-5 h-5 text-purple-400" />;
      case 'Team Collaboration': return <Users className="w-5 h-5 text-blue-400" />;
      case 'Communication': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'Quick Learning': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Adaptability': return <Shuffle className="w-5 h-5 text-pink-400" />;
      case 'Time Management': return <Clock className="w-5 h-5 text-cyan-400" />;
      default: return <Puzzle className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Soft Skills (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-2">
                Workplace Competencies
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Soft Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-3">
                      {getSoftSkillIcon(skill.title)}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {skill.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Languages (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
                Linguistic Fluency
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Languages
              </h2>
            </div>

            <div className="space-y-3.5">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <LangIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{lang.name}</h3>
                      <p className="text-xs text-slate-400">{lang.level}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700">
                    {lang.tag}
                  </span>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                Comfortable communicating technical design concepts, collaborating in multi-lingual engineering teams, and writing structured technical documentation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
