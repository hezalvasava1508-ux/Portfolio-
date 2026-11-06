import { useState } from 'react';
import { 
  Code2, Globe, Smartphone, Database, Cpu, Wrench, CheckCircle, Search, Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { skills: categories } = PORTFOLIO_DATA;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming': return <Code2 className="w-4 h-4 text-purple-400" />;
      case 'web': return <Globe className="w-4 h-4 text-blue-400" />;
      case 'mobile': return <Smartphone className="w-4 h-4 text-emerald-400" />;
      case 'database': return <Database className="w-4 h-4 text-cyan-400" />;
      case 'core-cs': return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'tools': return <Wrench className="w-4 h-4 text-amber-400" />;
      default: return <Code2 className="w-4 h-4 text-purple-400" />;
    }
  };

  const allSkills = categories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, categoryName: cat.name, categoryId: cat.id }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.categoryId === activeCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-2">
              Technical Proficiencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Expertise
            </h2>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search skills, tools, or concepts..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Buttons (Functional Buttons / Segmented Controls) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/70 border border-slate-800/80 rounded-xl mb-8 max-w-4xl">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Disciplines ({allSkills.length})
          </button>

          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:border-purple-500/40 transition-colors">
                      {getCategoryIcon(skill.categoryId)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </h3>
                      {/* Zero-Pill unboxed metadata */}
                      <div className="text-[11px] text-slate-400">
                        <span>{skill.categoryName}</span>
                        <span aria-hidden="true" className="mx-1">·</span>
                        <span className="text-purple-400 font-medium">{skill.level}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-300 transition-colors">
                    {skill.percentage}%
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/60">
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/30 border border-slate-800">
            <p className="text-sm text-slate-400">No skills matching "{searchQuery}" in this category.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs text-purple-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
