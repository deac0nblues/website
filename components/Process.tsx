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
        className="section-label mb-12"
      >
        How We Work
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="body-text text-black mb-16">
          We run two types of engagements, both time-boxed and senior-led.
        </p>
        
        <div className="space-y-20">
          <div>
            <h3 className="text-[32px] md:text-[40px] font-light leading-[1.2] tracking-[-1px] mb-8 font-serif">
              Strategy Engagements
            </h3>
            <div className="body-text text-black space-y-6">
              <p>
                Fast-turn strategic work with leadership teams, typically completed in under a month. We assess where AI creates leverage in your business, map technical and organizational risks, validate that they're solvable, and deliver a concrete plan with clear ownership and next steps.
              </p>
              <p>
                No six-month discovery phases. No PowerPoints left to gather dust. You get decisive direction from people who've built these systems before.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-[32px] md:text-[40px] font-light leading-[1.2] tracking-[-1px] mb-8 font-serif">
              Build Engagements
            </h3>
            <div className="body-text text-black space-y-6">
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
