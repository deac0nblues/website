import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-16 relative bg-[#f5e6d3] overflow-hidden ${className}`}>
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 halftone-pattern" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
