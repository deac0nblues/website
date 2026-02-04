"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#fafafa] text-black px-6 md:px-20 py-24 flex flex-col">
      {/* Logo/Wordmark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[11px] uppercase tracking-[3px] font-medium text-[#666666] mb-32 md:mb-48"
      >
        Quicksilver Labs
      </motion.div>
      
      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[64px] md:text-[80px] lg:text-[96px] font-light leading-[1.1] tracking-[-2px] mb-16 font-serif"
          >
            AI infrastructure built to create durable advantage.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light leading-[1.8] text-[#666666] max-w-xl mb-20"
          >
            Small, senior teams. Strategic thinking. Production systems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="mailto:ben@quicksilverlab.ai"
              className="inline-block px-12 py-5 border border-black text-sm uppercase tracking-[1px] hover:bg-black hover:text-white transition-all duration-300 font-medium"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
