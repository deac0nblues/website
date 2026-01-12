"use client";

import { useEffect } from "react";

export default function DynamicGrid() {
  useEffect(() => {
    console.log("[DynamicGrid] Component mounted");
    
    // Ensure the CSS variable is set on mount
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--grid-size", "60px");
      console.log("[DynamicGrid] Initial grid size set to 60px");
    }

    const handleScroll = () => {
      if (typeof document === "undefined" || typeof window === "undefined") return;
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
      const size = 60 - (progress * 40); // From 60px to 20px
      
      document.documentElement.style.setProperty("--grid-size", `${size}px`);
      
      // Debug logging (only log occasionally to avoid spam)
      if (Math.floor(progress * 10) % 2 === 0) {
        console.log(`[DynamicGrid] Scroll progress: ${(progress * 100).toFixed(1)}%, Grid size: ${size.toFixed(1)}px`);
      }
    };

    // Set initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log("[DynamicGrid] Scroll listener attached");
    
    // Also listen for resize in case content height changes
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      console.log("[DynamicGrid] Component unmounted, listeners removed");
    };
  }, []);

  return null;
}
