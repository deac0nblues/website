"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Leadership() {
  return (
    <Section id="leadership">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm mb-12 text-glow"
      >
        {'>'} LEADERSHIP
      </motion.div>
      
      <div className="space-y-8">
        {/* Dan Watkins - CEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="terminal-window p-12 group cursor-pointer relative"
        >
          {/* Glitch effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen opacity-10 translate-x-1" />
            <div className="absolute inset-0 bg-[#ff3366] mix-blend-screen opacity-10 -translate-x-1" />
          </div>
          
          <div className="relative z-10">
            {/* User profile format */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                {/* ASCII indicator */}
                <div className="text-2xl text-[#00ff41] text-glow">
                  {'>'} DW
                </div>
                <div className="flex-1 h-px bg-[#00ff41] opacity-30" />
                <div className="text-xs text-white">
                  USER@QUICKSILVER
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-normal mb-2 tracking-wider text-glow uppercase">
                DAN WATKINS
              </h2>
              <div className="text-sm text-[#ffb000] text-glow-amber mb-2">
                [CEO] [ONLINE]
              </div>
            </div>
            
            <div className="text-sm text-white leading-relaxed space-y-6">
              <p>
                Dan Watkins is a technical executive with deep experience building and scaling engineering organizations that deliver complex systems in production. He has spent his career at the intersection of technical execution and business strategy, leading teams through high-growth phases and operationalizing AI systems at enterprise scale.
              </p>
              <p>
                His work focuses on translating technical capability into durable business value. He has built organizations that treat AI as infrastructure—systems that must function reliably under real-world constraints, regulatory requirements, and long-term operational demands.
              </p>
            </div>
            
            {/* Signal strength */}
            <div className="flex items-center gap-2 mt-6">
              <div className="text-xs text-[#ffb000]">[SIGNAL]</div>
              <div className="flex-1 h-2 bg-[#1a1a1a] relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 signal-bar" style={{ width: '91%' }} />
              </div>
              <div className="text-xs text-glow">91%</div>
            </div>
          </div>
        </motion.div>
        
        {/* Ben Letson - CTO & Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="terminal-window p-12 group cursor-pointer relative"
        >
          {/* Glitch effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen opacity-10 translate-x-1" />
            <div className="absolute inset-0 bg-[#ff3366] mix-blend-screen opacity-10 -translate-x-1" />
          </div>
          
          <div className="relative z-10">
            {/* User profile format */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                {/* ASCII indicator */}
                <div className="text-2xl text-[#00ff41] text-glow">
                  {'>'} BL
                </div>
                <div className="flex-1 h-px bg-[#00ff41] opacity-30" />
                <div className="text-xs text-white">
                  USER@QUICKSILVER
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-normal mb-2 tracking-wider text-glow uppercase">
                BEN LETSON
              </h2>
              <div className="text-sm text-[#ffb000] text-glow-amber mb-2">
                [CTO] [FOUNDER] [ACTIVE]
              </div>
            </div>
            
            <div className="text-sm text-white leading-relaxed space-y-6">
              <p>
                Ben Letson is a technical founder with a PhD background and years of experience designing and delivering complex AI systems in production environments. He grew up in early-stage technical teams, helped scale systems through high-growth phases, and went on to operate at large-scale enterprise delivery.
              </p>
              <p>
                His work sits at the intersection of applied mathematics, engineering, and execution. He has spent his career understanding why AI systems succeed or fail in production - and building the infrastructure that makes them work.
              </p>
            </div>
            
            {/* Signal strength */}
            <div className="flex items-center gap-2 mt-6">
              <div className="text-xs text-[#ffb000]">[SIGNAL]</div>
              <div className="flex-1 h-2 bg-[#1a1a1a] relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 signal-bar" style={{ width: '94%' }} />
              </div>
              <div className="text-xs text-glow">94%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
