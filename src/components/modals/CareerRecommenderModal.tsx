import { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_SKILLS = [
  'Java', 'OOP', 'Data Structures', 'MySQL', 'JDBC',
  'JSP & Servlets', 'HTML5 & CSS3', 'JavaScript',
  'Android Studio', 'XML Layouts', 'PHP', 'Git & VS Code'
];

interface RoleProfile {
  title: string;
  requiredSkills: string[];
  description: string;
  roadmap: string[];
}

const ROLES: RoleProfile[] = [
  {
    title: 'Java Backend Developer',
    requiredSkills: ['Java', 'OOP', 'Data Structures', 'MySQL', 'JDBC', 'JSP & Servlets'],
    description: 'Build enterprise-grade server-side business logic, APIs, and robust database layers.',
    roadmap: [
      'Master Java Core & Collections Framework',
      'Implement Advanced OOP & Design Patterns',
      'Build CRUD Web Apps with Servlets & JSP',
      'Optimize Database Queries & Transactions with JDBC',
      'Explore Spring Boot & REST APIs'
    ]
  },
  {
    title: 'Full-Stack Web Developer',
    requiredSkills: ['HTML5 & CSS3', 'JavaScript', 'Java', 'JSP & Servlets', 'MySQL'],
    description: 'Design interactive frontend interfaces integrated with scalable backend architectures.',
    roadmap: [
      'Master Semantic HTML5, CSS3 Grid & Responsive Design',
      'Deepen Modern JavaScript ES6+ & Asynchronous DOM logic',
      'Connect Java Servlet Controllers with Dynamic JSP Views',
      'Normalize MySQL database and build secure transaction pipelines',
      'Deploy on Apache Tomcat Server'
    ]
  },
  {
    title: 'Android Mobile Developer',
    requiredSkills: ['Java', 'OOP', 'Android Studio', 'XML Layouts', 'Data Structures'],
    description: 'Architect responsive, feature-rich native Android applications with clean UI.',
    roadmap: [
      'Understand Android Activity & Fragment Lifecycles',
      'Create Dynamic XML UI with ConstraintLayout & Material Design',
      'Implement Local Storage with SQLite / Room Database',
      'Connect App to REST Web Services',
      'Optimize Memory & Background Tasks'
    ]
  },
  {
    title: 'Database & Backend Specialist',
    requiredSkills: ['MySQL', 'JDBC', 'Data Structures', 'Java', 'OOP'],
    description: 'Architect relational data models, ensure high query performance, and secure data integrity.',
    roadmap: [
      'Master Relational Algebra & Advanced SQL Joins',
      'Implement Database Normalization (1NF to BCNF)',
      'Engineer Efficient Indexing & Query Tuning',
      'Build Fault-Tolerant JDBC Connection Pools in Java',
      'Design Disaster Recovery & Backup Strategies'
    ]
  }
];

export default function CareerRecommenderModal({ isOpen, onClose }: Props) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    'Java', 'OOP', 'HTML5 & CSS3', 'MySQL', 'JSP & Servlets'
  ]);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  if (!isOpen) return null;

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const calculatedRoles = ROLES.map(role => {
    const matched = role.requiredSkills.filter(s => selectedSkills.includes(s));
    const missing = role.requiredSkills.filter(s => !selectedSkills.includes(s));
    const matchPercentage = Math.round((matched.length / role.requiredSkills.length) * 100);
    return {
      ...role,
      matched,
      missing,
      matchPercentage
    };
  }).sort((a, b) => b.matchPercentage - a.matchPercentage);

  const activeRole = calculatedRoles[selectedRoleIndex] || calculatedRoles[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0b0f19] border border-slate-800 text-slate-100 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b13]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Career Recommendation & Learning Roadmap</h3>
              <p className="text-xs text-slate-400">Interactive algorithm simulator (Java, JSP & Servlet project logic)</p>
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
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Skill Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                1. Select Candidate Skills:
              </label>
              <button 
                onClick={() => setSelectedSkills(['Java', 'OOP', 'Data Structures', 'MySQL', 'JDBC', 'JSP & Servlets', 'HTML5 & CSS3', 'JavaScript'])}
                className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Reset to Hezal's Core Stack
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_SKILLS.map(skill => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      isSelected
                        ? 'bg-purple-600/20 text-purple-200 border border-purple-500/40 shadow-sm'
                        : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {skill} {isSelected ? '✓' : '+'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results: Role Matches */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
              2. Skill Match & Role Fit Analysis:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {calculatedRoles.map((role, idx) => {
                const isSelected = idx === selectedRoleIndex;
                return (
                  <button
                    key={role.title}
                    onClick={() => setSelectedRoleIndex(idx)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-purple-950/30 border-purple-500/60 shadow-lg'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-300 truncate">{role.title}</span>
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-purple-300">
                        {role.matchPercentage}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                        style={{ width: `${role.matchPercentage}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {role.matched.length} of {role.requiredSkills.length} required skills
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Roadmap for Selected Role */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs text-purple-400 font-mono">SELECTED CAREER PROFILE</span>
                <h4 className="text-lg font-semibold text-white">{activeRole.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{activeRole.description}</p>
              </div>
              <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                Match Score: {activeRole.matchPercentage}%
              </div>
            </div>

            {/* Matched vs Missing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4" /> Matched Skills ({activeRole.matched.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeRole.matched.length > 0 ? (
                    activeRole.matched.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">None yet</span>
                  )}
                </div>
              </div>

              <div>
                <span className="text-amber-400 font-medium flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-4 h-4" /> Skills to Acquire ({activeRole.missing.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeRole.missing.length > 0 ? (
                    activeRole.missing.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-emerald-400">All required skills fulfilled!</span>
                  )}
                </div>
              </div>
            </div>

            {/* Step-by-Step Learning Roadmap */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Structured Learning Roadmap:
              </span>
              <div className="space-y-2">
                {activeRole.roadmap.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-2.5 rounded-lg bg-[#070b13] border border-slate-800 text-xs">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                      {index + 1}
                    </span>
                    <span className="text-slate-200 mt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-[#070b13] text-xs text-slate-400">
          <span>Implemented with Java, JSP, Servlets & MySQL backend schema</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
}
