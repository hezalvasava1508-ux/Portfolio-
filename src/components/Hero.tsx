import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.roles.length]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability / Welcome Lead */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">MCA Artificial Intelligence · Seeking Entry-Level SDE Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400">{personal.name}</span>
              </h1>

              {/* Animated Developer Role Slider */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-300 flex items-center gap-2.5">
                  <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 shrink-0" />
                  <span className="relative inline-block text-purple-300 font-mono font-bold transition-all duration-500">
                    {personal.roles[roleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Sub-tagline */}
            <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
              "{personal.tagline}"
            </p>

            {/* Short Bio summary */}
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Passionate developer with a strong foundation in Java programming, Object-Oriented Design, Data Structures, and responsive modern web technologies. Specialized in AI applications at Parul University.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clear Profile Photo */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Soft Ambient Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-violet-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />
              
              {/* Outer Elegant Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 bg-gradient-to-tr from-purple-500/40 via-slate-900 to-blue-500/40 border border-white/10 shadow-2xl backdrop-blur-md flex items-center justify-center">
                {/* Clear Portrait Container */}
                <div className="w-full h-full rounded-full bg-[#090d16] border-2 border-purple-500/30 overflow-hidden relative shadow-2xl">
                  <img
                    src={personal.avatar || "/assets/aistudio/Professional_Studio_Portrait_031e1ee7.png"}
                    alt="Hezal Vasava - Professional Studio Portrait"
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Highlights Strip below Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">MCA (AI)</div>
            <div className="text-xs text-purple-400 font-medium mt-0.5">Parul University</div>
            <div className="text-[11px] text-slate-400 mt-1">2025 – Present Specialization</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">7.24 / 10</div>
            <div className="text-xs text-blue-400 font-medium mt-0.5">BCA CGPA</div>
            <div className="text-[11px] text-slate-400 mt-1">Uka Tarsadia University (2025)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">Google Cloud</div>
            <div className="text-xs text-purple-400 font-medium mt-0.5">Gen AI Certified</div>
            <div className="text-[11px] text-slate-400 mt-1">Vertex AI, Gemini, Multimodal RAG</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">3+ Core</div>
            <div className="text-xs text-emerald-400 font-medium mt-0.5">Flagship Projects</div>
            <div className="text-[11px] text-slate-400 mt-1">Full-Stack, Android & Frontend</div>
          </div>
        </div>
      </div>
    </section>
  );
}
