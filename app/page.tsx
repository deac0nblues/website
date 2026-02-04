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
    <main className="min-h-screen relative bg-[#0a0e27]">
      {/* DynamicGrid disabled - code preserved below */}
      {/* <DynamicGrid /> */}
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
      <section id="contact" className="py-12"></section>
      
      <Footer />
    </main>
  );
}
