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
        className="relative z-10 space-y-16 sm:space-y-24"
      >
        {/* Dan Watkins - CEO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative">
          <div className="lg:col-span-2">
            <div className="code-accent mb-4 text-[11px]">[CEO]</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 leading-tight tracking-tight">
              Dan Watkins — CEO
            </h3>
            <div className="body-text space-y-6 text-white">
              <p>
                PhD in Materials Science. Career spent building and scaling teams that deliver complex systems in production. He operates at the intersection of technical execution and business strategy—leading teams through high growth and operationalizing AI at enterprise scale.
              </p>
              <p>
                His focus: turning technical capability into business value that lasts. He brings VC experience and knows what scales—and what breaks when you grow too fast.
              </p>
            </div>
          </div>
          
          {/* Side margin notes */}
          <div className="lg:col-span-1">
            <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed space-y-4 border-l-2 border-[#00ff96] pl-4">
              <div>
                <div className="text-[#00ff96] mb-2">EXPERIENCE</div>
                <div>PhD Materials Science</div>
                <div>Building and scaling teams</div>
                <div>Enterprise scale</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">FOCUS</div>
                <div>Technical → Business value</div>
                <div>VC experience</div>
                <div>What scales—and what breaks</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">DOMAIN</div>
                <div>High growth</div>
                <div>Operationalizing AI</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ben Letson - CTO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative pt-8 sm:pt-12 border-t border-[#00ff96]/20">
          <div className="lg:col-span-2">
            <div className="code-accent mb-4 text-[11px]">[CTO]</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 leading-tight tracking-tight">
              Ben Letson — CTO
            </h3>
            <div className="body-text space-y-6 text-white">
              <p>
                PhD in Mathematics. Years spent designing and delivering complex AI systems in production. He came up through early-stage teams, scaled systems through hypergrowth, and went on to lead enterprise-scale delivery.
              </p>
              <p>
                His work lives at the intersection of applied math, engineering, and execution. Career obsession: why AI projects fail in the real world, and how to build systems that don&apos;t.
              </p>
            </div>
          </div>
          
          {/* Side margin notes */}
          <div className="lg:col-span-1">
            <div className="font-mono text-[10px] text-[#a0a0a0] leading-relaxed space-y-4 border-l-2 border-[#00ff96] pl-4">
              <div>
                <div className="text-[#00ff96] mb-2">BACKGROUND</div>
                <div>PhD Mathematics</div>
                <div>Production AI systems</div>
                <div>Early-stage → Enterprise</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">INTERSECTION</div>
                <div>Applied math</div>
                <div>Engineering</div>
                <div>Execution</div>
              </div>
              <div className="pt-4 border-t border-[#00ff96]/20">
                <div className="text-[#00ff96] mb-2">EXPERTISE</div>
                <div>Why AI projects fail</div>
                <div>Systems that don&apos;t</div>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </Section>
  );
}
