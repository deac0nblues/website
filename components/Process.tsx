"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm mb-12 text-glow"
      >
        {'>'} HOW WE WORK
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm leading-relaxed mb-12 max-w-3xl text-white">
          We run two types of engagements, both time-boxed and senior-led.
        </p>
        
        {/* Waveform divider */}
        <svg className="w-full h-16 mb-12" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#00ff41" 
            strokeWidth="1"
            opacity="0.3"
          />
          <path 
            d="M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#00d9ff" 
            strokeWidth="1"
            opacity="0.3"
          />
          <path 
            d="M0,50 Q150,35 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#ffb000" 
            strokeWidth="2"
            opacity="0.6"
          >
            <animate 
              attributeName="d" 
              dur="2s" 
              repeatCount="indefinite"
              values="M0,50 Q150,35 300,50 T600,50 T900,50 T1200,50;
                      M0,50 Q150,65 300,50 T600,50 T900,50 T1200,50;
                      M0,50 Q150,35 300,50 T600,50 T900,50 T1200,50"
            />
          </path>
        </svg>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="terminal-window p-8 group cursor-pointer relative"
          >
            {/* Glitch effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen opacity-10 translate-x-1" />
              <div className="absolute inset-0 bg-[#ff3366] mix-blend-screen opacity-10 -translate-x-1" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#ffb000] text-glow-amber">[A]</span>
                <h3 className="text-xl md:text-2xl font-normal tracking-wider text-glow uppercase">
                  STRATEGY ENGAGEMENTS
                </h3>
              </div>
              <div className="text-xs text-white mb-2">[ACTIVE]</div>
              <div className="text-sm text-white leading-relaxed space-y-4">
                <p>
                  Fast-turn strategic work with leadership teams, typically completed in under a month. We assess where AI creates leverage in your business, map technical and organizational risks, validate that they're solvable, and deliver a concrete plan with clear ownership and next steps.
                </p>
                <p>
                  No six-month discovery phases. No PowerPoints left to gather dust. You get decisive direction from people who've built these systems before.
                </p>
              </div>
              
              {/* Signal strength */}
              <div className="flex items-center gap-2 mt-6">
                <div className="text-xs text-[#ffb000]">[SIGNAL]</div>
                <div className="flex-1 h-2 bg-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 signal-bar" style={{ width: '92%' }} />
                </div>
                <div className="text-xs text-glow">92%</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="terminal-window p-8 group cursor-pointer relative"
          >
            {/* Glitch effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen opacity-10 translate-x-1" />
              <div className="absolute inset-0 bg-[#ff3366] mix-blend-screen opacity-10 -translate-x-1" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#ffb000] text-glow-amber">[B]</span>
                <h3 className="text-xl md:text-2xl font-normal tracking-wider text-glow uppercase">
                  BUILD ENGAGEMENTS
                </h3>
              </div>
              <div className="text-xs text-white mb-2">[PROCESSING]</div>
              <div className="text-sm text-white leading-relaxed space-y-4">
                <p>
                  End-to-end system design and deployment. We take responsibility for architecture, implementation, production deployment, and ownership transfer.
                </p>
                <p>
                  We don't sell perpetual services. We build systems, document them, transfer ownership, and teach your team how to operate and evolve what we deliver.
                </p>
              </div>
              
              {/* Signal strength */}
              <div className="flex items-center gap-2 mt-6">
                <div className="text-xs text-[#ffb000]">[SIGNAL]</div>
                <div className="flex-1 h-2 bg-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 signal-bar" style={{ width: '88%' }} />
                </div>
                <div className="text-xs text-glow">88%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
