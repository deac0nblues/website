"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Leadership() {
  return (
    <Section id="leadership">
      {/* Section header with metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <div className="code-accent mb-4 text-[11px]">[LEADERSHIP]</div>
        <h2 className="headline-medium mb-4">Leadership</h2>
        <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
          TECHNICAL EXECUTIVES /// PRODUCTION EXPERIENCE /// INFRASTRUCTURE FOCUS
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 space-y-24"
      >
        {/* Dan Watkins - CEO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="lg:col-span-2">
            <div className="code-accent mb-4 text-[11px]">[CEO]</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
              Dan Watkins — CEO
            </h3>
            <div className="body-text space-y-6 text-white">
              <p>
                Dan Watkins is a technical executive with deep experience building and scaling engineering organizations that deliver complex systems in production. He has spent his career at the intersection of technical execution and business strategy, leading teams through high-growth phases and operationalizing AI systems at enterprise scale.
              </p>
              <p>
                His work focuses on translating technical capability into durable business value. He has built organizations that treat AI as infrastructure—systems that must function reliably under real-world constraints, regulatory requirements, and long-term operational demands.
              </p>
            </div>
          </div>
          
          {/* Side margin notes */}
          <div className="lg:col-span-1">
            <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed space-y-4 border-l-2 border-[#00ff96] pl-4">
              <div>
                <div className="text-[#00ff96] mb-2">EXPERIENCE</div>
                <div>Technical executive</div>
                <div>Engineering orgs</div>
                <div>Enterprise scale</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">FOCUS</div>
                <div>Technical → Business</div>
                <div>AI as infrastructure</div>
                <div>Real-world constraints</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">DOMAIN</div>
                <div>High-growth phases</div>
                <div>Regulatory compliance</div>
                <div>Long-term operations</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ben Letson - CTO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative pt-12 border-t border-[#00ff96]/20">
          <div className="lg:col-span-2">
            <div className="code-accent mb-4 text-[11px]">[CTO & FOUNDER]</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
              Ben Letson — CTO & Founder
            </h3>
            <div className="body-text space-y-6 text-white">
              <p>
                Ben Letson is a technical founder with a PhD background and years of experience designing and delivering complex AI systems in production environments. He grew up in early-stage technical teams, helped scale systems through high-growth phases, and went on to operate at large-scale enterprise delivery.
              </p>
              <p>
                His work sits at the intersection of applied mathematics, engineering, and execution. He has spent his career understanding why AI systems succeed or fail in production - and building the infrastructure that makes them work.
              </p>
            </div>
          </div>
          
          {/* Side margin notes */}
          <div className="lg:col-span-1">
            <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed space-y-4 border-l-2 border-[#00ff96] pl-4">
              <div>
                <div className="text-[#00ff96] mb-2">BACKGROUND</div>
                <div>PhD</div>
                <div>Technical founder</div>
                <div>Production systems</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">INTERSECTION</div>
                <div>Applied mathematics</div>
                <div>Engineering</div>
                <div>Execution</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">EXPERTISE</div>
                <div>AI systems failure</div>
                <div>Production infrastructure</div>
                <div>Early-stage → Enterprise</div>
              </div>
            </div>
          </div>
          
          {/* Code snippet decoration */}
          <div className="absolute bottom-0 right-0 font-mono text-[10px] text-[#00ff96] opacity-30 hidden xl:block">
            <pre className="whitespace-pre">{`function buildInfrastructure() {
  const understanding = analyzeFailures();
  return createSystems(understanding);
}`}</pre>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
