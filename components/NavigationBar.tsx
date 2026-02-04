"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", name: "Init" },
  { id: "services", name: "Services" },
  { id: "process", name: "How We Work" },
  { id: "thinking", name: "Thinking" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
];

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const lastChangeTime = useRef(0);
  const pendingSection = useRef<string | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const MIN_CHANGE_INTERVAL = 150; // milliseconds - minimum time between section changes

  // All sections now have dark navy background, so we always use terminal green accents

  useEffect(() => {
    let ticking = false;
    let lastActiveSection = "hero";
    const HYSTERESIS_BUFFER = 200; // pixels - buffer zone to prevent rapid switching

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const viewportCenter = scrollY + windowHeight / 2;
          
          // Check if we're near the bottom of the page (within 200px)
          if (scrollY + windowHeight >= documentHeight - 200) {
            const lastSection = sections[sections.length - 1];
            if (lastActiveSection !== lastSection.id) {
              lastActiveSection = lastSection.id;
              updateSectionSafely(lastSection.id);
            }
            ticking = false;
            return;
          }

          // First, check if we're still clearly in the current section (with hysteresis)
          const currentSectionEl = document.getElementById(lastActiveSection);
          let bestSection = lastActiveSection;
          
          if (currentSectionEl) {
            const rect = currentSectionEl.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            const sectionBottom = sectionTop + rect.height;
            
            // Expanded boundaries for current section (hysteresis)
            const expandedTop = sectionTop - HYSTERESIS_BUFFER;
            const expandedBottom = sectionBottom + HYSTERESIS_BUFFER;
            
            // If viewport center is still within expanded boundaries, stay with current section
            if (viewportCenter >= expandedTop && viewportCenter <= expandedBottom) {
              bestSection = lastActiveSection;
            } else {
              // We've scrolled past the current section, find the new one
              // Check sections from bottom to top to find the one we're entering
              for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section) {
                  const rect = section.getBoundingClientRect();
                  const sectionTop = rect.top + scrollY;
                  const sectionBottom = sectionTop + rect.height;
                  
                  // Check if viewport center is within this section (with a buffer)
                  if (viewportCenter >= sectionTop - 100 && viewportCenter <= sectionBottom + 100) {
                    bestSection = sections[i].id;
                    break;
                  }
                }
              }
            }
          }

          // Only update if the section actually changed
          if (lastActiveSection !== bestSection) {
            lastActiveSection = bestSection;
            updateSectionSafely(bestSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Debounced section update function
    const updateSectionSafely = (newSection: string) => {
      const now = Date.now();
      const timeSinceLastChange = now - lastChangeTime.current;

      // Clear any pending timeout
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
        debounceTimeout.current = null;
      }

      // If enough time has passed, update immediately
      if (timeSinceLastChange >= MIN_CHANGE_INTERVAL) {
        lastChangeTime.current = now;
        pendingSection.current = null;
        setActiveSection(newSection);
      } else {
        // Store the pending section and schedule update
        pendingSection.current = newSection;
        const remainingTime = MIN_CHANGE_INTERVAL - timeSinceLastChange;
        debounceTimeout.current = setTimeout(() => {
          if (pendingSection.current) {
            lastChangeTime.current = Date.now();
            setActiveSection(pendingSection.current);
            pendingSection.current = null;
          }
          debounceTimeout.current = null;
        }, remainingTime);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
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
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#00ff96]/20 transition-colors duration-200"></div>
        
        {/* Active indicator - moved to left */}
        <motion.div
          className="absolute left-0 w-1 bg-[#00ff96] transition-colors duration-200"
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
            // All sections use dark navy, so use terminal green for active, white/gray for inactive
            const textColor = isActive 
              ? "text-[#00ff96]" 
              : isHovered 
              ? "text-white/60" 
              : "text-white/30";
            const borderColor = isActive 
              ? "border-[#00ff96]" 
              : "border-[#00ff96]/30";
            const bgColor = isActive 
              ? "bg-[#00ff96]" 
              : "bg-transparent";
            
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
                  className={`w-2 h-2 rounded-full border transition-all transition-colors duration-200 ${borderColor} ${bgColor}`}
                  animate={{
                    scale: isActive ? 1.5 : 1,
                  }}
                  transition={{
                    scale: { duration: 0.2 },
                  }}
                />

                {/* Label */}
                <motion.div
                  className={`font-mono text-[11px] tracking-widest whitespace-nowrap transition-all transition-colors duration-200 ${textColor}`}
                  animate={{
                    opacity: isActive || isHovered ? 1 : 0,
                    x: isActive || isHovered ? 0 : 10,
                  }}
                  transition={{
                    opacity: { duration: 0.2 },
                    x: { duration: 0.2 },
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
