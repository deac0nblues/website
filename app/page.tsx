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
    <main className="min-h-screen relative bg-[#fafafa]">
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
