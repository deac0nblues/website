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
      <div className="text-2xl font-black uppercase mb-12 text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
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
            className="relative"
          >
            {/* Large number background */}
            <div className="absolute -left-8 -top-8 text-[180px] font-black text-[#ff6f00] opacity-10 leading-none" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              {service.number}
            </div>
            
            <div className="relative bg-white p-10 border-4 border-[#1a1a1a] shadow-xl">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#d32f2f] border-l-[40px] border-l-transparent" />
              
              <div className="flex items-start gap-8">
                {/* Number badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-[#1a1a1a] text-[#ff6f00] flex items-center justify-center font-black text-3xl" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                  {service.number}
                </div>
                
                <div>
                  <h2 className="text-4xl font-black uppercase mb-4 tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                    {service.title}
                  </h2>
                  <div className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {service.content}
                  </div>
                </div>
              </div>
              
              {/* Diagonal stripe accent */}
              <div 
                className="absolute bottom-0 left-0 w-full h-3 bg-[#ff6f00]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #ff6f00, #ff6f00 10px, #d32f2f 10px, #d32f2f 20px)'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
