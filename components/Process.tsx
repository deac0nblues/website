"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process">
      {/* Section label */}
      <div className="text-[11px] font-bold uppercase tracking-[2px] mb-12">
        HOW WE WORK
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-base font-medium leading-relaxed mb-12 max-w-3xl">
          We run two types of engagements, both time-boxed and senior-led.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-4 border-[#1a1a1a] p-8 bg-white">
            <h3 className="text-[32px] font-black uppercase tracking-[-1px] mb-6">
              STRATEGY ENGAGEMENTS
            </h3>
            <div className="text-base font-medium leading-relaxed space-y-4">
              <p>
                Fast-turn strategic work with leadership teams, typically completed in under a month. We assess where AI creates leverage in your business, map technical and organizational risks, validate that they're solvable, and deliver a concrete plan with clear ownership and next steps.
              </p>
              <p>
                No six-month discovery phases. No PowerPoints left to gather dust. You get decisive direction from people who've built these systems before.
              </p>
            </div>
          </div>
          
          <div className="border-4 border-[#1a1a1a] p-8 bg-white">
            <h3 className="text-[32px] font-black uppercase tracking-[-1px] mb-6">
              BUILD ENGAGEMENTS
            </h3>
            <div className="text-base font-medium leading-relaxed space-y-4">
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
