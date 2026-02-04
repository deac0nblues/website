"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", name: "Overview" },
  { id: "services", name: "Services" },
  { id: "process", name: "How We Work" },
  { id: "thinking", name: "Thinking" },
  { id: "about", name: "About" },
  { id: "leadership", name: "Leadership" },
  { id: "contact", name: "Contact" },
];

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const lastChangeTime = useRef(0);
  const pendingSection = useRef<string | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const MIN_CHANGE_INTERVAL = 150;

  useEffect(() => {
    let ticking = false;
    let lastActiveSection = "hero";
    const HYSTERESIS_BUFFER = 200;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const viewportCenter = scrollY + windowHeight / 2;
          
          if (scrollY + windowHeight >= documentHeight - 200) {
            const lastSection = sections[sections.length - 1];
            if (lastActiveSection !== lastSection.id) {
              lastActiveSection = lastSection.id;
              updateSectionSafely(lastSection.id);
            }
            ticking = false;
            return;
          }

          const currentSectionEl = document.getElementById(lastActiveSection);
          let bestSection = lastActiveSection;
          
          if (currentSectionEl) {
            const rect = currentSectionEl.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            const sectionBottom = sectionTop + rect.height;
            
            const expandedTop = sectionTop - HYSTERESIS_BUFFER;
            const expandedBottom = sectionBottom + HYSTERESIS_BUFFER;
            
            if (viewportCenter >= expandedTop && viewportCenter <= expandedBottom) {
              bestSection = lastActiveSection;
            } else {
              for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section) {
                  const rect = section.getBoundingClientRect();
                  const sectionTop = rect.top + scrollY;
                  const sectionBottom = sectionTop + rect.height;
                  
                  if (viewportCenter >= sectionTop - 100 && viewportCenter <= sectionBottom + 100) {
                    bestSection = sections[i].id;
                    break;
                  }
                }
              }
            }
          }

          if (lastActiveSection !== bestSection) {
            lastActiveSection = bestSection;
            updateSectionSafely(bestSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateSectionSafely = (newSection: string) => {
      const now = Date.now();
      const timeSinceLastChange = now - lastChangeTime.current;

      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
        debounceTimeout.current = null;
      }

      if (timeSinceLastChange >= MIN_CHANGE_INTERVAL) {
        lastChangeTime.current = now;
        pendingSection.current = null;
        setActiveSection(newSection);
      } else {
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
    handleScroll();

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
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="glass-card p-4 flex flex-col gap-3">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-left relative"
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {isActive && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                  layoutId="activeIndicator"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
                  }}
                />
              )}
              <div
                className={`text-sm font-light transition-colors duration-300 pl-4 ${
                  isActive
                    ? "gradient-text-iridescent"
                    : isHovered
                    ? "text-white/80"
                    : "text-white/50"
                }`}
                style={isActive ? {
                  textShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                } : {}}
              >
                {section.name}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
