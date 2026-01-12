"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", name: "Init" },
  { id: "services", name: "Services" },
  { id: "process", name: "AISOS" },
  { id: "boundaries", name: "Boundaries" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
];

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const isOnDarkSection = activeSection === "process";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Check if we're near the bottom of the page (within 200px)
      if (window.scrollY + windowHeight >= documentHeight - 200) {
        // Activate the last section (contact)
        const lastSection = sections[sections.length - 1];
        setActiveSection(lastSection.id);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="relative flex items-center gap-4">
        {/* Progress line - moved to left */}
        <div className={`absolute left-0 top-0 bottom-0 w-px transition-colors ${
          activeSection === "process" ? "bg-white/20" : "bg-black/10"
        }`}></div>
        
        {/* Active indicator - moved to left */}
        <motion.div
          className={`absolute left-0 w-1 transition-colors ${
            activeSection === "process" ? "bg-white" : "bg-black"
          }`}
          style={{
            height: `${100 / sections.length}%`,
            top: `${(sections.findIndex(s => s.id === activeSection) / sections.length) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Section dots and labels */}
        <div className="relative flex flex-col gap-8 py-4 pl-4">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            // When on AISOS section, ALL text should be white. Otherwise, use black.
            const textColor = isOnDarkSection
              ? (isActive ? "text-white" : isHovered ? "text-white/60" : "text-white/30")
              : (isActive ? "text-black" : isHovered ? "text-black/60" : "text-black/30");
            const borderColor = isOnDarkSection
              ? (isActive ? "border-white" : "border-white/30")
              : (isActive ? "border-black" : "border-black/30");
            const bgColor = isOnDarkSection
              ? (isActive ? "bg-white" : "bg-transparent")
              : (isActive ? "bg-black" : "bg-transparent");
            
            // Force black text for boundaries section (light background)
            const finalTextColor = activeSection === "boundaries" 
              ? (isActive ? "text-black" : isHovered ? "text-black/60" : "text-black/30")
              : textColor;
            const finalBorderColor = activeSection === "boundaries"
              ? (isActive ? "border-black" : "border-black/30")
              : borderColor;
            const finalBgColor = activeSection === "boundaries"
              ? (isActive ? "bg-black" : "bg-transparent")
              : bgColor;
            
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="relative flex items-center gap-3 group"
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Dot */}
                <motion.div
                  className={`w-2 h-2 rounded-full border transition-all ${finalBorderColor} ${finalBgColor}`}
                  animate={{
                    scale: isActive ? 1.5 : 1,
                  }}
                />

                {/* Label */}
                <motion.div
                  className={`code-accent text-xs tracking-widest whitespace-nowrap transition-all ${finalTextColor}`}
                  animate={{
                    opacity: isActive || isHovered ? 1 : 0,
                    x: isActive || isHovered ? 0 : 10,
                  }}
                >
                  {section.name.toUpperCase()}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
