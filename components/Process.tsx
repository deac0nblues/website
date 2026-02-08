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
          Two engagement types. Both time-boxed. Both senior-led.
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
                  Strategic sprints with leadership teams—weeks, not months. We find where AI moves the needle. Identify what could go wrong. Prove it&apos;s solvable.
                </p>
                <p>
                  No six-month studies. No slide decks gathering dust. Clear direction from people who&apos;ve done the work.
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
                  Strategic sprints<br/>
                  with leadership teams
                </div>
                <div className="pt-4 border-t border-[#00ff96]/20">
                  Clear direction from<br/>
                  people who&apos;ve done the work
                </div>
              </div>
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
                  End-to-end delivery—design, build, launch, and handoff. We own it until you do.
                </p>
                <p>
                  No retainers—just build, document, transfer, and train your team to take it from there.
                </p>
              </div>
            </div>
            
            {/* Side annotations */}
            <div className="lg:col-span-1">
              <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed border-l-2 border-[#00ff96] pl-4 space-y-4">
                <div>
                  <div className="text-[36px] sm:text-[48px] font-light text-[#00ff96]">0</div>
                  <div className="text-[10px] uppercase tracking-wider mt-2">Retainers</div>
                </div>
                <div className="pt-4 border-t border-[#00ff96]/20">
                  End-to-end delivery:<br/>
                  design → handoff
                </div>
                <div className="pt-4 border-t border-[#00ff96]/20">
                  Build, document, transfer,<br/>
                  and train your team
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
