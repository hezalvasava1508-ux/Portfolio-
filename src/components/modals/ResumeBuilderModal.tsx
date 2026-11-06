import { useState } from 'react';
import { X, FileText, Check, Layout, Printer } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeBuilderModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState('Hezal Vasava');
  const [role, setRole] = useState('Frontend & Java Developer');
  const [email, setEmail] = useState('hezalvasava1508.email@gmail.com');
  const [phone, setPhone] = useState('+91-7069138555');
  const [location, setLocation] = useState('Gujarat, India');
  const [summary, setSummary] = useState(
    'MCA student specializing in AI with strong foundations in Java, OOP, Data Structures, and responsive web technologies.'
  );
  const [skills, setSkills] = useState('Java, HTML5, CSS3, JavaScript, JSP, Servlets, MySQL, JDBC, Android Studio');
  const [template, setTemplate] = useState<'modern' | 'minimal'>('modern');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0b0f19] border border-slate-800 text-slate-100 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b13]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Online Resume Builder</h3>
              <p className="text-xs text-slate-400">Interactive live web preview (HTML5, CSS3, JavaScript project simulator)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              <button 
                onClick={() => setTemplate('modern')}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                  template === 'modern' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Modern
              </button>
              <button 
                onClick={() => setTemplate('minimal')}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                  template === 'minimal' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Minimal
              </button>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content - 2 Column Split (Controls vs Live Preview) */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Form */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Layout className="w-3.5 h-3.5 text-blue-400" /> Dynamic Editor Inputs
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Target Professional Role</label>
                <input 
                  type="text" 
                  value={role} 
                  onChange={e => setRole(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Phone</label>
                  <input 
                    type="text" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Location</label>
                <input 
                  type="text" 
                  value={location} 
                  onChange={e => setLocation(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Professional Summary</label>
                <textarea 
                  rows={3}
                  value={summary} 
                  onChange={e => setSummary(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white resize-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Skills (comma separated)</label>
                <input 
                  type="text" 
                  value={skills} 
                  onChange={e => setSkills(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>
            </div>
          </div>

          {/* Live Preview Paper */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 flex items-center justify-between">
              <span>Real-Time Dynamic Resume Preview:</span>
              <span className="text-[11px] font-normal text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Synchronized
              </span>
            </div>

            <div className={`w-full p-6 rounded-xl border transition-all ${
              template === 'modern'
                ? 'bg-slate-950 text-slate-100 border-blue-500/30 shadow-2xl'
                : 'bg-white text-slate-900 border-slate-200 shadow-xl'
            }`}>
              {/* Resume Header */}
              <div className={`pb-4 border-b ${template === 'modern' ? 'border-slate-800' : 'border-slate-200'}`}>
                <h2 className="text-xl font-bold tracking-tight">{name || 'Your Name'}</h2>
                <p className={`text-xs font-semibold ${template === 'modern' ? 'text-blue-400' : 'text-blue-600'} mt-0.5`}>
                  {role || 'Job Title'}
                </p>
                <div className={`flex flex-wrap items-center gap-2 text-[11px] mt-2 ${template === 'modern' ? 'text-slate-400' : 'text-slate-600'}`}>
                  <span>{email}</span>
                  <span aria-hidden="true">·</span>
                  <span>{phone}</span>
                  <span aria-hidden="true">·</span>
                  <span>{location}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-4">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${template === 'modern' ? 'text-slate-300' : 'text-slate-800'}`}>
                  Summary
                </h4>
                <p className={`text-xs leading-relaxed ${template === 'modern' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {summary}
                </p>
              </div>

              {/* Education Preview */}
              <div className="mt-4">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${template === 'modern' ? 'text-slate-300' : 'text-slate-800'}`}>
                  Education
                </h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between font-medium">
                      <span>MCA – Artificial Intelligence</span>
                      <span className={template === 'modern' ? 'text-slate-400' : 'text-slate-600'}>2025 – Present</span>
                    </div>
                    <div className={`text-[11px] ${template === 'modern' ? 'text-slate-400' : 'text-slate-600'}`}>
                      Parul University, Vadodara
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-medium">
                      <span>BCA – Bachelor of Computer Applications</span>
                      <span className={template === 'modern' ? 'text-slate-400' : 'text-slate-600'}>2022 – 2025</span>
                    </div>
                    <div className={`text-[11px] ${template === 'modern' ? 'text-slate-400' : 'text-slate-600'}`}>
                      Uka Tarsadia University (CGPA: 7.24 / 10)
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="mt-4">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${template === 'modern' ? 'text-slate-300' : 'text-slate-800'}`}>
                  Key Technical Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.split(',').map((s, idx) => (
                    <span 
                      key={idx}
                      className={`text-[11px] px-2 py-0.5 rounded ${
                        template === 'modern'
                          ? 'bg-slate-900 text-slate-300 border border-slate-800'
                          : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-[#070b13] text-xs text-slate-400">
          <span>Dynamic DOM Manipulation & Live State Synchronization</span>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Printer className="w-3.5 h-3.5" /> Print Preview
          </button>
        </div>
      </div>
    </div>
  );
}
