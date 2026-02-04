"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm mb-12 text-glow"
      >
        {'>'} WHO WE ARE
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="terminal-window p-12 md:p-16 relative"
      >
        {/* Command prompt style header */}
        <div className="mb-6">
          <div className="text-xs text-white mb-2">
            {'>'} SYSTEM INFO
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#ffb000] text-glow-amber">[STATUS]</span>
            <span className="text-glow">ONLINE</span>
          </div>
        </div>
        
        <div className="text-sm text-white leading-relaxed space-y-6">
          <p>
            Quicksilver Labs is an engineering-led AI firm built by people who have spent years designing, delivering, and operating complex technical systems in production. We come from applied mathematics, engineering, and large-scale technical delivery backgrounds.
          </p>
          <p>
            We believe AI creates durable advantage when treated as infrastructure, not novelty. We focus on systems that must function under real constraints: imperfect data, regulatory pressure, operational complexity, and long-term ownership.
          </p>
          <p className="text-[#00ff41] text-glow font-medium">
            Quicksilver Labs exists to close the gap between knowing where AI should go and taking responsibility for building what it takes to get there.
          </p>
        </div>
        
        {/* Signal strength visualization */}
        <div className="mt-8 pt-8 border-t border-[#00ff41] opacity-30">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-xs text-[#ffb000]">[SIGNAL STRENGTH]</div>
            <div className="flex-1 h-2 bg-[#1a1a1a] relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 signal-bar" style={{ width: '95%' }} />
            </div>
            <div className="text-xs text-glow">95%</div>
          </div>
          <div className="text-xs text-white">
            NOISE FLOOR: -42.3 dB
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
