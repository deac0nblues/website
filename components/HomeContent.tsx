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
export interface CarouselArticle {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  slug: string;
}

interface HomeContentProps {
  carouselArticles: CarouselArticle[];
  featuredArticle: CarouselArticle | null;
}

export default function HomeContent({ carouselArticles, featuredArticle }: HomeContentProps) {
  return (
    <main className="min-h-screen relative bg-[#0a0e27]">
      <NavigationBar />

      <section id="hero">
        <Hero featuredArticle={featuredArticle} />
      </section>

      <section id="position" className="py-24 px-6 md:px-16 relative bg-[#0a0e27] border-t border-[#00ff96]/10">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0,255,150,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
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
            We design and deploy AI systems built to perform—grounded in rigorous engineering.
          </p>
          <p className="text-[#a0a0a0]">
            We chart where your business needs to go and build the systems that get you there at scale.
          </p>
        </motion.div>
      </section>

      <Services />
      <Arsenal />
      <Process />
      <Thinking carouselArticles={carouselArticles} />
      <About />
      <Leadership />

      <section id="contact" className="py-12"></section>

      <Footer />
    </main>
  );
}
