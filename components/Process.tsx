"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process">
      {/* Section marker - cairn stones */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-6 h-6 rounded-full bg-[#6b7f5c] opacity-60" />
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#7a8288]" style={{ fontFamily: 'Inter, sans-serif' }}>
          How We Work
        </h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg leading-relaxed mb-12 max-w-3xl" style={{ fontFamily: 'Crimson Text, serif' }}>
          We run two types of engagements, both time-boxed and senior-led.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -4 }}
            className="relative"
          >
            {/* Organic background blur */}
            <div className="absolute inset-0 bg-[#6b7f5c] opacity-[0.03] rounded-[40% 60% 50% 50% / 50% 50% 50% 50%] blur-2xl" />
            
            <div className="relative p-10">
              {/* Circular accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-[#6b7f5c] opacity-30" />
              
              <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-tight text-[#2d3133]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Strategy Engagements
              </h3>
              <div className="text-base leading-relaxed text-[#4a5057] space-y-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                <p>
                  Fast-turn strategic work with leadership teams, typically completed in under a month. We assess where AI creates leverage in your business, map technical and organizational risks, validate that they're solvable, and deliver a concrete plan with clear ownership and next steps.
                </p>
                <p>
                  No six-month discovery phases. No PowerPoints left to gather dust. You get decisive direction from people who've built these systems before.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -4 }}
            className="relative"
          >
            {/* Organic background blur */}
            <div className="absolute inset-0 bg-[#c17a5c] opacity-[0.03] rounded-[60% 40% 50% 50% / 50% 50% 50% 50%] blur-2xl" />
            
            <div className="relative p-10">
              {/* Circular accent */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-[#c17a5c] opacity-30" />
              
              <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-tight text-[#2d3133]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Build Engagements
              </h3>
              <div className="text-base leading-relaxed text-[#4a5057] space-y-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                <p>
                  End-to-end system design and deployment. We take responsibility for architecture, implementation, production deployment, and ownership transfer.
                </p>
                <p>
                  We don't sell perpetual services. We build systems, document them, transfer ownership, and teach your team how to operate and evolve what we deliver.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
