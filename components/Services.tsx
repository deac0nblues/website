"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import AnimatedHeading from "./AnimatedHeading";
import MouseReactive from "./MouseReactive";

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
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Floating geometric shapes */}
      <MouseReactive className="absolute top-20 right-20 w-20 h-20 hidden xl:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-black/5 rotate-45"
          animate={{ rotate: [45, 50, 45] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      <MouseReactive className="absolute bottom-20 left-20 w-16 h-16 hidden lg:block" intensity={6}>
        <motion.div 
          className="w-full h-full border border-black/5 -rotate-45"
          animate={{ rotate: [-45, -50, -45] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      
      {/* Additional geometric elements */}
      <MouseReactive className="absolute top-1/3 left-32 w-12 h-12 hidden xl:block" intensity={5}>
        <motion.div 
          className="w-full h-full border border-black/6 rotate-12"
          animate={{ rotate: [12, 18, 12] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      <MouseReactive className="absolute bottom-1/3 right-32 w-10 h-10 hidden xl:block" intensity={5}>
        <motion.div 
          className="w-full h-full border border-black/6 -rotate-12"
          animate={{ rotate: [-12, -18, -12] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </MouseReactive>
      
      {/* Corner squares */}
      <div className="absolute top-12 left-12 w-8 h-8 border border-black/8 hidden xl:block"></div>
      <div className="absolute bottom-12 right-12 w-8 h-8 border border-black/8 hidden xl:block"></div>
      
      {/* Diagonal lines */}
      <div className="absolute top-1/4 right-0 w-32 h-px bg-black/6 rotate-45 origin-right hidden xl:block"></div>
      <div className="absolute bottom-1/4 left-0 w-32 h-px bg-black/6 -rotate-45 origin-left hidden xl:block"></div>
      
      {/* Vertical accent lines */}
      <div className="absolute left-24 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/6 to-transparent hidden xl:block"></div>
      <div className="absolute right-24 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-black/6 to-transparent hidden xl:block"></div>
      
      <div className="space-y-16 md:space-y-24 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="max-w-3xl relative"
          >
            {/* Code-like prefix */}
            <div className="code-accent mb-2 text-xs tracking-widest">
              [{String(index + 1).padStart(2, '0')}]
            </div>
            
            {/* Geometric accent line */}
            <div className="absolute left-0 top-8 bottom-0 w-px bg-gradient-to-b from-black/20 via-black/10 to-transparent hidden md:block"></div>
            
            {/* Horizontal accent line on title */}
            <div className="absolute left-0 top-12 w-16 h-px bg-black/10 hidden md:block"></div>
            
            <div className="pl-8 md:pl-12">
              <AnimatedHeading
                className="text-3xl md:text-4xl font-medium mb-6 text-[#000000] relative"
                delay={index * 0.1 + 0.2}
              >
                {service.title}
              </AnimatedHeading>
              <span className="absolute -left-12 top-0 w-8 h-px bg-black/20 hidden md:block"></span>
              <div className="text-[#2D2D2D] leading-relaxed text-lg">
                {service.content}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
