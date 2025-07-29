'use client';

import { useState } from 'react';
import { colors } from '../lib/colors';
import NorthEastIcon from '@mui/icons-material/NorthEast';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({ children, className = '' }: GradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className={`relative overflow-hidden text-white px-6 py-3 text-lg font-normal cursor-pointer transition-shadow duration-200 hover:shadow-lg ${className}`}
      style={{
        background: `linear-gradient(to right, ${colors.blue}, ${colors.darkBlue})`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 transition-opacity duration-200"
        style={{
          background: colors.darkBlue,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <span className="relative z-10 flex items-start gap-1">
        {children}
        <NorthEastIcon sx={{ fontSize: 14 }} />
      </span>
    </button>
  );
}
