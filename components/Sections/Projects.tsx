import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../UI/ScrollReveal';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold font-display mb-4 flex items-center gap-3">
                {t.projects.title}
                <span className="hidden md:inline-block h-px w-20 bg-primary/30"></span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
                {t.projects.subtitle}
              </p>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-primary font-medium px-4 py-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all">
               View Github Profile <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={`${index * 0.1}s`}>
              <div 
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700/50"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container with Zoom Effect */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex gap-3 translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-300">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/90 text-slate-900 hover:bg-white hover:scale-110 transition-all shadow-lg" title={t.projects.viewCode}>
                          <Github size={20} />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary text-white hover:bg-blue-600 hover:scale-110 transition-all shadow-lg" title={t.projects.liveDemo}>
                          <ExternalLink size={20} />
                      </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Decorative Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 dark:bg-slate-700/50 text-gray-600 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-primary" size={24} />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
