"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "./Section";

interface CarouselArticleInput {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  slug: string;
}

interface Article {
  id: number;
  title: string;
  type: string;
  excerpt: string;
  date?: string;
  category?: string;
  link?: string;
}

const PLACEHOLDER_ARTICLES: Article[] = [
  { id: 1, title: "Content to Come", type: "Coming Soon", excerpt: "Lorem ipsum dolor sit amet.", date: "—", category: "TBA", link: "#" },
  { id: 2, title: "Content to Come", type: "Coming Soon", excerpt: "Ut enim ad minim veniam.", date: "—", category: "TBA", link: "#" },
  { id: 3, title: "Content to Come", type: "Coming Soon", excerpt: "Duis aute irure dolor.", date: "—", category: "TBA", link: "#" },
];

function toCarouselArticles(carouselArticles: CarouselArticleInput[]): Article[] {
  return carouselArticles.map((a, i) => ({
    id: i + 1,
    title: a.title,
    type: "Research Note",
    excerpt: a.excerpt,
    date: a.date,
    category: a.category ?? "RESEARCH",
    link: `/thinking/${a.slug}`,
  }));
}

interface ThinkingProps {
  carouselArticles?: CarouselArticleInput[];
}

export default function Thinking({ carouselArticles = [] }: ThinkingProps) {
  const articles =
    carouselArticles.length > 0
      ? toCarouselArticles(carouselArticles)
      : PLACEHOLDER_ARTICLES;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(1);

  // Detect window size to determine visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCards(3); // Desktop: 3 cards
      } else if (width >= 768) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(1); // Mobile: 1 card
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, articles.length]);

  return (
    <Section id="rnd" className="hidden lg:block">
      {/* Section header with metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <div className="code-accent mb-4 text-[11px]">[R&D]</div>
        <h2 className="headline-medium mb-4">From the Lab</h2>
        <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
          POSITION PAPERS /// RESEARCH NOTES /// BLOG POSTS
        </div>
        <p className="body-text text-[#a0a0a0] mt-6 max-w-3xl">
          New ideas. Emerging research. Real problems. Here&apos;s what we&apos;re working on.
        </p>
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
            className="flex gap-4 sm:gap-6 md:gap-8"
            animate={{
              x: `-${currentIndex * (100 / visibleCards)}%`,
            }}
            transition={{
              type: "tween",
              duration: 0.6,
              ease: "easeInOut",
            }}
            style={{
              width: `${articles.length * (100 / visibleCards)}%`,
            }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / visibleCards}% - ${visibleCards === 1 ? '0' : visibleCards === 2 ? '0.75rem' : '1rem'})`,
                  minWidth: `calc(${100 / visibleCards}% - ${visibleCards === 1 ? '0' : visibleCards === 2 ? '0.75rem' : '1rem'})`,
                }}
              >
                <a href={article.link || "#"} className="block h-full">
                  <div className="border border-[#00ff96]/30 p-6 md:p-8 bg-[#0a0e27] hover:border-[#00ff96] transition-all duration-200 h-full flex flex-col cursor-pointer">
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
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white leading-tight">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-[#a0a0a0] leading-relaxed text-base flex-grow body-text">
                      {article.excerpt}
                    </p>
                    
                    {/* Read more indicator */}
                    <div className="mt-6 font-mono text-[10px] text-[#00ff96] uppercase tracking-wider">
                      {article.link && article.link !== "#" ? "→ READ MORE" : "COMING SOON"}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-200 touch-manipulation ${
                index === currentIndex
                  ? "bg-[#00ff96] w-12 sm:w-16 h-1.5"
                  : "bg-[#00ff96]/20 hover:bg-[#00ff96]/40 active:bg-[#00ff96]/60 w-1.5 h-1.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
