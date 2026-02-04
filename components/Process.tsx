"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process">
      {/* Section label */}
      <div className="text-2xl font-black uppercase mb-12 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
        HOW WE WORK
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg leading-relaxed mb-12 max-w-3xl" style={{ fontFamily: 'Oswald, sans-serif' }}>
          We run two types of engagements, both time-boxed and senior-led.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-white p-8 border-4 border-[#1a1a1a] shadow-xl">
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-t-[#d32f2f] border-r-[30px] border-r-transparent" />
            
            {/* Number marker */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ff6f00] text-white flex items-center justify-center font-black text-2xl rounded-full" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              A
            </div>
            
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              STRATEGY ENGAGEMENTS
            </h3>
            <div className="text-lg leading-relaxed text-gray-700 space-y-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              <p>
                Fast-turn strategic work with leadership teams, typically completed in under a month. We assess where AI creates leverage in your business, map technical and organizational risks, validate that they're solvable, and deliver a concrete plan with clear ownership and next steps.
              </p>
              <p>
                No six-month discovery phases. No PowerPoints left to gather dust. You get decisive direction from people who've built these systems before.
              </p>
            </div>
          </div>
          
          <div className="relative bg-white p-8 border-4 border-[#1a1a1a] shadow-xl">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-[#ff6f00] border-l-[30px] border-l-transparent" />
            
            {/* Number marker */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#d32f2f] text-white flex items-center justify-center font-black text-2xl rounded-full" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              B
            </div>
            
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              BUILD ENGAGEMENTS
            </h3>
            <div className="text-lg leading-relaxed text-gray-700 space-y-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              <p>
                End-to-end system design and deployment. We take responsibility for architecture, implementation, production deployment, and ownership transfer.
              </p>
              <p>
                We don't sell perpetual services. We build systems, document them, transfer ownership, and teach your team how to operate and evolve what we deliver.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
