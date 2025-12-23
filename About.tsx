import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../UI/ScrollReveal';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  // Image handling logic
  // 1. Try profile.png locally
  // 2. Try profile.jpg locally
  // 3. Use User's Google Drive Image
  // 4. Fallback to generic image
  const [imgSrc, setImgSrc] = useState('profile.png');
  const [retryCount, setRetryCount] = useState(0);
  
  // Converted Google Drive View Link to Direct Image Link
  // ID extracted from: 1lguJ8KGn1xPtMtw7wnm0RmGYBIQbkGLy
  const googleDriveImage = 'https://drive.google.com/uc?export=view&id=1lguJ8KGn1xPtMtw7wnm0RmGYBIQbkGLy';
  
  // Generic professional fallback (Man in suit)
  const genericFallback = 'https://i.ibb.co/0pvt9Qrn/profile.png';

  const handleImageError = () => {
    if (retryCount === 0) {
      setImgSrc('profile.jpg');
      setRetryCount(1);
    } else if (retryCount === 1) {
      setImgSrc(googleDriveImage);
      setRetryCount(2);
    } else {
      setImgSrc(genericFallback);
    }
  };

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image/Decoration */}
          <div className="w-full md:w-1/2 relative group">
            <ScrollReveal>
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src={imgSrc} 
                onError={handleImageError}
                alt="Saurabh Mishra" 
                className="relative rounded-2xl w-full h-[500px] object-cover object-top shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
              />
            </ScrollReveal>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <ScrollReveal delay="0.2s">
              <h2 className="text-4xl font-bold font-display mb-8 relative inline-block">
                {t.about.title}
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-secondary rounded-full"></span>
              </h2>
              <div className="prose dark:prose-invert text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                <div dangerouslySetInnerHTML={{ __html: t.about.content }} />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <div className="text-3xl font-bold text-primary mb-1">4+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{t.about.stats.experience}</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <div className="text-3xl font-bold text-secondary mb-1">125+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{t.about.stats.clients}</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <div className="text-3xl font-bold text-purple-500 mb-1">20+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{t.about.stats.projects}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;