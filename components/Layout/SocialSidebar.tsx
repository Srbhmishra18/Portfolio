import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed left-8 bottom-0 z-40 hidden md:flex flex-col items-center gap-6 text-slate-500 dark:text-slate-400">
      <a 
        href="https://github.com/srbhmishra18" 
        target="_blank" 
        rel="noreferrer"
        className="hover:text-primary hover:-translate-y-1 transition-all duration-300 p-2 transform hover:scale-110"
        aria-label="GitHub"
      >
        <Github size={22} />
      </a>
      <a 
        href="https://www.linkedin.com/in/1997-saurabh-mishra" 
        target="_blank" 
        rel="noreferrer"
        className="hover:text-primary hover:-translate-y-1 transition-all duration-300 p-2 transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin size={22} />
      </a>
      <a 
        href="mailto:srbhmishra18@gmail.com"
        className="hover:text-primary hover:-translate-y-1 transition-all duration-300 p-2 transform hover:scale-110"
        aria-label="Email"
      >
        <Mail size={22} />
      </a>
      
      {/* Decorative Line */}
      <div className="w-px h-24 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700 dark:to-transparent mt-2"></div>
    </div>
  );
};

export default SocialSidebar;