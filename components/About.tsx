"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      {/* Section label */}
      <div className="text-2xl font-black uppercase mb-12 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
        WHO WE ARE
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-white p-12 border-4 border-[#1a1a1a] shadow-xl"
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-t-[#d32f2f] border-r-[40px] border-r-transparent" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-b-[#ff6f00] border-l-[40px] border-l-transparent" />
        
        <div className="text-lg leading-relaxed text-gray-700 space-y-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
          <p>
            Quicksilver Labs is an engineering-led AI firm built by people who have spent years designing, delivering, and operating complex technical systems in production. We come from applied mathematics, engineering, and large-scale technical delivery backgrounds.
          </p>
          <p>
            We believe AI creates durable advantage when treated as infrastructure, not novelty. We focus on systems that must function under real constraints: imperfect data, regulatory pressure, operational complexity, and long-term ownership.
          </p>
          <p className="font-bold text-[#1a1a1a] text-xl">
            Quicksilver Labs exists to close the gap between knowing where AI should go and taking responsibility for building what it takes to get there.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
