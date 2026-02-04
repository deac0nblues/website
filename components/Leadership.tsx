"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import AnimatedHeading from "./AnimatedHeading";
import MouseReactive from "./MouseReactive";

export default function Leadership() {
  return (
    <Section id="leadership">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '70px 70px'
      }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="code-accent mb-4 text-xs tracking-widest">
          [LEADERSHIP]
        </div>
        
        {/* Dan Watkins - CEO */}
        <div className="mb-16">
          <div className="relative">
            <AnimatedHeading
              className="text-3xl md:text-4xl font-medium mb-6 text-[#000000] relative"
              delay={0.1}
            >
              Dan Watkins — CEO
            </AnimatedHeading>
            {/* Horizontal accent line */}
            <span className="absolute -left-12 top-1/2 w-8 h-px bg-black/20 hidden md:block"></span>
          </div>
          
          <div className="space-y-6 text-[#2D2D2D] leading-relaxed text-lg max-w-3xl pl-8 md:pl-12">
            <p>
              Dan Watkins is a technical executive with deep experience building and scaling engineering organizations that deliver complex systems in production. He has spent his career at the intersection of technical execution and business strategy, leading teams through high-growth phases and operationalizing AI systems at enterprise scale.
            </p>
            <p>
              His work focuses on translating technical capability into durable business value. He has built organizations that treat AI as infrastructure—systems that must function reliably under real-world constraints, regulatory requirements, and long-term operational demands.
            </p>
          </div>
        </div>
        
        {/* Ben Letson - CTO */}
        <div className="relative">
          <div className="relative">
            <AnimatedHeading
              className="text-3xl md:text-4xl font-medium mb-6 text-[#000000] relative"
              delay={0.2}
            >
              Ben Letson — CTO
            </AnimatedHeading>
            {/* Horizontal accent line */}
            <span className="absolute -left-12 top-1/2 w-8 h-px bg-black/20 hidden md:block"></span>
          </div>
          
        {/* Geometric accents */}
        <MouseReactive className="absolute top-0 right-0 w-32 h-32 hidden lg:block" intensity={6}>
          <motion.div 
            className="w-full h-full border border-black/5 rotate-45"
            animate={{ rotate: [45, 50, 45] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        <MouseReactive className="absolute bottom-0 left-0 w-24 h-24 hidden md:block" intensity={6}>
          <motion.div 
            className="w-full h-full border border-black/5 -rotate-45"
            animate={{ rotate: [-45, -50, -45] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        
        {/* Additional geometric elements */}
        <MouseReactive className="absolute top-1/4 right-16 w-14 h-14 hidden xl:block" intensity={5}>
          <motion.div 
            className="w-full h-full border border-black/6 rotate-12"
            animate={{ rotate: [12, 18, 12] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        <MouseReactive className="absolute bottom-1/4 left-16 w-12 h-12 hidden lg:block" intensity={5}>
          <motion.div 
            className="w-full h-full border border-black/6 -rotate-12"
            animate={{ rotate: [-12, -18, -12] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        
        {/* Corner squares */}
        <div className="absolute top-12 right-12 w-8 h-8 border border-black/8 hidden xl:block"></div>
        <div className="absolute bottom-12 left-12 w-8 h-8 border border-black/8 hidden xl:block"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-1/3 right-0 w-28 h-px bg-black/6 rotate-45 origin-right hidden xl:block"></div>
        <div className="absolute bottom-1/3 left-0 w-28 h-px bg-black/6 -rotate-45 origin-left hidden xl:block"></div>
        
        {/* Horizontal accent line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/6 to-transparent hidden lg:block"></div>
          
          {/* Vertical accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-black/15 via-black/8 to-transparent hidden md:block"></div>
          
          <div className="space-y-6 text-[#2D2D2D] leading-relaxed text-lg max-w-3xl pl-8 md:pl-12">
            <p>
              Ben Letson is a technical founder with a PhD background and years of experience designing and delivering complex AI systems in production environments. He grew up in early-stage technical teams, helped scale systems through high-growth phases, and went on to operate at large-scale enterprise delivery.
            </p>
            <p>
              His work sits at the intersection of applied mathematics, engineering, and execution. He has spent his career understanding why AI systems succeed or fail in production - and building the infrastructure that makes them work.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
