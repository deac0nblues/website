import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-16 relative bg-[#0a0a0a] overflow-hidden ${className}`}>
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture" />
      
      {/* Binary pattern */}
      <div className="absolute inset-0 binary-pattern">
        {Array(50).fill(0).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array(200).fill(0).map((_, j) => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
