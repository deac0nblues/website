"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Leadership() {
  return (
    <Section id="leadership">
      {/* Section marker - cairn stones */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-6 h-6 rounded-full bg-[#6b7f5c] opacity-60" />
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#7a8288]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Leadership
        </h2>
      </div>
      
      <div className="space-y-16">
        {/* Dan Watkins - CEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Organic background blur */}
          <div className="absolute inset-0 bg-[#8b7355] opacity-[0.02] rounded-[50% 50% 50% 50% / 60% 60% 40% 40%] blur-3xl" />
          
          <div className="relative p-12">
            <div className="flex items-start gap-8 flex-col md:flex-row">
              {/* Circular photo frame - natural, organic */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-[#7a8288] border-2 border-[#8b7355] flex items-center justify-center relative overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(107, 125, 82, 0.15)' }}>
                  <div className="w-28 h-28 rounded-full bg-[#6b5d52] flex items-center justify-center text-white text-2xl font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                    DW
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-normal mb-2 tracking-tight text-[#2d3133]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Dan Watkins
                </h2>
                <div className="inline-block bg-[#6b7f5c] text-white px-4 py-1 mb-6 rounded-full text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  CEO
                </div>
                <div className="text-base leading-relaxed text-[#4a5057] space-y-6" style={{ fontFamily: 'Crimson Text, serif' }}>
                  <p>
                    Dan Watkins is a technical executive with deep experience building and scaling engineering organizations that deliver complex systems in production. He has spent his career at the intersection of technical execution and business strategy, leading teams through high-growth phases and operationalizing AI systems at enterprise scale.
                  </p>
                  <p>
                    His work focuses on translating technical capability into durable business value. He has built organizations that treat AI as infrastructure—systems that must function reliably under real-world constraints, regulatory requirements, and long-term operational demands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Ben Letson - CTO & Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Organic background blur */}
          <div className="absolute inset-0 bg-[#c17a5c] opacity-[0.02] rounded-[60% 40% 50% 50% / 50% 50% 50% 50%] blur-3xl" />
          
          <div className="relative p-12">
            <div className="flex items-start gap-8 flex-col md:flex-row">
              {/* Circular photo frame - natural, organic */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-[#7a8288] border-2 border-[#c17a5c] flex items-center justify-center relative overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(193, 122, 92, 0.15)' }}>
                  <div className="w-28 h-28 rounded-full bg-[#6b5d52] flex items-center justify-center text-white text-2xl font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                    BL
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-normal mb-2 tracking-tight text-[#2d3133]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ben Letson
                </h2>
                <div className="inline-block bg-[#c17a5c] text-white px-4 py-1 mb-6 rounded-full text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  CTO & Founder
                </div>
                <div className="text-base leading-relaxed text-[#4a5057] space-y-6" style={{ fontFamily: 'Crimson Text, serif' }}>
                  <p>
                    Ben Letson is a technical founder with a PhD background and years of experience designing and delivering complex AI systems in production environments. He grew up in early-stage technical teams, helped scale systems through high-growth phases, and went on to operate at large-scale enterprise delivery.
                  </p>
                  <p>
                    His work sits at the intersection of applied mathematics, engineering, and execution. He has spent his career understanding why AI systems succeed or fail in production - and building the infrastructure that makes them work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
