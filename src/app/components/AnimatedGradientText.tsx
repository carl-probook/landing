'use client';

import { useState, useEffect } from 'react';
import { colors } from '../lib/colors';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  const [useRed, setUseRed] = useState(true); // Start with red

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // First transition after 3.5 seconds
    const firstTimeout = setTimeout(() => {
      setUseRed(false);
      
      // Start regular intervals after the first transition
      interval = setInterval(() => {
        setUseRed(prev => !prev);
      }, 5500);
    }, 1000);

    return () => {
      clearTimeout(firstTimeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className={`relative font-black pb-2 ${className}`}>
      {/* Blue gradient layer */}
      <div 
        className="absolute inset-0 bg-clip-text text-transparent transition-opacity duration-[2000ms] ease w-fit"
        style={{
          backgroundImage: `linear-gradient(to right, ${colors.blue}, ${colors.darkBlue})`,
          opacity: useRed ? 0 : 1
        }}
      >
        {children}
      </div>
      
      {/* Red gradient layer */}
      <div 
        className="relative bg-clip-text text-transparent transition-opacity duration-[2000ms] ease w-fit"
        style={{
          backgroundImage: `linear-gradient(to right, ${colors.blue}, ${colors.red})`,
          opacity: useRed ? 1 : 0
        }}
      >
        {children}
      </div>
    </div>
  );
}
