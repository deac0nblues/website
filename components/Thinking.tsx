"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "./Section";
import AnimatedHeading from "./AnimatedHeading";
import MouseReactive from "./MouseReactive";

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

  // Get the three articles to display (current, next, next+1)
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
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Geometric accents */}
      <MouseReactive className="absolute top-20 right-20 w-20 h-20 hidden xl:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-black/5 rotate-45"
          animate={{ rotate: [45, 50, 45] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      <MouseReactive className="absolute bottom-20 left-20 w-16 h-16 hidden lg:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-black/5 -rotate-45"
          animate={{ rotate: [-45, -50, -45] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      
      {/* Corner squares */}
      <div className="absolute top-12 left-12 w-8 h-8 border border-black/8 hidden xl:block"></div>
      <div className="absolute bottom-12 right-12 w-8 h-8 border border-black/8 hidden xl:block"></div>
      
      {/* Diagonal lines */}
      <div className="absolute top-1/4 right-0 w-32 h-px bg-black/6 rotate-45 origin-right hidden xl:block"></div>
      <div className="absolute bottom-1/4 left-0 w-32 h-px bg-black/6 -rotate-45 origin-left hidden xl:block"></div>
      
      {/* Vertical accent lines */}
      <div className="absolute left-24 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/6 to-transparent hidden xl:block"></div>
      <div className="absolute right-24 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/6 to-transparent hidden xl:block"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="code-accent mb-4 text-xs tracking-widest">
          [THINKING]
        </div>
        
        <AnimatedHeading
          className="text-3xl md:text-4xl font-medium mb-12 text-[#000000]"
          delay={0.1}
        >
          What We're Thinking About
        </AnimatedHeading>

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
                <div className="border border-black/10 p-6 md:p-8 bg-white/50 hover:bg-white/80 transition-all duration-200 h-full flex flex-col">
                  <div className="code-accent text-xs tracking-widest text-black/40 mb-3">
                    {article.type.toUpperCase()}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#000000]">
                    {article.title}
                  </h3>
                  <p className="text-[#2D2D2D] leading-relaxed text-base flex-grow">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-black w-8"
                  : "bg-black/20 hover:bg-black/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
