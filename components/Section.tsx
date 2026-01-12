import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "accent";
  id?: string;
}

export default function Section({ children, className = "", variant = "default", id }: SectionProps) {
  const bgClass = variant === "dark" ? "bg-[#000000] text-[#FAFAFA]" : variant === "accent" ? "bg-[#1A1A1A] text-[#FAFAFA]" : "";
  
  return (
    <section id={id} className={`py-24 px-6 relative ${bgClass} ${className}`}>
      {/* Section divider line */}
      {variant === "default" && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
      )}
      <div className="max-w-4xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
