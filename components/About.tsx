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
        className="section-label mb-12"
      >
        Who We Are
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <p className="body-text text-black">
          Quicksilver Labs is an engineering-led AI firm built by people who have spent years designing, delivering, and operating complex technical systems in production. We come from applied mathematics, engineering, and large-scale technical delivery backgrounds.
        </p>
        <p className="body-text text-black">
          We believe AI creates durable advantage when treated as infrastructure, not novelty. We focus on systems that must function under real constraints: imperfect data, regulatory pressure, operational complexity, and long-term ownership.
        </p>
        <p className="body-text text-black font-medium">
          Quicksilver Labs exists to close the gap between knowing where AI should go and taking responsibility for building what it takes to get there.
        </p>
      </motion.div>
    </Section>
  );
}
