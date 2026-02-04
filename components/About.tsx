"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      {/* Section marker - cairn stones */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-6 h-6 rounded-full bg-[#8b7355] opacity-60" />
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#7a8288]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Who We Are
        </h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Organic background blur */}
        <div className="absolute inset-0 bg-[#6b7f5c] opacity-[0.02] rounded-[50% 50% 50% 50% / 60% 60% 40% 40%] blur-3xl" />
        
        <div className="relative p-12">
          <div className="text-lg leading-relaxed text-[#4a5057] space-y-6 max-w-3xl" style={{ fontFamily: 'Crimson Text, serif' }}>
            <p>
              Quicksilver Labs is an engineering-led AI firm built by people who have spent years designing, delivering, and operating complex technical systems in production. We come from applied mathematics, engineering, and large-scale technical delivery backgrounds.
            </p>
            <p>
              We believe AI creates durable advantage when treated as infrastructure, not novelty. We focus on systems that must function under real constraints: imperfect data, regulatory pressure, operational complexity, and long-term ownership.
            </p>
            <p className="font-semibold text-[#2d3133] text-xl">
              Quicksilver Labs exists to close the gap between knowing where AI should go and taking responsibility for building what it takes to get there.
            </p>
          </div>
          
          {/* Horizon line divider */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent opacity-20" />
        </div>
      </motion.div>
    </Section>
  );
}
