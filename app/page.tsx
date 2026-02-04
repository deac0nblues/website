"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Thinking from "@/components/Thinking";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-black via-[#1a0f2e] to-black">
      {/* Global floating orbs */}
      <div className="fixed top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm animate-float pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm animate-float-delayed pointer-events-none z-0" />
      <div className="fixed top-1/2 left-1/3 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm pointer-events-none z-0" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
      
      <NavigationBar />
      
      <section id="hero">
        <Hero />
      </section>

      <Services />
      <Process />
      <Thinking />
      <About />
      <Leadership />
      
      {/* Contact Section for anchor links */}
      <section id="contact" className="py-32"></section>
      
      <Footer />
    </main>
  );
}
