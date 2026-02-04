"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Leadership() {
  return (
    <Section id="leadership">
      {/* Section label */}
      <div className="text-2xl font-black uppercase mb-12 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
        LEADERSHIP
      </div>
      
      <div className="space-y-8">
        {/* Dan Watkins - CEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-white p-12 border-4 border-[#1a1a1a] shadow-xl"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#d32f2f] border-l-[40px] border-l-transparent" />
          
          {/* Number marker */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#ff6f00] text-white flex items-center justify-center font-black text-2xl rounded-full" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            01
          </div>
          
          <div className="flex items-start gap-8">
            {/* Circular photo frame with geometric accents */}
            <div className="flex-shrink-0">
              <div 
                className="w-32 h-32 rounded-full bg-[#455a64] border-4 border-[#1a1a1a] flex items-center justify-center relative"
                style={{
                  boxShadow: '0 0 0 4px #ff6f00, 0 0 0 8px #d32f2f',
                }}
              >
                <div className="w-24 h-24 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-black text-2xl" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                  DW
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-5xl font-black uppercase tracking-tight mb-2 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                DAN WATKINS
              </h2>
              <div className="inline-block bg-[#d32f2f] text-white px-4 py-2 mb-6 font-bold uppercase text-sm tracking-[0.2em]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                CEO
              </div>
              <div className="text-lg leading-relaxed text-gray-700 space-y-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                <p>
                  Dan Watkins is a technical executive with deep experience building and scaling engineering organizations that deliver complex systems in production. He has spent his career at the intersection of technical execution and business strategy, leading teams through high-growth phases and operationalizing AI systems at enterprise scale.
                </p>
                <p>
                  His work focuses on translating technical capability into durable business value. He has built organizations that treat AI as infrastructure—systems that must function reliably under real-world constraints, regulatory requirements, and long-term operational demands.
                </p>
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
          className="relative bg-white p-12 border-4 border-[#1a1a1a] shadow-xl"
        >
          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-t-[#ff6f00] border-r-[40px] border-r-transparent" />
          
          {/* Number marker */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#d32f2f] text-white flex items-center justify-center font-black text-2xl rounded-full" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            02
          </div>
          
          <div className="flex items-start gap-8">
            {/* Circular photo frame with geometric accents */}
            <div className="flex-shrink-0">
              <div 
                className="w-32 h-32 rounded-full bg-[#455a64] border-4 border-[#1a1a1a] flex items-center justify-center relative"
                style={{
                  boxShadow: '0 0 0 4px #d32f2f, 0 0 0 8px #ff6f00',
                }}
              >
                <div className="w-24 h-24 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-black text-2xl" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                  BL
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-5xl font-black uppercase tracking-tight mb-2 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                BEN LETSON
              </h2>
              <div className="inline-block bg-[#ff6f00] text-white px-4 py-2 mb-6 font-bold uppercase text-sm tracking-[0.2em]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                CTO & FOUNDER
              </div>
              <div className="text-lg leading-relaxed text-gray-700 space-y-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                <p>
                  Ben Letson is a technical founder with a PhD background and years of experience designing and delivering complex AI systems in production environments. He grew up in early-stage technical teams, helped scale systems through high-growth phases, and went on to operate at large-scale enterprise delivery.
                </p>
                <p>
                  His work sits at the intersection of applied mathematics, engineering, and execution. He has spent his career understanding why AI systems succeed or fail in production - and building the infrastructure that makes them work.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
