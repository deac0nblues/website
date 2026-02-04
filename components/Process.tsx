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
        className="text-lg font-light mb-12 gradient-text-iridescent"
      >
        How We Work
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-3xl">
          We run two types of engagements, both time-boxed and senior-led.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 group cursor-pointer transition-all duration-500"
          >
            <h3 className="text-2xl md:text-3xl font-light mb-6 tracking-tight gradient-text">
              Strategy Engagements
            </h3>
            <div className="text-lg text-white/60 leading-relaxed space-y-4">
              <p>
                Fast-turn strategic work with leadership teams, typically completed in under a month. We assess where AI creates leverage in your business, map technical and organizational risks, validate that they're solvable, and deliver a concrete plan with clear ownership and next steps.
              </p>
              <p>
                No six-month discovery phases. No PowerPoints left to gather dust. You get decisive direction from people who've built these systems before.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 group cursor-pointer transition-all duration-500"
          >
            <h3 className="text-2xl md:text-3xl font-light mb-6 tracking-tight gradient-text">
              Build Engagements
            </h3>
            <div className="text-lg text-white/60 leading-relaxed space-y-4">
              <p>
                End-to-end system design and deployment. We take responsibility for architecture, implementation, production deployment, and ownership transfer.
              </p>
              <p>
                We don't sell perpetual services. We build systems, document them, transfer ownership, and teach your team how to operate and evolve what we deliver.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
