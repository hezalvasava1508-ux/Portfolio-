import { useState } from 'react';
import { X, Smartphone, Lightbulb, Filter, Layers, Code, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Idea {
  title: string;
  domain: 'Android' | 'Web' | 'AI & ML' | 'Core Java';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  architecture: string[];
  learningSteps: string[];
}

const IDEAS_DATABASE: Idea[] = [
  {
    title: 'Offline-First Expense & Budget Tracker',
    domain: 'Android',
    difficulty: 'Intermediate',
    summary: 'A clean native Android budgeting app with Room SQLite database, visual charts, and monthly category insights.',
    architecture: ['Android Studio', 'Java', 'Room DB', 'MPAndroidChart', 'ConstraintLayout'],
    learningSteps: [
      'Design XML layout with bottom navigation and summary dashboard',
      'Model Room Entities for transactions, categories, and accounts',
      'Implement DAO and ViewModel for asynchronous background queries',
      'Render monthly spending distribution pie charts'
    ]
  },
  {
    title: 'Student Attendance & Faculty Portal',
    domain: 'Android',
    difficulty: 'Beginner',
    summary: 'Mobile attendance logging system with QR code scanning for university lecture halls.',
    architecture: ['Java', 'ZXing QR Library', 'Shared Preferences', 'XML Material Design'],
    learningSteps: [
      'Build login & role selector activity (Faculty vs Student)',
      'Integrate barcode/QR scanner camera component',
      'Store attendance records and generate weekly CSV export'
    ]
  },
  {
    title: 'Enterprise Inventory Management System',
    domain: 'Core Java',
    difficulty: 'Intermediate',
    summary: 'Desktop inventory system tracking stock levels, low-supply alerts, and supplier invoicing.',
    architecture: ['Core Java', 'Swing / JavaFX', 'JDBC', 'MySQL'],
    learningSteps: [
      'Implement OOP hierarchy for inventory items and supplier accounts',
      'Build robust JDBC PreparedStatement queries with ACID transaction safety',
      'Generate low-stock visual warning prompts and tabular reports'
    ]
  },
  {
    title: 'Intelligent Career Path Recommender',
    domain: 'Web',
    difficulty: 'Intermediate',
    summary: 'Web portal analyzing user technical skill proficiencies to suggest tailored developer roadmaps.',
    architecture: ['Java Servlets', 'JSP Views', 'MySQL', 'JDBC', 'HTML/CSS/JS'],
    learningSteps: [
      'Architect MVC pipeline with Servlet controllers dispatching to JSP',
      'Implement percentage-based skill scoring algorithm in Java service layer',
      'Store career taxonomy and skill hierarchies in normalized MySQL tables'
    ]
  },
  {
    title: 'Multimodal Document QA & Summarizer',
    domain: 'AI & ML',
    difficulty: 'Advanced',
    summary: 'AI assistant querying academic PDFs and syllabus documents using Gemini API & Multimodal RAG.',
    architecture: ['Gemini API', 'Vertex AI', 'Streamlit', 'Python / Java backend', 'Vector Store'],
    learningSteps: [
      'Parse PDF documents and generate semantic vector embeddings',
      'Implement hybrid similarity retrieval against user questions',
      'Generate grounded, citation-backed answers with Gemini 2.5 Flash'
    ]
  },
  {
    title: 'Real-Time Weather & Air Quality Dashboard',
    domain: 'Web',
    difficulty: 'Beginner',
    summary: 'Responsive weather application fetching live forecasts, AQI levels, and interactive radar.',
    architecture: ['HTML5', 'CSS3 Flex/Grid', 'Vanilla JavaScript', 'OpenWeather API'],
    learningSteps: [
      'Build glassmorphism UI with geolocation detection',
      'Fetch and parse asynchronous REST JSON endpoints',
      'Render dynamic weather condition icons and hourly temperatures'
    ]
  }
];

export default function IdeaGeneratorModal({ isOpen, onClose }: Props) {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [activeIdeaIndex, setActiveIdeaIndex] = useState<number>(0);

  if (!isOpen) return null;

  const domains = ['All', 'Android', 'Web', 'Core Java', 'AI & ML'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredIdeas = IDEAS_DATABASE.filter(idea => {
    const matchesDomain = selectedDomain === 'All' || idea.domain === selectedDomain;
    const matchesDifficulty = selectedDifficulty === 'All' || idea.difficulty === selectedDifficulty;
    return matchesDomain && matchesDifficulty;
  });

  const activeIdea = filteredIdeas[activeIdeaIndex] || filteredIdeas[0] || IDEAS_DATABASE[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0b0f19] border border-slate-800 text-slate-100 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b13]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Project Idea Generator Application</h3>
              <p className="text-xs text-slate-400">Android Studio, Java & XML mobile app simulator</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Filters Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Filter className="w-3 h-3 text-emerald-400" /> Technology Domain
              </label>
              <div className="flex flex-wrap gap-1.5">
                {domains.map(dom => (
                  <button
                    key={dom}
                    onClick={() => { setSelectedDomain(dom); setActiveIdeaIndex(0); }}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                      selectedDomain === dom
                        ? 'bg-emerald-600 text-white font-medium'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {dom}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-emerald-400" /> Difficulty Level
              </label>
              <div className="flex flex-wrap gap-1.5">
                {difficulties.map(diff => (
                  <button
                    key={diff}
                    onClick={() => { setSelectedDifficulty(diff); setActiveIdeaIndex(0); }}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                      selectedDifficulty === diff
                        ? 'bg-emerald-600 text-white font-medium'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ideas List and Active Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* List */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Generated Ideas ({filteredIdeas.length})
              </span>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {filteredIdeas.map((idea, idx) => {
                  const isActive = idx === activeIdeaIndex;
                  return (
                    <button
                      key={idea.title}
                      onClick={() => setActiveIdeaIndex(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        isActive
                          ? 'bg-emerald-950/30 border-emerald-500/50 shadow-md'
                          : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-white truncate">{idea.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-emerald-300 font-mono shrink-0">
                          {idea.difficulty}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2">
                        <span>{idea.domain}</span>
                        <span aria-hidden="true">·</span>
                        <span>{idea.architecture.slice(0, 2).join(', ')}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Idea Card */}
            <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-1">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{activeIdea.domain}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400 font-normal">{activeIdea.difficulty} Tier</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{activeIdea.title}</h4>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activeIdea.summary}
              </p>

              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1">
                  <Code className="w-3 h-3 text-emerald-400" /> Recommended Technology Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeIdea.architecture.map(tech => (
                    <span key={tech} className="px-2 py-0.5 text-xs rounded bg-slate-800 text-slate-200 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Structured Implementation Milestones:
                </span>
                <div className="space-y-1.5">
                  {activeIdea.learningSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-[#070b13] text-xs text-slate-400">
          <span>Engineered with Android Studio, Java & XML ConstraintLayout patterns</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
}
