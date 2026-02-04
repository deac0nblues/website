"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5e6d3] overflow-hidden">
      {/* Halftone texture overlay */}
      <div className="absolute inset-0 halftone-pattern" />
      
      {/* Diagonal red banner */}
      <div 
        className="absolute top-32 -right-32 w-[800px] h-32 bg-[#d32f2f] transform rotate-12 shadow-2xl z-0"
        style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
      />
      
      {/* Large geometric circle */}
      <div className="absolute top-1/4 right-20 w-96 h-96 border-[24px] border-[#ff6f00] rounded-full opacity-20 z-0" />
      
      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-20 md:py-32 max-w-7xl mx-auto">
        {/* Top badge */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-16 rounded-full bg-[#d32f2f] flex items-center justify-center text-white font-black text-2xl" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            Q
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.3em] font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              QUICKSILVER LABS
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#455a64]" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Systems Engineering Division
            </div>
          </div>
        </div>
        
        {/* Main headline - huge and bold */}
        <div className="mb-12">
          <h1 
            className="text-[80px] md:text-[120px] font-black uppercase leading-[0.85] tracking-tight text-[#1a1a1a]"
            style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
          >
            AI INFRA-<br/>
            STRUCTURE
          </h1>
          
          {/* Red underline accent */}
          <div className="w-96 h-3 bg-[#d32f2f] mt-6" />
        </div>
        
        {/* Angled info block */}
        <div 
          className="relative bg-[#1a1a1a] text-white p-8 max-w-2xl transform -rotate-1 shadow-2xl mb-12"
        >
          <div className="absolute top-0 left-0 w-12 h-12 bg-[#ff6f00]" />
          <p className="text-xl font-bold uppercase tracking-wide leading-relaxed ml-16" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Built to create durable advantage.<br/>
            Small, senior teams. Strategic thinking.<br/>
            Production systems.
          </p>
        </div>
        
        {/* CTA with geometric treatment */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:ben@quicksilverlab.ai"
            className="bg-[#d32f2f] text-white px-12 py-5 font-black uppercase text-sm tracking-[0.2em] hover:bg-[#b71c1c] transition-colors shadow-xl"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            GET IN TOUCH
          </a>
          
          {/* Decorative numbers */}
          <div className="text-[120px] font-black text-[#ff6f00] opacity-20 leading-none" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            01
          </div>
        </div>
      </div>
      
      {/* Bottom grid */}
      <div className="absolute bottom-0 left-0 right-0 h-32 border-t-4 border-[#1a1a1a]">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#1a1a1a] opacity-20" />
          ))}
        </div>
      </div>
    </section>
  );
}
