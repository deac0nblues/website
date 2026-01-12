"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MouseReactiveProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function MouseReactive({ children, className = "", intensity = 15 }: MouseReactiveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 150,
    damping: 15,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = (e.clientX - centerX) / rect.width;
      const distanceY = (e.clientY - centerY) / rect.height;
      
      // Only react if mouse is within reasonable distance
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      if (distance < 1) {
        mouseX.set(distanceX);
        mouseY.set(distanceY);
        setIsHovering(true);
      } else {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovering ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
