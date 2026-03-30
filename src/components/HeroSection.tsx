"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OrbitalAnimation from "./OrbitalAnimation";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Cosmic orbital visualization"
          className="w-full h-full object-cover opacity-35 mix-blend-screen"
          src="/hero.png"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 orbital-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-24">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[var(--font-label)] text-primary uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 text-xs md:text-sm"
        >
          Full Stack Developer & Interaction Designer
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[var(--font-headline)] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[0.9] mb-8 text-on-surface"
        >
          CRAFTING{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            DIGITAL
          </span>{" "}
          GRAVITY
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-on-surface-variant text-base md:text-lg font-light leading-relaxed mb-10"
        >
          Architecting high-performance ecosystems where precision engineering meets cinematic user experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#stats"
            className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold tracking-wide hover:shadow-[0_0_30px_rgba(0,175,254,0.4)] transition-all duration-300 text-sm md:text-base"
          >
            EXPLORE UNIVERSE
          </a>
          <a
            href="#projects"
            className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-white/10 backdrop-blur-md text-primary font-medium hover:bg-white/5 transition-all duration-300 text-sm md:text-base"
          >
            VIEW PROJECTS
          </a>
        </motion.div>

        {/* Orbital Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <OrbitalAnimation />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-[var(--font-label)] text-[10px] tracking-widest uppercase text-on-surface-variant">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent overflow-hidden">
          <motion.div
            className="w-full h-4 bg-primary"
            animate={{ y: [-16, 50] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
