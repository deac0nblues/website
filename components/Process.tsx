"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process">
      {/* Section header with metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <div className="code-accent mb-4 text-[11px]">[PROCESS]</div>
        <h2 className="headline-medium mb-4">How We Work</h2>
        <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
          TWO ENGAGEMENT TYPES /// TIME-BOXED /// SENIOR-LED
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="body-text text-[#a0a0a0] mb-12 sm:mb-16 max-w-3xl">
          We run two types of engagements, both time-boxed and senior-led.
        </p>
        
        <div className="space-y-12 sm:space-y-20">
          {/* Strategy Engagements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative">
            <div className="lg:col-span-2">
              <div className="code-accent mb-4 text-[11px]">[STRATEGY]</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 leading-tight tracking-tight">
                Strategy Engagements
              </h3>
              <div className="body-text space-y-4 mb-6">
                <p>
                  Fast-turn strategic work with leadership teams, typically completed weeks. We assess where AI creates leverage in your business, map technical and organizational risks, validate that they're solvable, and deliver a concrete plan with clear ownership and next steps.
                </p>
                <p>
                  No six-month discovery phases. No PowerPoints left to gather dust. You get decisive direction from people who've built these systems before.
                </p>
              </div>
            </div>
            
            {/* Side metrics and annotations */}
            <div className="lg:col-span-1">
              <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed border-l-2 border-[#00ff96] pl-4 space-y-4">
                <div>
                  <div className="text-[36px] sm:text-[48px] font-light text-[#00ff96]">&lt;30</div>
                  <div className="text-[10px] uppercase tracking-wider mt-2">Days</div>
                </div>
                <div className="pt-4 border-t border-[#00ff96]/20">
                  Fast-turn strategic work<br/>
                  with leadership teams
                </div>
                <div className="pt-4 border-t border-[#00ff96]/20">
                  Concrete plan with<br/>
                  clear ownership
                </div>
              </div>
            </div>
            
            {/* Code snippet decoration */}
            <div className="absolute bottom-0 left-0 font-mono text-[10px] text-[#00ff96] opacity-30 hidden xl:block">
              <pre className="whitespace-pre">{`const strategy = {
  timeline: '<30 days',
  output: 'concrete plan',
  ownership: 'clear'
};`}</pre>
            </div>
          </div>
          
          {/* Build Engagements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative pt-8 sm:pt-12 border-t border-[#00ff96]/20">
            <div className="lg:col-span-2">
              <div className="code-accent mb-4 text-[11px]">[BUILD]</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 leading-tight tracking-tight">
                Build Engagements
              </h3>
              <div className="body-text space-y-4 mb-6">
                <p>
                  End-to-end system design and deployment. We take responsibility for architecture, implementation, production deployment, and ownership transfer.
                </p>
                <p>
                  We don't sell perpetual services. We build systems, document them, transfer ownership, and teach your team how to operate and evolve what we deliver.
                </p>
              </div>
            </div>
            
            {/* Side annotations */}
            <div className="lg:col-span-1">
              <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed border-l-2 border-[#00ff96] pl-4 space-y-4">
                <div>
                  <div className="text-[36px] sm:text-[48px] font-light text-[#00ff96]">0</div>
                  <div className="text-[10px] uppercase tracking-wider mt-2">Perpetual Services</div>
                </div>
                <div className="pt-4 border-t border-[#00ff96]/20">
                  End-to-end responsibility:<br/>
                  architecture → deployment
                </div>
                <div className="pt-4 border-t border-[#00ff96]/20">
                  Ownership transfer<br/>
                  + team training
                </div>
              </div>
            </div>
            
            {/* System diagram decoration */}
            <div className="absolute bottom-0 right-0 hidden xl:block">
              <svg width="120" height="80" className="opacity-30">
                <line x1="0" y1="40" x2="40" y2="40" stroke="#00ff96" strokeWidth="1" />
                <line x1="40" y1="40" x2="80" y2="0" stroke="#00ff96" strokeWidth="1" />
                <line x1="40" y1="40" x2="80" y2="80" stroke="#00ff96" strokeWidth="1" />
                <line x1="80" y1="0" x2="120" y2="40" stroke="#00ff96" strokeWidth="1" />
                <line x1="80" y1="80" x2="120" y2="40" stroke="#00ff96" strokeWidth="1" />
                <circle cx="40" cy="40" r="3" fill="#00ff96" />
                <circle cx="80" cy="0" r="3" fill="#00ff96" />
                <circle cx="80" cy="80" r="3" fill="#00ff96" />
                <circle cx="120" cy="40" r="3" fill="#00ff96" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
