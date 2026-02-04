"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";
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
    <main className="min-h-screen relative" style={{ backgroundColor: 'transparent' }}>
      {/* DynamicGrid disabled - code preserved below */}
      {/* <DynamicGrid /> */}
      <NavigationBar />
      
      <section id="hero">
        <Hero />
      </section>
      
      {/* Positioning Section */}
      <section id="position" className="py-24 px-6 relative">
        {/* Abstract geometric elements */}
        <MouseReactive className="absolute top-0 right-10 w-64 h-64 hidden lg:block" intensity={4}>
          <motion.div 
            className="w-full h-full border border-black/5 rotate-45"
            animate={{ rotate: [45, 50, 45] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        <MouseReactive className="absolute bottom-0 left-10 w-48 h-48 hidden md:block" intensity={4}>
          <motion.div 
            className="w-full h-full border border-black/5"
            animate={{ rotate: [-45, -50, -45] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Vertical divider lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/5 to-transparent hidden xl:block"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/5 to-transparent hidden xl:block"></div>
        
        {/* Corner brackets */}
        <div className="absolute top-6 left-6 code-accent text-black/10 text-2xl hidden lg:block">[</div>
        <div className="absolute top-6 right-6 code-accent text-black/10 text-2xl hidden lg:block">]</div>
        
        {/* Additional geometric elements */}
        <MouseReactive className="absolute top-1/3 left-20 w-20 h-20 hidden xl:block" intensity={5}>
          <motion.div 
            className="w-full h-full border border-black/6 rotate-45"
            animate={{ rotate: [45, 50, 45] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        <MouseReactive className="absolute bottom-1/3 right-20 w-16 h-16 hidden lg:block" intensity={5}>
          <motion.div 
            className="w-full h-full border border-black/6 -rotate-45"
            animate={{ rotate: [-45, -50, -45] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </MouseReactive>
        
        {/* Small corner elements */}
        <div className="absolute top-12 right-12 w-6 h-6 border border-black/8 hidden xl:block"></div>
        <div className="absolute bottom-12 left-12 w-6 h-6 border border-black/8 hidden xl:block"></div>
        
        {/* Horizontal accent lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/6 to-transparent hidden lg:block"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-8 text-[#000000] leading-relaxed text-xl md:text-2xl relative z-10"
        >
          <div className="code-accent mb-6 text-xs tracking-widest">
            [POSITION]
          </div>
          <p className="font-medium">
            We design and deploy advanced AI systems backed by disciplined engineering and statistical rigor.
          </p>
          <p>
            We chart where your business must go to compete in the age of AI with you—and to build the systems that get you there.
          </p>
        </motion.div>
      </section>

      <Services />
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
