"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "./Section";

interface Article {
  id: number;
  title: string;
  type: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Position Paper: AI Infrastructure Patterns",
    type: "Position Paper",
    excerpt: "Exploring reusable patterns for building production AI systems that scale reliably under real-world constraints.",
  },
  {
    id: 2,
    title: "Research Note: Failure Modes in Production AI",
    type: "Research Note",
    excerpt: "A systematic analysis of how AI systems fail in production and the engineering practices that prevent them.",
  },
  {
    id: 3,
    title: "Blog Post: Strategic AI Systems Design",
    type: "Blog Post",
    excerpt: "How to think about AI as infrastructure, not novelty, and design systems that create durable competitive advantage.",
  },
  {
    id: 4,
    title: "Position Paper: Ownership Transfer in AI Systems",
    type: "Position Paper",
    excerpt: "Best practices for transferring ownership of AI systems to client teams and ensuring long-term operational success.",
  },
  {
    id: 5,
    title: "Research Note: Time-Boxed Engagements",
    type: "Research Note",
    excerpt: "Why time-boxed, senior-led engagements deliver better outcomes than open-ended consulting arrangements.",
  },
  {
    id: 6,
    title: "Blog Post: The Systems Innovation Approach",
    type: "Blog Post",
    excerpt: "How building reusable systems and frameworks compounds over time, making us faster and more reliable.",
  },
];

export default function Thinking() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <Section id="thinking">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm mb-12 text-glow"
      >
        {'>'} WHAT WERE THINKING ABOUT
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: `-${currentIndex * 33.333}%`,
            }}
            transition={{
              type: "tween",
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              width: `${articles.length * 33.333}%`,
            }}
          >
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-full md:w-1/3"
                style={{ minWidth: "calc(33.333% - 1.5rem)" }}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="terminal-window p-8 h-full flex flex-col group cursor-pointer relative"
                >
                  {/* Glitch effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen opacity-10 translate-x-1" />
                    <div className="absolute inset-0 bg-[#ff3366] mix-blend-screen opacity-10 -translate-x-1" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Line number / timestamp */}
                    <div className="text-xs text-white mb-2">
                      {String(index + 4).padStart(2, '0')} | {new Date().toISOString().split('T')[0]}
                    </div>
                    
                    <div className="text-xs text-[#ffb000] mb-4 uppercase tracking-wider text-glow-amber">
                      {article.type.toUpperCase()}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-normal mb-4 tracking-tight text-glow uppercase">
                      {article.title.replace(/:/g, '')}
                    </h3>
                    
                    <p className="text-sm text-white leading-relaxed flex-grow mb-4">
                      {article.excerpt}
                    </p>
                    
                    {/* Signal strength */}
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-[#ffb000]">[SIGNAL]</div>
                      <div className="flex-1 h-2 bg-[#1a1a1a] relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 signal-bar" style={{ width: `${75 + index * 3}%` }} />
                      </div>
                      <div className="text-xs text-glow">{75 + index * 3}%</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Terminal-style navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#00ff41] scale-125 text-glow"
                  : "bg-[#4a4a4a] hover:bg-[#ffb000]"
              }`}
              style={index === currentIndex ? {
                boxShadow: '0 0 10px #00ff41',
              } : {}}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
