"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0e27] text-white px-6 md:px-16 py-20 overflow-hidden">
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
        <div className="mt-2 md:mt-0">EST. 2024 /// BOS + HOU</div>
      </motion.div>
      
      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[48px] md:text-[64px] lg:text-[84px] font-black leading-[0.95] tracking-[-3px] mb-8"
        >
          <span className="block">AI infrastructure</span>
          <span className="block">built to create</span>
          <span className="block">durable advantage.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#a0a0a0] mb-12 max-w-2xl"
        >
          VC and Fortune 500 veterans. Production-grade AI systems. Leading Edge AI Infrastructure.
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
            <div className="text-[10px] text-[#a0a0a0] uppercase tracking-wider mt-2 font-mono">Perpetual Contracts</div>
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
            className="inline-block px-8 py-3 border-2 border-[#00ff96] bg-[#00ff96] text-[#0a0e27] hover:bg-transparent hover:text-[#00ff96] transition-all duration-200 font-medium font-mono uppercase tracking-wider text-sm"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
      
      {/* Side annotations */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute right-6 md:right-16 top-64 w-64 md:w-80 font-mono text-[11px] leading-relaxed text-[#a0a0a0] border-l-2 border-[#00ff96] pl-6 hidden lg:block"
      >
        [001] Strategic systems design<br/>
        [002] Production engineering<br/>
        [003] Systems innovation<br/>
        <br/>
        We build reusable infrastructure<br/>
        that compounds over time —<br/>
        not PowerPoint decks.
      </motion.div>
      
      {/* Code snippet decoration - bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-16 left-6 md:left-16 font-mono text-[10px] text-[#00ff96] hidden xl:block"
      >
        <div className="opacity-50">if (system.fails) {'{'}</div>
        <div className="pl-4 opacity-30">return engineering;</div>
        <div className="opacity-50">{'}'}</div>
      </motion.div>
    </section>
  );
}
