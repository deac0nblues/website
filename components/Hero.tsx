"use client";

import { motion } from "framer-motion";

interface FeaturedArticle {
  title: string;
  excerpt: string;
  slug: string;
  date?: string;
  category?: string;
}

interface HeroProps {
  featuredArticle?: FeaturedArticle | null;
}

export default function Hero({ featuredArticle = null }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-[#0a0e27] text-white px-4 sm:px-6 md:px-16 py-20 overflow-hidden">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,255,150,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Header metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col md:flex-row justify-between mb-16 md:mb-32 font-mono text-[11px] text-[#00ff96] uppercase tracking-[2px]"
      >
        <div>QUICKSILVER LABS /// SYSTEMS ENGINEERING</div>
        <div className="mt-2 md:mt-0">EST. 2025 /// Houston + Boston</div>
      </motion.div>
      
      {/* Main hero content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-light leading-[1.05] tracking-[-2px] mb-8"
          >
            <span className="block">AI systems</span>
            <span className="block">that create lasting</span>
            <span className="block">competitive advantage.</span>
          </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-[#a0a0a0] mb-12 max-w-2xl"
        >
          Built by PhDs and Fortune 50 veterans. Production-grade. Research-driven.
        </motion.p>
        
        {/* Data metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-8 md:gap-12 mt-16"
        >
          <div>
            <div className="text-[48px] md:text-[64px] font-bold text-[#00ff96]">&lt;30</div>
            <div className="text-[10px] text-[#a0a0a0] uppercase tracking-wider mt-2 font-mono">Day Strategy Sprints</div>
          </div>
          <div>
            <div className="text-[48px] md:text-[64px] font-bold text-[#00ff96]">100%</div>
            <div className="text-[10px] text-[#a0a0a0] uppercase tracking-wider mt-2 font-mono">Senior Engineers</div>
          </div>
          <div>
            <div className="text-[48px] md:text-[64px] font-bold text-[#00ff96]">0</div>
            <div className="text-[10px] text-[#a0a0a0] uppercase tracking-wider mt-2 font-mono">PowerPoint Consultants</div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="mailto:build@quicksilverlab.ai"
            className="inline-block px-6 sm:px-8 py-3 border-2 border-[#00ff96] bg-[#00ff96] text-[#0a0e27] hover:bg-transparent hover:text-[#00ff96] transition-all duration-200 font-medium font-mono uppercase tracking-wider text-sm"
          >
            Get in touch
          </a>
        </motion.div>
        </div>
      </div>
      
      {/* Featured article callout */}
      {featuredArticle && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-40 xl:right-48 2xl:right-64 top-64 w-80 xl:w-96 hidden xl:block z-20"
          style={{ maxWidth: "calc(100% - 200px)" }}
        >
          <div className="border border-[#00ff96]/30 p-6 bg-[#0a0e27] hover:border-[#00ff96] transition-all duration-200 relative z-20">
            <a href={`/thinking/${featuredArticle.slug}`} className="block">
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-[10px] text-[#00ff96] uppercase tracking-wider">
                  RESEARCH NOTE
                </div>
                <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
                  {featuredArticle.date || ""}
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block font-mono text-[9px] text-[#00ff96] border border-[#00ff96]/30 px-2 py-1 uppercase tracking-wider">
                  {featuredArticle.category ?? "RESEARCH"}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-light mb-4 text-white leading-tight">
                {featuredArticle.title}
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm body-text mb-6">
                {featuredArticle.excerpt}
              </p>
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const element = document.getElementById("rnd");
                if (element) {
                  const yOffset = -20;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="w-full font-mono text-[10px] text-[#00ff96] uppercase tracking-wider border border-[#00ff96]/30 px-4 py-2 hover:bg-[#00ff96] hover:text-[#0a0e27] transition-all duration-200 text-left cursor-pointer relative z-10"
            >
              How we think
            </button>
          </div>
        </motion.div>
      )}
      
      {/* Code snippet decoration - bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 sm:bottom-16 left-4 sm:left-6 md:left-16 font-mono text-[10px] text-[#00ff96] hidden xl:block"
      >
        <div className="opacity-50">if (system.fails) {'{'}</div>
        <div className="pl-4 opacity-30">return engineering;</div>
        <div className="opacity-50">{'}'}</div>
      </motion.div>
    </section>
  );
}
