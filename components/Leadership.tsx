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
        className="section-label mb-12"
      >
        Leadership
      </motion.div>
      
      <div className="space-y-32 md:space-y-40">
        {/* Dan Watkins - CEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] md:text-[64px] font-light leading-[1.1] tracking-[-2px] mb-8 font-serif">
            Dan Watkins — CEO
          </h2>
          <div className="body-text text-black space-y-6">
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
        >
          <h2 className="text-[48px] md:text-[64px] font-light leading-[1.1] tracking-[-2px] mb-8 font-serif">
            Ben Letson — CTO & Founder
          </h2>
          <div className="body-text text-black space-y-6">
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
