"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      {/* Section header with metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <div className="code-accent mb-4 text-[11px]">[ABOUT]</div>
        <h2 className="headline-medium mb-4">Who We Are</h2>
        <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
          ENGINEERING-LED /// PRODUCTION-FOCUSED /// INFRASTRUCTURE-MINDED
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
      >
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8 body-text">
          <p className="text-white leading-relaxed">
            Quicksilver Labs is an engineering-led AI firm built by PhDs and industry veterans. We&apos;re researchers and practitioners obsessed with what&apos;s next—and how it creates real business value.
          </p>
          <p className="text-white leading-relaxed">
            Senior talent at every layer, from strategy to code. We believe AI creates durable advantage when it&apos;s infrastructure, not novelty. We build systems that work in the real world—where data is messy, regulations are strict, and you need it to last.
          </p>
          <p className="text-white font-medium text-lg sm:text-xl leading-relaxed border-l-4 border-[#00ff96] pl-4 sm:pl-6">
            We turn AI ambition into working systems.
          </p>
        </div>
        
        {/* Side margin notes */}
        <div className="lg:col-span-1">
          <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed space-y-6 border-l-2 border-[#00ff96] pl-4">
            <div>
              <div className="text-[#00ff96] mb-2">BACKGROUNDS</div>
              <div>PhDs and industry veterans</div>
            </div>
            <div className="pt-4 border-t border-[#00ff96]/20">
              <div className="text-[#00ff96] mb-2">REAL WORLD</div>
              <div>Messy data</div>
              <div>Strict regulations</div>
              <div>Built to last</div>
            </div>
            <div className="pt-4 border-t border-[#00ff96]/20">
              <div className="text-[#00ff96] mb-2">APPROACH</div>
              <div>Infrastructure, not novelty</div>
              <div>Strategy to code</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
