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
      <div className="text-2xl font-black uppercase mb-12 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
        WHAT WE'RE THINKING ABOUT
      </div>
      
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
            {articles.map((article, idx) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-full md:w-1/3"
                style={{ minWidth: "calc(33.333% - 1.5rem)" }}
              >
                <div className="relative bg-white border-4 border-[#1a1a1a] p-8 h-full shadow-xl">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#d32f2f] text-white flex items-center justify-center font-black text-xl" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                    {String(idx + 4).padStart(2, '0')}
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-t-[#ff6f00] border-l-[25px] border-l-transparent" />
                  
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#455a64] mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {article.type.toUpperCase()}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                    {article.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 flex-grow" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bold numbered navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-12 border-4 border-[#1a1a1a] flex items-center justify-center font-black text-lg transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#d32f2f] text-white"
                  : "bg-white text-[#1a1a1a] hover:bg-[#ff6f00] hover:text-white"
              }`}
              style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
