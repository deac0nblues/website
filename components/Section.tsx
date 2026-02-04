import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "accent";
  id?: string;
}

export default function Section({ children, className = "", variant = "default", id }: SectionProps) {
  // All sections use minimal premium aesthetic
  return (
    <section id={id} className={`py-32 md:py-48 px-6 md:px-20 relative bg-[#fafafa] ${className}`}>
      <div className="max-w-[700px] mx-auto relative z-10">{children}</div>
    </section>
  );
}
