"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Services() {
  const services = [
    {
      id: "001",
      title: "Strategic Systems Design",
      content: (
        <>
          <p className="mb-4 body-text">
            We help organizations determine where AI belongs in their business - and what must change to make it work.
          </p>
          <p className="body-text">
            This isn't model selection or vendor evaluation. It's strategic systems thinking: understanding how AI reshapes workflows, incentives, data ownership, and competitive position. We work with leadership teams to map the territory, identify leverage points, and define what success actually requires.
          </p>
        </>
      ),
      annotation: "Strategic systems thinking: understanding how AI reshapes workflows, incentives, data ownership, and competitive position.",
      codeSnippet: `function assessAILeverage(business) {
  const leveragePoints = mapTerritory(business);
  const risks = identifyRisks(leveragePoints);
  return validateSolvable(risks);
}`
    },
    {
      id: "002",
      title: "Production Engineering",
      content: (
        <>
          <p className="mb-4 body-text">
            We field small, senior teams to design, build, and deploy AI systems on aggressive timelines.
          </p>
          <p className="body-text">
            We take end-to-end responsibility: architecture, implementation, deployment, and ownership transfer. Our engagements are time-boxed, production-focused, and designed to leave your team with systems they can operate and evolve.
          </p>
        </>
      ),
      annotation: "End-to-end responsibility: architecture, implementation, deployment, and ownership transfer.",
      codeSnippet: `const system = {
  architecture: design(),
  implementation: build(),
  deployment: deploy(),
  ownership: transfer()
};`
    },
    {
      id: "003",
      title: "Systems Innovation",
      content: (
        <>
          <p className="mb-4 body-text">
            We develop new approaches, frameworks, and tooling that advance the craft of AI systems engineering.
          </p>
          <p className="body-text">
            This work is results-driven, not academic. Unlike consulting firms that bill clients to reinvent the wheel on every project, we build reusable systems that compound over time. Our innovation work makes us faster and more reliable - which means better outcomes for clients and less inefficiency overall.
          </p>
        </>
      ),
      annotation: "Reusable systems that compound over time — not reinventing the wheel on every project.",
      codeSnippet: `class ReusableSystem {
  constructor() {
    this.compounds = true;
    this.reliability = increase();
  }
}`
    },
  ];

  return (
    <Section id="services">
      {/* Section header with metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <div className="code-accent mb-4 text-[11px]">[SERVICES]</div>
        <h2 className="headline-medium mb-4">What We Do</h2>
        <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
          THREE CORE CAPABILITIES /// PRODUCTION-FOCUSED
        </div>
      </motion.div>
      
      <div className="space-y-16 sm:space-y-24 md:space-y-32 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Left column - Numbered reference and title */}
            <div className="lg:col-span-1">
              <div className="code-accent mb-4 text-[11px]">[{service.id}]</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 leading-tight tracking-tight">
                {service.title}
              </h3>
              {/* Side annotation */}
              <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed border-l-2 border-[#00ff96] pl-4 mt-8 hidden lg:block">
                {service.annotation}
              </div>
            </div>
            
            {/* Middle column - Content */}
            <div className="lg:col-span-1">
              <div className="text-white leading-relaxed">
                {service.content}
              </div>
            </div>
            
            {/* Vertical accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff96]/50 via-[#00ff96]/20 to-transparent hidden lg:block"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
