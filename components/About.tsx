"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      {/* Section label */}
      <div className="text-[11px] font-bold uppercase tracking-[2px] mb-12">
        WHO WE ARE
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="border-4 border-[#1a1a1a] p-12 bg-white"
      >
        <div className="text-base font-medium leading-relaxed space-y-6">
          <p>
            Quicksilver Labs is an engineering-led AI firm built by people who have spent years designing, delivering, and operating complex technical systems in production. We come from applied mathematics, engineering, and large-scale technical delivery backgrounds.
          </p>
          <p>
            We believe AI creates durable advantage when treated as infrastructure, not novelty. We focus on systems that must function under real constraints: imperfect data, regulatory pressure, operational complexity, and long-term ownership.
          </p>
          <p className="font-bold">
            Quicksilver Labs exists to close the gap between knowing where AI should go and taking responsibility for building what it takes to get there.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
