"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Leadership() {
  return (
    <Section id="leadership">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg font-light mb-12 gradient-text-iridescent"
      >
        Leadership
      </motion.div>
      
      <div className="space-y-8">
        {/* Dan Watkins - CEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="glass-panel p-12 group cursor-pointer transition-all duration-500"
        >
          {/* Circular photo placeholder with iridescent border */}
          <div className="mb-8 flex items-center gap-8">
            <div 
              className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex-shrink-0"
              style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #8b5cf6, #6366f1, #ec4899)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
              }}
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-2 tracking-tight gradient-text">
                Dan Watkins
              </h2>
              <div className="text-lg font-light text-white/60 uppercase tracking-wider">
                CEO
              </div>
            </div>
          </div>
          
          <div className="text-lg text-white/70 leading-relaxed space-y-6">
            <p>
              Dan Watkins is a technical executive with deep experience building and scaling engineering organizations that deliver complex systems in production. He has spent his career at the intersection of technical execution and business strategy, leading teams through high-growth phases and operationalizing AI systems at enterprise scale.
            </p>
            <p>
              His work focuses on translating technical capability into durable business value. He has built organizations that treat AI as infrastructure—systems that must function reliably under real-world constraints, regulatory requirements, and long-term operational demands.
            </p>
          </div>
        </motion.div>
        
        {/* Ben Letson - CTO & Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="glass-panel p-12 group cursor-pointer transition-all duration-500"
        >
          {/* Circular photo placeholder with iridescent border */}
          <div className="mb-8 flex items-center gap-8">
            <div 
              className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex-shrink-0"
              style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #8b5cf6, #6366f1, #ec4899)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
              }}
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-2 tracking-tight gradient-text">
                Ben Letson
              </h2>
              <div className="text-lg font-light text-white/60 uppercase tracking-wider">
                CTO & Founder
              </div>
            </div>
          </div>
          
          <div className="text-lg text-white/70 leading-relaxed space-y-6">
            <p>
              Ben Letson is a technical founder with a PhD background and years of experience designing and delivering complex AI systems in production environments. He grew up in early-stage technical teams, helped scale systems through high-growth phases, and went on to operate at large-scale enterprise delivery.
            </p>
            <p>
              His work sits at the intersection of applied mathematics, engineering, and execution. He has spent his career understanding why AI systems succeed or fail in production - and building the infrastructure that makes them work.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
