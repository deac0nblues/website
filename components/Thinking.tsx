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
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-12"
      >
        What We're Thinking About
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
            className="flex gap-12 md:gap-16"
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
                style={{ minWidth: "calc(33.333% - 2rem)" }}
              >
                <div className="section-label mb-4">
                  {article.type.toUpperCase()}
                </div>
                <h3 className="text-[28px] md:text-[36px] font-light leading-[1.2] tracking-[-1px] mb-6 font-serif">
                  {article.title}
                </h3>
                <p className="body-text text-[#666666]">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Minimal navigation dots */}
        <div className="flex justify-center gap-2 mt-16">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black w-8"
                  : "bg-[#e0e0e0] w-1 hover:bg-[#999999]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
