"use client";

import { useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function DynamicGrid() {
  const { scrollYProgress } = useScroll();
  const gridSize = useTransform(scrollYProgress, [0, 1], [60, 20]);

  useEffect(() => {
    const unsubscribe = gridSize.on("change", (latest) => {
      document.documentElement.style.setProperty("--grid-size", `${latest}px`);
    });
    return () => unsubscribe();
  }, [gridSize]);

  return null;
}
