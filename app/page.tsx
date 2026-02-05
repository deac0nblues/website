"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";
import Arsenal from "@/components/Arsenal";
import Process from "@/components/Process";
import Thinking from "@/components/Thinking";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import DynamicGrid from "@/components/DynamicGrid";
import MouseReactive from "@/components/MouseReactive";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#0a0e27]">
      {/* DynamicGrid disabled - code preserved below */}
      {/* <DynamicGrid /> */}
      <NavigationBar />
      
      <section id="hero">
        <Hero />
      </section>
      
      {/* Positioning Section */}
      <section id="position" className="py-24 px-6 md:px-16 relative bg-[#0a0e27] border-t border-[#00ff96]/10">
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0,255,150,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8 text-white leading-relaxed text-xl md:text-2xl relative z-10"
        >
          <div className="font-mono text-[11px] text-[#00ff96] uppercase tracking-[2px] mb-6">
            [POSITION]
          </div>
          <p className="font-bold">
            We design and deploy advanced AI systems backed by disciplined engineering and statistical rigor.
          </p>
          <p className="text-[#a0a0a0]">
            We chart where your business must go to compete in the age of AI with you, and to build the systems that transform your company with durable, long term advantage.
          </p>
        </motion.div>
      </section>
      
      <Services />
      <Arsenal />
      <Process />
      <Thinking />
      <About />
      <Leadership />
      
      {/* Contact Section for anchor links */}
      <section id="contact" className="py-12"></section>
      
      <Footer />
    </main>
  );
}
