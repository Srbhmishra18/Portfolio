import React from 'react';
import { EDUCATION } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="text-4xl font-bold font-display mb-4">{t.education.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                {t.education.subtitle}
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-700 text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1">
                   <Calendar size={12} /> {edu.period}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <div className="mb-4">
                  <div className="text-primary font-medium">{edu.school}</div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <MapPin size={14} />
                      {edu.location}
                  </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {edu.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;