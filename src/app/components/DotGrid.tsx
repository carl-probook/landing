interface DotGridProps {
  className?: string;
}

export default function DotGrid({ className = '' }: DotGridProps) {
  return (
    <div 
      className={`absolute inset-0 opacity-30 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, #e4e4e7 2px, transparent 2px)`,
        backgroundSize: '16px 16px',
        backgroundPosition: '0 0',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
      }}
    />
  );
}
