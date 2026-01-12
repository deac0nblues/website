"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import AnimatedHeading from "./AnimatedHeading";
import MouseReactive from "./MouseReactive";

export default function Process() {
  return (
    <Section variant="dark" id="process">
      {/* Enhanced geometric grid overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Diagonal line pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        )`
      }}></div>
      
      {/* Geometric accent shapes */}
      <MouseReactive className="absolute top-10 right-20 w-24 h-24 hidden lg:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-white/10 rotate-45"
          animate={{ rotate: [45, 50, 45] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      <MouseReactive className="absolute bottom-10 left-20 w-16 h-16 hidden md:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-white/10 -rotate-45"
          animate={{ rotate: [-45, -50, -45] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      
      {/* Code-like terminal lines - left side */}
      <div className="absolute top-6 left-6 code-accent text-white/25 text-[10px] tracking-widest hidden md:block space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-white/40">$</span>
          <span>AISOS_INIT</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/40">$</span>
          <span>SYSTEM_CHECK</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/40">$</span>
          <span>DEPLOY_READY</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-white/40">→</span>
          <span className="text-white/30">[RUNNING]</span>
        </div>
      </div>
      
      {/* Right side code accent */}
      <div className="absolute top-6 right-6 code-accent text-white/25 text-[10px] tracking-widest hidden lg:block text-right space-y-1">
        <div>STATUS: <span className="text-white/40">ACTIVE</span></div>
        <div>MODE: <span className="text-white/40">PRODUCTION</span></div>
        <div>OWNERSHIP: <span className="text-white/40">TRANSFERRED</span></div>
        <div className="mt-2 text-white/30">[VERIFIED]</div>
      </div>
      
      {/* Bottom left schematic elements */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <svg width="120" height="80" className="opacity-20">
          <line x1="0" y1="0" x2="40" y2="40" stroke="white" strokeWidth="1" />
          <line x1="40" y1="40" x2="80" y2="0" stroke="white" strokeWidth="1" />
          <line x1="80" y1="0" x2="120" y2="40" stroke="white" strokeWidth="1" />
          <line x1="0" y1="40" x2="120" y2="40" stroke="white" strokeWidth="1" />
          <circle cx="40" cy="40" r="3" fill="white" />
          <circle cx="80" cy="40" r="3" fill="white" />
        </svg>
      </div>
      
      {/* Bottom right data flow visualization */}
      <div className="absolute bottom-10 right-10 hidden xl:block">
        <div className="code-accent text-white/20 text-[9px] tracking-widest space-y-1">
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-white/30 inline-block"></span>
            <span>INPUT</span>
          </div>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-white/40 inline-block"></span>
            <span>PROCESS</span>
          </div>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-white/50 inline-block"></span>
            <span>OUTPUT</span>
          </div>
        </div>
      </div>
      
      {/* Animated scanning line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          y: [0, 800, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 code-accent text-white/15 text-lg hidden md:block">[</div>
      <div className="absolute top-4 right-4 code-accent text-white/15 text-lg hidden md:block">]</div>
      <div className="absolute bottom-4 left-4 code-accent text-white/15 text-lg hidden md:block">[</div>
      <div className="absolute bottom-4 right-4 code-accent text-white/15 text-lg hidden md:block">]</div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="code-accent mb-4 text-xs tracking-widest text-white/60">
          [PROCESS]
        </div>
        
        <AnimatedHeading
          className="text-3xl md:text-4xl font-medium mb-8 text-[#FAFAFA]"
          delay={0.1}
        >
          AI Systems & Operations Sprint (AISOS)
        </AnimatedHeading>
        
        <div className="space-y-6 text-[#E5E5E5] leading-relaxed text-lg mb-8">
          <p>
            Our work is organized around focused AI Systems & Operations Sprints.
          </p>
          <p>
            We identify system-level failure modes early, validate that risks are solvable, and engineer solutions designed for deployment, ownership, and long-term operation.
          </p>
          <p>
            We do not sell perpetual services. We build systems, document them, and teach your team how to operate and evolve what we deliver.
          </p>
        </div>
        
        {/* Whitepaper button */}
        <motion.a
          href="#whitepaper"
          className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200 font-medium tracking-wider text-sm code-accent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          READ WHITEPAPER →
        </motion.a>
      </motion.div>
    </Section>
  );
}
