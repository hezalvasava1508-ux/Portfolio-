import { Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Certifications() {
  const { certification } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-2">
            Credentials & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Certifications
          </h2>
        </div>

        {/* Certificate Feature Card */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#0c101c] to-purple-950/20 border border-slate-800/90 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
                    {certification.issuer}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                    {certification.title}
                  </h3>
                </div>
              </div>

              {/* Zero-Pill Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>Completed {certification.date}</span>
                <span aria-hidden="true">·</span>
                <span>Awarded to Hezal Vasava</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {certification.description}
              </p>

              {/* Curriculum Topics */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Core Generative AI Competencies Covered:
                </span>
                <div className="flex flex-wrap gap-2">
                  {certification.topics.map(topic => (
                    <div 
                      key={topic}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-purple-500/20 text-xs font-medium text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Direct Clean Certificate Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 p-2.5 shadow-2xl">
                <div className="rounded-lg overflow-hidden bg-white shadow-sm">
                  <img
                    src={certification.imagePath}
                    alt="Certificate Photo - Gen AI Academy"
                    className="w-full h-auto object-cover select-none"
                    loading="lazy"
                  />
                </div>

                <div className="px-3 pt-2.5 pb-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-slate-300">Completion Certificate</span>
                  <span className="text-purple-400 font-mono text-[10px]">Google Cloud × Hack2skill</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
