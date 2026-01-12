"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import MouseReactive from "./MouseReactive";

export default function About() {
  return (
    <Section id="about">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Corner elements */}
      <div className="absolute top-6 left-6 w-24 h-24 border border-black/5 hidden lg:block"></div>
      <div className="absolute bottom-6 right-6 w-24 h-24 border border-black/5 hidden lg:block"></div>
      
      {/* Additional geometric shapes */}
      <MouseReactive className="absolute top-1/3 right-16 w-16 h-16 hidden xl:block" intensity={5}>
        <motion.div 
          className="w-full h-full border border-black/6 rotate-45"
          animate={{ rotate: [45, 50, 45] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      <MouseReactive className="absolute bottom-1/3 left-16 w-14 h-14 hidden lg:block" intensity={5}>
        <motion.div 
          className="w-full h-full border border-black/6 -rotate-45"
          animate={{ rotate: [-45, -50, -45] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      
      {/* Small corner squares */}
      <div className="absolute top-16 right-16 w-6 h-6 border border-black/8 hidden xl:block"></div>
      <div className="absolute bottom-16 left-16 w-6 h-6 border border-black/8 hidden xl:block"></div>
      
      {/* Horizontal accent lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/6 to-transparent hidden lg:block"></div>
      
      {/* Diagonal accent lines */}
      <div className="absolute top-20 right-0 w-24 h-px bg-black/6 rotate-45 origin-right hidden xl:block"></div>
      <div className="absolute bottom-20 left-0 w-24 h-px bg-black/6 -rotate-45 origin-left hidden xl:block"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-[#2D2D2D] leading-relaxed text-lg relative z-10"
      >
        <div className="code-accent mb-4 text-xs tracking-widest">
          [ABOUT]
        </div>
        
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-black/20 via-black/10 to-transparent hidden md:block"></div>
        
        {/* Horizontal accent on first paragraph */}
        <div className="absolute left-0 top-8 w-12 h-px bg-black/10 hidden md:block"></div>
        
        <div className="pl-8 md:pl-12">
          <p className="mb-10">
            Quicksilver Labs is an engineering-led AI firm built by people who have spent years designing, delivering, and operating complex technical systems in production. We come from applied mathematics, engineering, and large-scale technical delivery backgrounds.
          </p>
          <p className="mb-10">
            We believe AI is most dangerous when treated as a novelty and most powerful when treated as infrastructure. We focus on systems that must function under real constraints: imperfect data, regulatory pressure, operational complexity, and long-term ownership.
          </p>
          <p className="font-medium text-[#000000] relative mb-0">
            Quicksilver Labs exists to close the gap between knowing where AI should go and taking responsibility for building what it takes to get there.
            <span className="absolute -left-12 top-1/2 w-8 h-px bg-black/20 hidden md:block"></span>
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
