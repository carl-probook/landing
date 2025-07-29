'use client';

import { useState, useEffect } from 'react';
import { colors } from '../lib/colors';

export default function AnimatedBlurCircle() {
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
    }, 3500);

    return () => {
      clearTimeout(firstTimeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 0.5, marginLeft: '100px' }} // Between dot grid (0) and spline (1)
    >
      <svg width="1200" height="900">
        <defs>
          <filter id="blur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
        </defs>
        <circle
          cx="600"
          cy="450"
          r="300"
          fill={useRed ? colors.red : colors.blue}
          filter="url(#blur)"
          opacity="0.4"
          style={{
            transition: 'fill 2s ease-in-out'
          }}
        />
      </svg>
    </div>
  );
}
