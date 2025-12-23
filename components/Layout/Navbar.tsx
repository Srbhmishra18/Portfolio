import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light/80 dark:bg-dark/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold font-display tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <span className="text-primary">&lt;</span>
          Saurabh
          <span className="text-primary">/&gt;</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <div 
            className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-full p-1 cursor-pointer border border-gray-200 dark:border-gray-700 h-9"
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            role="button"
            aria-label="Toggle language"
          >
            <span className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-white dark:bg-slate-600 shadow-sm text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}>
              EN
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'de' ? 'bg-white dark:bg-slate-600 shadow-sm text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}>
              DE
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-light dark:bg-dark border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-lg font-medium text-left"
            >
              {link.label}
            </button>
          ))}
          <div className="h-px bg-gray-200 dark:bg-gray-800 w-full my-2"></div>
          
          {/* Mobile Language Toggle */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">Language</span>
            <div 
              className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-full p-1 cursor-pointer border border-gray-200 dark:border-gray-700 h-9"
              onClick={() => {
                setLanguage(language === 'en' ? 'de' : 'en');
              }}
            >
              <span className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-white dark:bg-slate-600 shadow-sm text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
                EN
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'de' ? 'bg-white dark:bg-slate-600 shadow-sm text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
                DE
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;