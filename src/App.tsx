/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import SoftSkillsAndLanguages from './components/SoftSkillsAndLanguages';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <SoftSkillsAndLanguages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
