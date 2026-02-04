"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Services() {
  const services = [
    {
      title: "Strategic Systems Design",
      accentColor: "#6b7f5c",
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
      accentColor: "#8b7355",
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
      accentColor: "#c17a5c",
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
      {/* Section marker - cairn stones */}
      <div className="flex items-center gap-3 mb-16">
        <div className="w-6 h-6 rounded-full bg-[#8b7355] opacity-60" />
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#7a8288]" style={{ fontFamily: 'Inter, sans-serif' }}>
          What We Do
        </h2>
      </div>
      
      <div className="space-y-0">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group mb-12"
          >
            {/* Organic accent shape */}
            <div 
              className="absolute -left-8 top-0 w-3 h-full opacity-40 transition-opacity group-hover:opacity-60"
              style={{
                background: `linear-gradient(180deg, ${service.accentColor} 0%, transparent 100%)`,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            />
            
            <div className="relative pl-12 py-12">
              <h2 className="text-3xl font-normal mb-4 text-[#2d3133]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {service.title}
              </h2>
              <div className="text-base leading-relaxed text-[#4a5057] max-w-2xl" style={{ fontFamily: 'Crimson Text, serif' }}>
                {service.content}
              </div>
            </div>
            
            {/* Settled sediment line */}
            <div className="ml-12 h-px bg-gradient-to-r from-[#8b7355] to-transparent opacity-10" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
