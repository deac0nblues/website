"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Services() {
  const services = [
    {
      number: "01",
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
      number: "02",
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
      number: "03",
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
      <div className="text-[11px] font-bold uppercase tracking-[2px] mb-12">
        WHAT WE DO
      </div>
      
      <div className="space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-4 border-[#1a1a1a] p-12 bg-white"
          >
            <div className="flex items-start gap-6 mb-6">
              <span className="text-[64px] font-black text-[#ff6b35] leading-none">{service.number}</span>
              <h2 className="text-[40px] font-black uppercase tracking-[-2px] mt-2">
                {service.title}
              </h2>
            </div>
            <div className="text-base font-medium leading-relaxed pl-[88px]">
              {service.content}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
