import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-400 overflow-x-hidden">

        {/* Main Content Sections - Full screen per section */}
        <main className="relative z-10 w-full overflow-visible">
          <Hero onContactClick={handleContactClick} />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Achievements />
          <Certifications />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />

        {/* Bottom Floating Navigation Bar */}
        <Navigation onContactClick={handleContactClick} />
      </div>
    </ThemeProvider>
  );
};

export default App;
