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
        className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
      >
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8 body-text">
          <p className="text-white leading-relaxed">
            Quicksilver Labs is an engineering-led AI firm built by people who have spent years designing, delivering, and operating complex technical systems in production. We come from applied mathematics, engineering, and large-scale technical delivery backgrounds.
          </p>
          <p className="text-white leading-relaxed">
            We believe AI creates durable advantage when treated as infrastructure, not novelty. We focus on systems that must function under real constraints: imperfect data, regulatory pressure, operational complexity, and long-term ownership.
          </p>
          <p className="text-white font-medium text-xl leading-relaxed border-l-4 border-[#00ff96] pl-6">
            Quicksilver Labs exists to close the gap between knowing where AI should go and taking responsibility for building what it takes to get there.
          </p>
        </div>
        
        {/* Side margin notes */}
        <div className="lg:col-span-1">
          <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed space-y-6 border-l-2 border-[#00ff96] pl-4">
            <div>
              <div className="text-[#00ff96] mb-2">BACKGROUNDS</div>
              <div>Applied mathematics</div>
              <div>Engineering</div>
              <div>Large-scale delivery</div>
            </div>
            <div className="pt-4 border-t border-[#00ff96]/20">
              <div className="text-[#00ff96] mb-2">CONSTRAINTS</div>
              <div>Imperfect data</div>
              <div>Regulatory pressure</div>
              <div>Operational complexity</div>
              <div>Long-term ownership</div>
            </div>
            <div className="pt-4 border-t border-[#00ff96]/20">
              <div className="text-[#00ff96] mb-2">APPROACH</div>
              <div>Infrastructure, not novelty</div>
              <div>Production systems</div>
              <div>Real-world constraints</div>
            </div>
          </div>
        </div>
        
        {/* Code snippet decoration */}
        <div className="absolute bottom-0 left-0 font-mono text-[10px] text-[#00ff96] opacity-30 hidden xl:block">
          <pre className="whitespace-pre">{`const quicksilver = {
  approach: 'infrastructure',
  focus: 'production systems',
  constraint: 'real-world'
};`}</pre>
        </div>
      </motion.div>
    </Section>
  );
}
