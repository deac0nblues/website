"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] p-16 relative">
      {/* Outer border frame */}
      <div className="absolute inset-16 border-4 border-[#e0e0e0] pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-24">
          <div className="text-[11px] font-bold uppercase tracking-[2px]">
            QUICKSILVER LABS
          </div>
          <div className="text-[11px] uppercase tracking-[2px] text-[#666666]">
            SYSTEMS / STRATEGY / ENGINEERING
          </div>
        </div>
        
        {/* Hero headline */}
        <h1 className="text-[96px] md:text-[120px] font-black leading-[0.9] tracking-[-4px] uppercase mb-12 max-w-5xl">
          AI INFRA-<br/>STRUCTURE
        </h1>
        
        {/* Dark info block */}
        <div className="bg-[#1a1a1a] text-white p-8 border-4 border-[#1a1a1a] max-w-3xl mb-12">
          <p className="text-lg font-medium leading-relaxed">
            Built to create durable advantage.<br/>
            Small, senior teams. Strategic thinking. Production systems.
          </p>
        </div>
        
        {/* CTA */}
        <a 
          href="mailto:ben@quicksilverlab.ai"
          className="inline-block px-16 py-6 bg-[#ff6b35] text-white text-xs uppercase tracking-[2px] font-bold border-4 border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors"
        >
          GET IN TOUCH
        </a>
        
        {/* Decorative grid element */}
        <div className="absolute bottom-16 right-16 w-48 h-48 border-4 border-[#e0e0e0] grid grid-cols-4 gap-[2px] bg-[#e0e0e0]">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="bg-[#f5f5f5]" />
          ))}
        </div>
      </div>
    </section>
  );
}
