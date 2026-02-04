import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-16 relative bg-[#f5f5f5] ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
