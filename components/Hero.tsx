"use client";

import { motion } from "framer-motion";
import MouseReactive from "./MouseReactive";
import AnimatedHeading from "./AnimatedHeading";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Geometric accent elements */}
      <MouseReactive className="absolute top-20 left-10 w-32 h-32 hidden md:block" intensity={8}>
        <motion.div 
          className="w-full h-full border border-black/10 rotate-45"
          animate={{ rotate: [45, 50, 45] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      <MouseReactive className="absolute bottom-20 right-10 w-24 h-24 hidden lg:block" intensity={8}>
        <motion.div 
          className="w-full h-full border border-black/10"
          animate={{ rotate: [-45, -50, -45] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      
      {/* Code-like accent line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent hidden md:block"></div>
      
      {/* Additional geometric grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-black/20 to-transparent hidden md:block"></div>
      <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-black/20 to-transparent hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-black/20 to-transparent hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-black/20 to-transparent hidden md:block"></div>
      
      {/* Additional geometric shapes */}
      <MouseReactive className="absolute top-1/4 right-20 w-16 h-16 hidden xl:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-black/8 rotate-12"
          animate={{ rotate: [12, 18, 12] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      <MouseReactive className="absolute bottom-1/3 left-20 w-12 h-12 hidden lg:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-black/8 -rotate-12"
          animate={{ rotate: [-12, -18, -12] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      
      {/* Diagonal lines */}
      <div className="absolute top-1/3 left-0 w-24 h-px bg-black/8 rotate-45 origin-left hidden xl:block"></div>
      <div className="absolute bottom-1/3 right-0 w-24 h-px bg-black/8 -rotate-45 origin-right hidden xl:block"></div>
      
      {/* Small corner squares */}
      <div className="absolute top-32 right-32 w-8 h-8 border border-black/10 hidden xl:block"></div>
      <div className="absolute bottom-32 left-32 w-8 h-8 border border-black/10 hidden xl:block"></div>
      
      {/* Vertical accent lines on sides */}
      <div className="absolute left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/8 to-transparent hidden lg:block"></div>
      <div className="absolute right-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/8 to-transparent hidden lg:block"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Monospace accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="code-accent mb-4 tracking-widest"
        >
          [SYSTEM_INIT]
        </motion.div>
        
        <AnimatedHeading
          as="h1"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6 text-[#000000] relative leading-tight"
          delay={0.1}
        >
          AI complexity lives beyond the model.
        </AnimatedHeading>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-[#2D2D2D] mb-8"
        >
          Engineering AI systems that hold up under pressure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 text-[#1A1A1A] leading-relaxed"
        >
          <p className="mb-4">
            Adopting AI is a strategic investment with real upside and real risk. When AI fails, it is rarely a model problem; it is almost always a systems and engineering problem.
          </p>
          <p>
            Quicksilver Labs helps organizations capture growth from AI by outlining risks early, validating that they are solvable, and engineering systems that withstand them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-[#000000] bg-[#000000] text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#000000] transition-all duration-200 font-medium relative group"
          >
            <span className="relative z-10">Work with us</span>
            <span className="absolute inset-0 border-2 border-[#000000] opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FAFAFA] transition-all duration-200 font-medium"
          >
            Start a systems review
          </a>
        </motion.div>
      </div>
    </section>
  );
}
