import React, { useMemo } from 'react';
import { SKILLS } from '../../constants';
import { Skill } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../UI/ScrollReveal';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  // Group skills by category
  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {};
    SKILLS.forEach(skill => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });
    return groups;
  }, []);

  // Helper to render icon dynamically
  const renderIcon = (iconName: string, size = 20) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-slate-900/20 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                {t.skills.title}
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              {t.skills.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(Object.entries(groupedSkills) as [string, Skill[]][]).map(([category, skills], index) => (
            <ScrollReveal key={category} delay={`${index * 0.15}s`}>
              <div className="h-full bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all hover:shadow-lg group">
                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      <span className="text-gray-400 group-hover:text-primary transition-colors">
                        {renderIcon(skill.icon)}
                      </span>
                      <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;