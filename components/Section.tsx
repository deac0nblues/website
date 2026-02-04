import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-16 relative overflow-hidden ${className}`}>
      {/* Animated blob background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 blur-3xl animate-morph"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #6366f1 50%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, transparent 70%)',
            animation: 'morph 15s ease-in-out infinite reverse',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
