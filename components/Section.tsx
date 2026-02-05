import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "accent";
  id?: string;
}

export default function Section({ children, className = "", variant = "default", id }: SectionProps) {
  // All sections use dark navy background
  return (
    <section id={id} className={`py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-12 lg:px-16 relative bg-[#0a0e27] text-white ${className}`}>
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,255,150,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
