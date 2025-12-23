import React from 'react';
import { CERTIFICATIONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../UI/ScrollReveal';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-slate-900/20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4 flex items-center justify-center gap-3">
              <Award className="text-primary" size={32} />
              {t.certifications.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              {t.certifications.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {CERTIFICATIONS.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={`${index * 0.1}s`}>
              <div className="group bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center">
                
                {/* Icon Box */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-600 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck size={32} className="text-secondary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="shrink-0 flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-gray-200/50 dark:bg-slate-700/50 text-gray-600 dark:text-gray-300">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                  </div>
                  
                  <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Issued by <span className="text-primary">{cert.issuer}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary dark:hover:text-primary transition-all font-medium text-sm shadow-sm hover:shadow-md active:scale-95 group/btn"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;