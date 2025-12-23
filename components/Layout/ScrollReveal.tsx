import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: string; // e.g. "0.2s"
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, width = '100%', delay = '0s' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ width, transitionDelay: delay }}
      className={`transition-all duration-1000 cubic-bezier(0.17, 0.55, 0.55, 1) transform ${
        isVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-sm'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;