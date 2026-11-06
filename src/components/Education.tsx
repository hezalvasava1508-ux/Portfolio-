import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-[#070a12]/60 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {education.map((item, index) => (
            <div key={item.degree} className="relative group">
              {/* Timeline Node Bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0b0f19] border-2 border-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-purple-500/20">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
                      {item.focus}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {item.period}
                    </span>
                    {item.score && (
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                        {item.score}
                      </span>
                    )}
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="py-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-medium text-white">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    <span>{item.institution}</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 mt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400/80 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
