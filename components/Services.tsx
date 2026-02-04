"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Services() {
  const services = [
    {
      title: "Strategic Systems Design",
      content: (
        <>
          <p className="mb-4">
            We help organizations determine where AI belongs in their business - and what must change to make it work.
          </p>
          <p>
            This isn't model selection or vendor evaluation. It's strategic systems thinking: understanding how AI reshapes workflows, incentives, data ownership, and competitive position. We work with leadership teams to map the territory, identify leverage points, and define what success actually requires.
          </p>
        </>
      ),
    },
    {
      title: "Production Engineering",
      content: (
        <>
          <p className="mb-4">
            We field small, senior teams to design, build, and deploy AI systems on aggressive timelines.
          </p>
          <p>
            We take end-to-end responsibility: architecture, implementation, deployment, and ownership transfer. Our engagements are time-boxed, production-focused, and designed to leave your team with systems they can operate and evolve.
          </p>
        </>
      ),
    },
    {
      title: "Systems Innovation",
      content: (
        <>
          <p className="mb-4">
            We develop new approaches, frameworks, and tooling that advance the craft of AI systems engineering.
          </p>
          <p>
            This work is results-driven, not academic. Unlike consulting firms that bill clients to reinvent the wheel on every project, we build reusable systems that compound over time. Our innovation work makes us faster and more reliable - which means better outcomes for clients and less inefficiency overall.
          </p>
        </>
      ),
    },
  ];

  return (
    <Section id="services">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm mb-12 text-glow"
      >
        {'>'} WHAT WE DO
      </motion.div>
      
      <div className="space-y-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="terminal-window p-8 group cursor-pointer relative"
          >
            {/* Glitch effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen opacity-10 translate-x-1" />
              <div className="absolute inset-0 bg-[#ff3366] mix-blend-screen opacity-10 -translate-x-1" />
            </div>
            
            <div className="relative z-10">
              {/* Index header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-[#ffb000] text-glow-amber">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 h-px bg-[#00ff41] opacity-30" />
                <div className="text-xs text-white">
                  FREQ {(index + 1) * 100} HZ
                </div>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl mb-4 uppercase tracking-wider text-glow">
                {service.title}
              </h2>
              
              {/* Description */}
              <div className="text-sm leading-relaxed text-white mb-4">
                {service.content}
              </div>
              
              {/* Signal strength indicator */}
              <div className="flex items-center gap-2">
                <div className="text-xs text-[#ffb000]">[SIGNAL]</div>
                <div className="flex-1 h-2 bg-[#1a1a1a] relative overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 signal-bar"
                    style={{ 
                      width: `${85 + index * 5}%`,
                    }}
                  />
                </div>
                <div className="text-xs text-glow">{85 + index * 5}%</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
