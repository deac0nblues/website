"use client";

import { motion } from "framer-motion";
import Section from "./Section";

interface Tool {
  name: string;
  slug: string | null;
}

const tools: Tool[] = [
  { name: "Python", slug: "python" },
  { name: "Julia", slug: "julia" },
  { name: "C++", slug: "cplusplus" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Claude", slug: "anthropic" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "CrewAI", slug: "custom:https://www.insightpartners.com/wp-content/uploads/2025/09/crew_ai_transparent.png" },
  { name: "LangGraph", slug: "langchain" },
  { name: "Ollama", slug: "ollama" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Power BI", slug: "custom:https://images.icon-icons.com/2699/PNG/512/microsoft_powerbi_logo_icon_169958.png" },
  { name: "arXiv", slug: "arxiv" },
  { name: "Grafana", slug: "grafana" },
];

export default function Arsenal() {
  // Duplicate the tools array for seamless infinite loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <Section id="arsenal">
      {/* Section header with metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <div className="code-accent mb-4 text-[11px]">[ARSENAL]</div>
        <h2 className="headline-medium mb-4">Our Arsenal</h2>
        <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
          TOOLS & TECHNOLOGIES /// CONTINUOUSLY DEPLOYED
        </div>
      </motion.div>

      {/* Infinite scroll container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: [0, -100 * tools.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 w-32 h-32"
              >
                <div className="border border-[#00ff96]/20 p-6 bg-[#0a0e27] hover:bg-[#00ff96]/10 transition-all duration-200 h-full flex flex-col items-center justify-center gap-3 group">
                  {tool.slug ? (
                    <img 
                      src={tool.slug.startsWith('custom:') ? tool.slug.replace('custom:', '') : `https://cdn.simpleicons.org/${tool.slug}/00ff96`}
                      alt={`${tool.name} logo`}
                      className={`${tool.name === 'CrewAI' || tool.name === 'Power BI' ? 'w-20 h-20' : 'w-12 h-12'} opacity-60 group-hover:opacity-100 transition-opacity object-contain`}
                      style={{ filter: tool.slug.startsWith('custom:') ? 'brightness(0) saturate(100%) invert(82%) sepia(57%) saturate(2275%) hue-rotate(89deg) brightness(101%) contrast(101%)' : 'none' }}
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center">
                      <span className="text-xs font-mono font-semibold text-[#00ff96]/60 group-hover:text-[#00ff96] transition-colors text-center leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-[10px] text-[#a0a0a0] mt-6 font-mono uppercase tracking-wider">
          [CONTINUOUS_DEPLOYMENT]
        </p>
      </motion.div>
    </Section>
  );
}
