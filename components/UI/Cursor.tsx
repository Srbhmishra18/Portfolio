import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Cursor: React.FC = () => {
  const { theme } = useTheme();
  
  // States for UI feedback
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Refs for positions and elements to avoid re-renders
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 }); // Current smooth position for outline

  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Event Listeners
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const { x, y } = mousePosition.current;

      // 1. Update Main Dot (Instant)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        dotRef.current.style.opacity = isVisible ? '1' : '0';
        dotRef.current.style.width = isHovering ? '32px' : '8px';
        dotRef.current.style.height = isHovering ? '32px' : '8px';
      }

      // 2. Update Outline (Smooth lerp)
      const outlineX = cursorPosition.current.x + (x - cursorPosition.current.x) * 0.15;
      const outlineY = cursorPosition.current.y + (y - cursorPosition.current.y) * 0.15;
      cursorPosition.current = { x: outlineX, y: outlineY };

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
        outlineRef.current.style.opacity = isVisible ? '1' : '0';
      }

      // 3. Update Background Gradient Position
      if (bgRef.current) {
        bgRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${
            theme === 'dark' ? 'rgba(29, 78, 216, 0.15)' : 'rgba(59, 130, 246, 0.1)'
        }, transparent 80%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, isHovering, theme]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Background Spotlight */}
      <div 
        ref={bgRef}
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      
      {/* Main Cursor Dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[100] transition-[width,height] duration-200 ease-out mix-blend-difference bg-white rounded-full"
        style={{ left: 0, top: 0, width: '8px', height: '8px', opacity: 0 }}
      />
      
      {/* Outer Ring */}
      <div
        ref={outlineRef}
        className={`cursor-outline fixed pointer-events-none z-[99] border transition-colors duration-300 rounded-full ${
          isHovering ? 'border-primary' : 'border-primary/50'
        }`}
        style={{ left: 0, top: 0, width: '40px', height: '40px', opacity: 0 }}
      />
    </>
  );
};

export default Cursor;
