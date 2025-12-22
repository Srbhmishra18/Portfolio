import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Cursor from './components/UI/Cursor';
import Navbar from './components/Layout/Navbar';
import SocialSidebar from './components/Layout/SocialSidebar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Certifications from './components/Sections/Certifications';
import Projects from './components/Sections/Projects';
import Education from './components/Sections/Education';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Cursor />
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;