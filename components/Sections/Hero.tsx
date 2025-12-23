import React, { useState, useEffect } from 'react';
import { Download, Database, Code2, Cpu, BarChart3, PieChart, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../UI/ScrollReveal';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');

  // Typing effect hook logic
  useEffect(() => {
    const text = t.hero.description;
    setTypedText('');
    let i = 0;
    const speed = 50; 
    
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypedText((prev) => text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [t.hero.description]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="z-10 order-2 lg:order-1">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg shadow-primary/5 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for hire
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay="0.1s">
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 tracking-tight">
              {t.hero.greeting} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient-x">
                {t.hero.role}
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay="0.2s">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mb-6 leading-relaxed font-mono min-h-[3.5rem] md:min-h-[2rem]">
              {typedText}
              <span className="animate-pulse text-primary font-bold">|</span>
            </p>
          </ScrollReveal>

          {/* Quote Section */}
          <ScrollReveal delay="0.25s">
            <blockquote className="relative mb-8 pl-6 border-l-4 border-secondary/50 max-w-lg">
               <p className="text-lg font-medium italic text-gray-700 dark:text-gray-300">
                 "{t.hero.quote}"
               </p>
            </blockquote>
          </ScrollReveal>
          
          <ScrollReveal delay="0.3s">
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/file/d/1uqu-iOdNjl374ty3CA3v6Tj3WGx3iJvD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
              >
                {t.hero.cta}
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </ScrollReveal>

          {/* Mobile Social Shortcuts (Hidden on MD+) */}
          <ScrollReveal delay="0.35s">
            <div className="flex items-center gap-6 mt-10 md:hidden">
              <a href="https://github.com/srbhmishra18" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/1997-saurabh-mishra" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:srbhmishra18@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Playful Visuals with Analytics Dashboard */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center h-[500px] lg:h-[600px] perspective-1000">
             
             {/* Background Rings */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-10">
                <div className="w-[400px] h-[400px] border border-primary rounded-full animate-spin-slow border-dashed"></div>
                <div className="absolute w-[500px] h-[500px] border border-secondary rounded-full animate-spin-reverse-slow border-dashed opacity-50"></div>
                <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full animate-pulse-glow"></div>
             </div>

             {/* Main Dashboard Card */}
             <div className="relative z-10 animate-float w-full max-w-lg">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 dark:border-slate-700/50 bg-white/40 dark:bg-slate-900/70 backdrop-blur-xl group">
                    
                    {/* Header Bar */}
                    <div className="h-10 bg-white/50 dark:bg-slate-800/50 border-b border-white/20 dark:border-slate-700 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="ml-4 h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded-full opacity-50"></div>
                        <div className="ml-auto text-xs font-mono text-gray-500 dark:text-gray-400">Analytics_Console.py</div>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-6 grid grid-cols-12 gap-4">
                        
                        {/* Sidebar */}
                        <div className="col-span-3 space-y-3 hidden sm:block">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-2 w-full bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                            ))}
                            <div className="mt-8 p-2 rounded-lg bg-primary/10 border border-primary/20">
                                <Database size={16} className="text-primary mb-1" />
                                <div className="h-1.5 w-8 bg-primary/40 rounded-full"></div>
                            </div>
                        </div>

                        {/* Charts Area */}
                        <div className="col-span-12 sm:col-span-9 space-y-4">
                            
                            {/* Top Row Stats */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2 mb-2">
                                        <PieChart size={14} className="text-purple-500" />
                                        <span className="text-[10px] uppercase font-bold text-gray-400">Processing</span>
                                    </div>
                                    <div className="text-lg font-bold text-slate-700 dark:text-slate-200">98.5%</div>
                                    <div className="w-full bg-gray-100 dark:bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-purple-500 h-full w-[98%]"></div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BarChart3 size={14} className="text-secondary" />
                                        <span className="text-[10px] uppercase font-bold text-gray-400">Growth</span>
                                    </div>
                                    <div className="text-lg font-bold text-slate-700 dark:text-slate-200">+124%</div>
                                    <div className="w-full bg-gray-100 dark:bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-secondary h-full w-[75%]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Graph */}
                            <div className="relative h-32 w-full bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 overflow-hidden p-4">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-10">
                                    {[...Array(6)].map((_, i) => <div key={i} className="border-r border-gray-500 h-full"></div>)}
                                </div>
                                
                                {/* SVG Line Chart */}
                                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path 
                                        d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,50 180,20 C200,5 220,30 240,10 L240,120 L0,120 Z" 
                                        fill="url(#chartGradient)" 
                                        className="text-primary"
                                    />
                                    <path 
                                        d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,50 180,20 C200,5 220,30 240,10" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        className="text-primary drop-shadow-md"
                                        strokeLinecap="round"
                                    />
                                    {/* Data Points */}
                                    <circle cx="60" cy="60" r="3" className="fill-white stroke-primary stroke-2 animate-pulse" />
                                    <circle cx="120" cy="40" r="3" className="fill-white stroke-primary stroke-2 animate-pulse delay-75" />
                                    <circle cx="180" cy="20" r="3" className="fill-white stroke-primary stroke-2 animate-pulse delay-150" />
                                </svg>

                                {/* Scanning Line */}
                                <div className="absolute top-0 bottom-0 w-[2px] bg-primary/50 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-scan"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Widgets */}
                <div className="absolute -right-8 -top-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float-delayed z-20 max-w-[160px]">
                    <div className="flex items-center gap-2 mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">
                         <Code2 size={16} className="text-secondary" />
                         <span className="text-xs font-bold">ETL Script</span>
                    </div>
                    <div className="space-y-1">
                        <div className="h-1.5 w-full bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="h-1.5 w-[80%] bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="h-1.5 w-[60%] bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                    </div>
                    <div className="mt-2 text-[10px] text-secondary font-mono">Running...</div>
                </div>
                
                <div className="absolute -left-8 -bottom-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float z-20 flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
                            <Cpu size={20} className="text-purple-500" />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Model Status</p>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Optimized</p>
                    </div>
                </div>
             </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
