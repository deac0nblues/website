"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture" />
      
      {/* Binary pattern */}
      <div className="absolute inset-0 binary-pattern">
        {Array(50).fill(0).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array(200).fill(0).map((_, j) => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        {/* Terminal header */}
        <div className="terminal-window mb-12 p-6">
          <div className="flex items-center justify-between mb-4 text-xs">
            <div className="flex items-center gap-4">
              <span className="text-glow">QUICKSILVER LABS/SYSTEMS V1.0</span>
              <span className="text-[#ffb000] text-glow-amber">[ACTIVE]</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 bg-[#ff3366] rounded-full animate-pulse" />
              <span className="text-glow">SIGNAL: 98.7%</span>
            </div>
          </div>
          
          {/* Command prompt style */}
          <div className="text-sm mb-2">
            <span className="text-[#ffb000]">root@quicksilver</span>
            <span className="text-white">:</span>
            <span className="text-[#00d9ff]">~</span>
            <span className="text-white">$ </span>
            <span className="cursor-blink text-glow">█</span>
          </div>
        </div>
        
        {/* Waveform divider */}
        <svg className="w-full h-16 mb-8" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            d="M0,50 Q150,10 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#00ff41" 
            strokeWidth="2"
            opacity="0.6"
          >
            <animate 
              attributeName="d" 
              dur="3s" 
              repeatCount="indefinite"
              values="M0,50 Q150,10 300,50 T600,50 T900,50 T1200,50;
                      M0,50 Q150,90 300,50 T600,50 T900,50 T1200,50;
                      M0,50 Q150,10 300,50 T600,50 T900,50 T1200,50"
            />
          </path>
          <path 
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#00d9ff" 
            strokeWidth="1"
            opacity="0.3"
          />
          <path 
            d="M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#ffb000" 
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
        
        {/* Hero text */}
        <div className="mb-12">
          <div className="text-xs text-white mb-2">
            {'>'} INITIALIZING SYSTEM PARAMETERS...
          </div>
          <h1 className="text-4xl md:text-6xl leading-tight mb-8 tracking-wider text-glow uppercase">
            AI INFRASTRUCTURE<br/>
            BUILT TO CREATE<br/>
            DURABLE ADVANTAGE
          </h1>
          
          {/* Signal strength bars */}
          <div className="flex gap-1 mb-8">
            {[100, 95, 87, 92, 98].map((strength, i) => (
              <div key={i} className="flex flex-col gap-1 items-center">
                <div 
                  className="w-8 signal-bar" 
                  style={{ height: `${strength}px` }}
                />
                <div className="text-[8px] text-white">{strength}%</div>
              </div>
            ))}
          </div>
          
          <div className="text-sm mb-8 max-w-3xl leading-relaxed">
            <span className="text-[#ffb000]">[STATUS]</span> SMALL SENIOR TEAMS // 
            STRATEGIC THINKING // PRODUCTION SYSTEMS
          </div>
        </div>
        
        {/* Terminal button */}
        <a
          href="mailto:ben@quicksilverlab.ai"
          className="inline-block border-2 border-[#00ff41] px-8 py-3 text-sm hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-colors relative group text-glow"
        >
          <span className="relative z-10">{'>'} GET IN TOUCH</span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
               style={{
                 boxShadow: '0 0 20px #00ff41, inset 0 0 20px #00ff41'
               }}
          />
        </a>
        
        {/* Live data stream */}
        <div className="absolute bottom-20 right-6 md:right-12 w-64 border border-[#00ff41] p-4 text-[10px] bg-[#0a0a0a] terminal-window">
          <div className="text-[#ffb000] mb-2 text-glow-amber">LIVE SIGNAL ANALYSIS</div>
          <div className="space-y-1 text-white">
            <div>FREQ: 440.0 Hz</div>
            <div>AMP: 0.87 dB</div>
            <div className="text-[#00ff41] text-glow">SNR: 42.3 dB</div>
            <div>PHASE: 1.57 rad</div>
          </div>
        </div>
      </div>
    </section>
  );
}
