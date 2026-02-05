"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "./Section";

interface Article {
  id: number;
  title: string;
  type: string;
  excerpt: string;
  date?: string;
  category?: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Position Paper: AI Infrastructure Patterns",
    type: "Position Paper",
    excerpt: "Exploring reusable patterns for building production AI systems that scale reliably under real-world constraints.",
    date: "2024.12",
    category: "SYSTEMS"
  },
  {
    id: 2,
    title: "Research Note: Failure Modes in Production AI",
    type: "Research Note",
    excerpt: "A systematic analysis of how AI systems fail in production and the engineering practices that prevent them.",
    date: "2024.11",
    category: "ENGINEERING"
  },
  {
    id: 3,
    title: "Blog Post: Strategic AI Systems Design",
    type: "Blog Post",
    excerpt: "How to think about AI as infrastructure, not novelty, and design systems that create durable competitive advantage.",
    date: "2024.10",
    category: "STRATEGY"
  },
  {
    id: 4,
    title: "Position Paper: Ownership Transfer in AI Systems",
    type: "Position Paper",
    excerpt: "Best practices for transferring ownership of AI systems to client teams and ensuring long-term operational success.",
    date: "2024.09",
    category: "OPERATIONS"
  },
  {
    id: 5,
    title: "Research Note: Time-Boxed Engagements",
    type: "Research Note",
    excerpt: "Why time-boxed, senior-led engagements deliver better outcomes than open-ended consulting arrangements.",
    date: "2024.08",
    category: "PROCESS"
  },
  {
    id: 6,
    title: "Blog Post: The Systems Innovation Approach",
    type: "Blog Post",
    excerpt: "How building reusable systems and frameworks compounds over time, making us faster and more reliable.",
    date: "2024.07",
    category: "INNOVATION"
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

  // Get the three articles to display
  const getDisplayedArticles = () => {
    const displayed: Article[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % articles.length;
      displayed.push(articles[index]);
    }
    return displayed;
  };

  const displayedArticles = getDisplayedArticles();

  return (
    <Section id="thinking">
      {/* Section header with metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <div className="code-accent mb-4 text-[11px]">[THINKING]</div>
        <h2 className="headline-medium mb-4">What We're Thinking About</h2>
        <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
          POSITION PAPERS /// RESEARCH NOTES /// BLOG POSTS
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: `-${currentIndex * 33.333}%`,
            }}
            transition={{
              type: "tween",
              duration: 0.6,
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
                style={{ minWidth: "calc(33.333% - 1rem)" }}
              >
                <div className="border border-[#00ff96]/30 p-6 md:p-8 bg-[#0a0e27] hover:border-[#00ff96] transition-all duration-200 h-full flex flex-col">
                  {/* Metadata header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="font-mono text-[10px] text-[#00ff96] uppercase tracking-wider">
                      {article.type.toUpperCase()}
                    </div>
                    <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
                      {article.date}
                    </div>
                  </div>
                  
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className="inline-block font-mono text-[9px] text-[#00ff96] border border-[#00ff96]/30 px-2 py-1 uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-light mb-4 text-white leading-tight">
                    {article.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-[#a0a0a0] leading-relaxed text-base flex-grow body-text">
                    {article.excerpt}
                  </p>
                  
                  {/* Read more indicator */}
                  <div className="mt-6 font-mono text-[10px] text-[#00ff96] uppercase tracking-wider">
                    → READ MORE
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-12">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#00ff96] w-8"
                  : "bg-[#00ff96]/20 hover:bg-[#00ff96]/40 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
