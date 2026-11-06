import { GraduationCap, Briefcase, MapPin, Compass, Cpu, Database, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { personal, education } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 bg-[#070a12]/70 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-2">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm relative">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{personal.aboutText}"
              </p>

              {/* Verified Career Objective Highlight */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400">
                    Primary Career Objective
                  </h3>
                  <p className="text-sm font-medium text-slate-200 mt-1">
                    {personal.objective}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Java & OOP</h4>
                <p className="text-xs text-slate-400 mt-1">Solid object-oriented design, Collections, and multi-threaded programming.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2.5">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">DBMS & Web</h4>
                <p className="text-xs text-slate-400 mt-1">Relational SQL schemas, JDBC integration, Servlets, JSP & modern HTML/CSS/JS.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Generative AI</h4>
                <p className="text-xs text-slate-400 mt-1">Google Cloud Gen AI Academy, Gemini APIs, Multimodal RAG & Streamlit apps.</p>
              </div>
            </div>
          </div>

          {/* Quick Profile Cards / Details Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Profile Snapshot */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                <img
                  src={personal.avatar || "/assets/aistudio/Professional_Studio_Portrait_031e1ee7.png"}
                  alt={personal.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/40 shadow-md"
                />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {personal.name}
                  </h3>
                  <p className="text-xs text-purple-400 font-medium">
                    Aspiring Software Engineer & MCA (AI)
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400">Full Name</span>
                  <span className="font-semibold text-white">{personal.name}</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" /> Location
                  </span>
                  <span className="font-medium text-slate-200">{personal.location}</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" /> Target Roles
                  </span>
                  <span className="font-medium text-slate-200 text-right">
                    Frontend · Java · Software
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> Current Degree
                  </span>
                  <span className="font-medium text-slate-200 text-right">
                    MCA (Artificial Intelligence)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Graduation (BCA)</span>
                  <span className="font-mono text-emerald-400 font-semibold">
                    CGPA: 7.24 / 10
                  </span>
                </div>
              </div>
            </div>

            {/* University affiliations badge card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="text-xs font-semibold text-slate-300">Academic Affiliations</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-medium">Parul University, Vadodara</span>
                  <span className="text-purple-400 font-mono text-[11px]">2025 – Present</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Uka Tarsadia University, Bardoli</span>
                  <span className="font-mono text-[11px]">2022 – 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
