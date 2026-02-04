"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#faf8f5] text-[#2d3133] px-6 md:px-12 py-20 relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 paper-texture" />
      
      {/* Organic background shape */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b7355 0%, transparent 70%)',
          borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          transform: 'rotate(15deg)'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto pt-20 md:pt-32">
        {/* Stone cairn marker */}
        <div className="mb-24 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#6b7f5c]" />
          <div className="w-2 h-2 rounded-full bg-[#8b7355]" />
          <div className="w-2 h-2 rounded-full bg-[#7a8288]" />
        </div>
        
        {/* Hero with circular element */}
        <div className="grid grid-cols-12 gap-8 items-end mb-16">
          <div className="col-span-12 md:col-span-8">
            <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight text-[#2d3133] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              AI infrastructure<br/>
              built to create<br/>
              durable advantage.
            </h1>
          </div>
          
          {/* Tree ring element */}
          <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end mt-8 md:mt-0">
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full border border-[#8b7355] opacity-20" />
              <div className="absolute inset-4 rounded-full border border-[#8b7355] opacity-30" />
              <div className="absolute inset-8 rounded-full border border-[#8b7355] opacity-40" />
              <div className="absolute inset-12 rounded-full border border-[#6b7f5c] opacity-60" />
            </div>
          </div>
        </div>
        
        {/* Flowing text columns */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="text-lg leading-relaxed text-[#4a5057]" style={{ fontFamily: 'Crimson Text, serif' }}>
              Small, senior teams. Strategic thinking. Production systems.
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-base leading-relaxed text-[#7a8288] mb-8" style={{ fontFamily: 'Crimson Text, serif' }}>
              We help organizations identify where AI creates competitive advantage 
              and build the systems that deliver it.
            </p>
            
            <a
              href="mailto:ben@quicksilverlab.ai"
              className="inline-block px-8 py-3 bg-[#6b7f5c] text-white rounded-full text-sm hover:bg-[#5a6e4c] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent opacity-20" />
    </section>
  );
}
