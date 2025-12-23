import React from 'react';
import { EXPERIENCE } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../UI/ScrollReveal';
import { MapPin, FileText } from 'lucide-react';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-24 relative bg-white dark:bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-20">
             <h2 className="text-3xl font-bold font-display flex items-center gap-2">
               <span className="text-primary font-mono text-2xl">02.</span> 
               {t.experience.title}
             </h2>
             <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow max-w-[200px]"></div>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
            {EXPERIENCE.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={`${index * 0.1}s`}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-0 group">
                      
                      {/* Left Side: Company Name & Period */}
                      <div className="md:w-72 shrink-0 md:text-right relative">
                          <div className="md:border-r-2 md:border-gray-200 md:dark:border-gray-700 md:pr-10 h-full pb-8 md:pb-0 group-hover:border-primary/30 transition-colors">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{exp.company}</h3>
                              <div className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-1 mb-2">{exp.period}</div>
                              
                              {/* Dot on line for desktop */}
                              <div className="hidden md:block absolute top-1.5 -right-[9px] w-4 h-4 rounded-full border-[3px] border-white dark:border-dark bg-gray-300 dark:bg-gray-600 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 z-10"></div>
                          </div>
                      </div>

                      {/* Right Side: Role & Description */}
                      <div className="flex-1 md:pl-10 pt-1">
                          <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{exp.role}</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-mono mb-6">
                              <MapPin size={14} /> {exp.location}
                          </div>

                          <ul className="space-y-3 mb-6">
                              {exp.description[language].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed group/item hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                                      <span className="mt-2.5 min-w-[6px] w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/item:bg-primary group-hover/item:scale-150 transition-all"></span>
                                      <span>{item}</span>
                                  </li>
                              ))}
                          </ul>

                          {exp.recommendationLink && (
                            <a 
                              href={exp.recommendationLink} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-primary hover:bg-primary/10 transition-colors font-medium text-sm border border-transparent hover:border-primary/20"
                            >
                              <FileText size={16} />
                              <span>Recommendation Letter</span>
                            </a>
                          )}
                      </div>
                  </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;