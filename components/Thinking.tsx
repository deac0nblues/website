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
      {/* Section marker - cairn stones */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-6 h-6 rounded-full bg-[#c17a5c] opacity-60" />
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#7a8288]" style={{ fontFamily: 'Inter, sans-serif' }}>
          What We're Thinking About
        </h2>
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
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-full md:w-1/3"
                style={{ minWidth: "calc(33.333% - 1.5rem)" }}
              >
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="relative bg-white p-8 h-full shadow-sm"
                  style={{
                    borderRadius: '40% 60% 50% 50% / 50% 50% 50% 50%',
                  }}
                >
                  <div className="text-xs font-medium text-[#7a8288] mb-4 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {article.type}
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal mb-4 tracking-tight text-[#2d3133]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {article.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a5057] flex-grow" style={{ fontFamily: 'Crimson Text, serif' }}>
                    {article.excerpt}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Rounded stone navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#6b7f5c] w-8"
                  : "bg-[#8b7355] opacity-30 hover:opacity-60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
