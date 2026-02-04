"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#1a0f2e] to-black overflow-hidden">
      {/* Animated gradient blob background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30 blur-3xl animate-morph"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #6366f1 50%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, transparent 70%)',
            animation: 'morph 15s ease-in-out infinite reverse',
          }}
        />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
      
      {/* Glass content panel */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-12 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl glass-panel p-12 md:p-16"
        >
          {/* Hero text with gradient */}
          <h1 
            className="text-6xl md:text-8xl font-light leading-[1.05] tracking-tight mb-8 gradient-text"
          >
            AI infrastructure<br/>
            built to create<br/>
            durable advantage.
          </h1>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed text-glow">
            Small, senior teams. Strategic thinking. Production systems.
          </p>
          
          {/* Liquid button */}
          <motion.a
            href="mailto:ben@quicksilverlab.ai"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-10 py-4 rounded-full text-white font-medium overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
            }}
          >
            <span className="relative z-10">Get in touch</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
