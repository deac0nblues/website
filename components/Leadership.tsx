"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Leadership() {
  return (
    <Section id="leadership">
      {/* Section label */}
      <div className="text-[11px] font-bold uppercase tracking-[2px] mb-12">
        LEADERSHIP
      </div>
      
      <div className="space-y-8">
        {/* Dan Watkins - CEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="border-4 border-[#1a1a1a] p-12 bg-white"
        >
          <h2 className="text-[64px] font-black uppercase tracking-[-2px] mb-4">
            DAN WATKINS
          </h2>
          <div className="text-base font-bold uppercase tracking-[2px] mb-8">
            CEO
          </div>
          <div className="text-base font-medium leading-relaxed space-y-6">
            <p>
              Dan Watkins is a technical executive with deep experience building and scaling engineering organizations that deliver complex systems in production. He has spent his career at the intersection of technical execution and business strategy, leading teams through high-growth phases and operationalizing AI systems at enterprise scale.
            </p>
            <p>
              His work focuses on translating technical capability into durable business value. He has built organizations that treat AI as infrastructure—systems that must function reliably under real-world constraints, regulatory requirements, and long-term operational demands.
            </p>
          </div>
        </motion.div>
        
        {/* Ben Letson - CTO & Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-4 border-[#1a1a1a] p-12 bg-white"
        >
          <h2 className="text-[64px] font-black uppercase tracking-[-2px] mb-4">
            BEN LETSON
          </h2>
          <div className="text-base font-bold uppercase tracking-[2px] mb-8">
            CTO & FOUNDER
          </div>
          <div className="text-base font-medium leading-relaxed space-y-6">
            <p>
              Ben Letson is a technical founder with a PhD background and years of experience designing and delivering complex AI systems in production environments. He grew up in early-stage technical teams, helped scale systems through high-growth phases, and went on to operate at large-scale enterprise delivery.
            </p>
            <p>
              His work sits at the intersection of applied mathematics, engineering, and execution. He has spent his career understanding why AI systems succeed or fail in production - and building the infrastructure that makes them work.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
