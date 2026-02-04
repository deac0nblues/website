import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-16 relative bg-[#faf8f5] overflow-hidden ${className}`}>
      {/* Paper texture overlay */}
      <div className="absolute inset-0 paper-texture" />
      
      {/* Soft organic background blurs */}
      <div className="absolute left-1/4 top-20 w-64 h-64 bg-[#6b7f5c] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 bottom-40 w-80 h-80 bg-[#c17a5c] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
