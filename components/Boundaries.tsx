"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Boundaries() {
  return (
    <Section id="boundaries">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.008] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Diagonal strikethrough pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(
          135deg,
          transparent,
          transparent 2px,
          rgba(0, 0, 0, 0.05) 2px,
          rgba(0, 0, 0, 0.05) 4px
        )`
      }}></div>
      
      {/* Geometric elements */}
      <motion.div 
        className="absolute top-16 right-16 w-16 h-16 border border-black/6 rotate-45 hidden xl:block"
        animate={{ rotate: [45, 50, 45] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-16 left-16 w-12 h-12 border border-black/6 -rotate-45 hidden lg:block"
        animate={{ rotate: [-45, -50, -45] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      
      {/* Corner squares */}
      <div className="absolute top-8 right-8 w-6 h-6 border border-black/8 hidden xl:block"></div>
      <div className="absolute bottom-8 left-8 w-6 h-6 border border-black/8 hidden xl:block"></div>
      
      {/* Diagonal accent lines */}
      <div className="absolute top-1/4 right-0 w-24 h-px bg-black/6 rotate-45 origin-right hidden xl:block"></div>
      <div className="absolute bottom-1/4 left-0 w-24 h-px bg-black/6 -rotate-45 origin-left hidden xl:block"></div>
      
      {/* Vertical accent lines */}
      <div className="absolute left-20 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/6 to-transparent hidden xl:block"></div>
      <div className="absolute right-20 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/6 to-transparent hidden xl:block"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-[#2D2D2D] text-lg leading-relaxed relative z-10"
      >
        <div className="code-accent mb-4 text-xs tracking-widest text-black/40">
          [BOUNDARIES]
        </div>
        
        {/* Strikethrough accent line */}
        <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-black/10 via-black/5 to-transparent hidden md:block"></div>
        
        {/* Horizontal accent */}
        <div className="absolute left-0 top-12 w-16 h-px bg-black/8 hidden md:block"></div>
        
        <div className="pl-8 md:pl-12">
          <p className="mb-6 font-medium text-[#2D2D2D]">We don't:</p>
          <ul className="space-y-3 list-none">
            <li className="flex items-start">
              <span className="text-black/30 mr-3">×</span>
              <span>Sell miracles or black boxes</span>
            </li>
            <li className="flex items-start">
              <span className="text-black/30 mr-3">×</span>
              <span>Treat organizational problems as model problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-black/30 mr-3">×</span>
              <span>Run open-ended consulting engagements</span>
            </li>
            <li className="flex items-start">
              <span className="text-black/30 mr-3">×</span>
              <span>Leave clients dependent on us</span>
            </li>
            <li className="flex items-start">
              <span className="text-black/30 mr-3">×</span>
              <span>Ship systems we can't explain or operate</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
