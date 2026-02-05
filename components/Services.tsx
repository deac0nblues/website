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
            We help organizations reinvent as AI-native. That means more than adding models, it means rethinking data flows, incentives, workflows, and governance
          </p>
          <p className="body-text">
            In a market flooded with hype, relying on ad-hoc efforts is a critical mistake. As <a href="https://www.mckinsey.com.br/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00ff96] transition-colors">recent reports suggest</a>, companies with centralized AI organizations are significantly more likely to generate value than those without structure. We bring the discipline of PhD-level researchers and the pragmatism of industry veterans to build that structure for you. We ensure your strategy is founded on solid ground, turning potential into durable competitive advantage.
          </p>
        </>
      ),
      annotation: "PhD-level researchers and industry veterans building centralized AI structure.",
      codeSnippet: `function reinventAsAI(org) {
  const structure = centralize();
  const risks = mapRisks();
  return buildFoundation(structure);
}`
    },
    {
      id: "002",
      title: "Systems Innovation",
      content: (
        <>
          <p className="body-text">
            We bring new approaches, frameworks, and tooling that advance the craft of AI systems engineering. We build software that transforms existing workflows and wont be left behind as AI technology evolves. If you want a simple wrapper around an LLM, hire a bodyshop, if you want to take a step into the AI future, call us.
          </p>
        </>
      ),
      annotation: "Building software that transforms workflows and evolves with AI technology.",
      codeSnippet: `class AIFuture {
  constructor() {
    this.evolves = true;
    this.transforms = workflows();
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
          TWO CORE CAPABILITIES /// PRODUCTION-FOCUSED
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
