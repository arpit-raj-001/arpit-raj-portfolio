"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Label */}
        <p className="font-[var(--font-label)] text-primary text-xs tracking-[0.3em] uppercase mb-4">
          About Me
        </p>

        <h2 className="font-[var(--font-headline)] text-4xl md:text-5xl font-light tracking-tight mb-8 text-on-surface">
          WHO I <span className="font-bold text-gradient-primary">AM</span>
        </h2>

        <div className="space-y-6 text-on-surface-variant text-base md:text-lg font-light leading-relaxed max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I&apos;m <span className="text-primary font-medium">Arpit Raj</span>, a full-stack developer who enjoys building things that actually work well and feel good to use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I like working across the stack — from designing clean, responsive interfaces with React and Next.js to building backend systems with Node.js and Python. For me, it&apos;s not just about making something functional, but making it intuitive and smooth for the user.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I also spend time on competitive programming, which helps me think more clearly about problems and write better, more efficient code.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Right now, I&apos;m exploring web development, data analytics, and improving my problem-solving skills. I&apos;m always open to working on interesting ideas and collaborating on projects that challenge me.
          </motion.p>
        </div>

        {/* Stats Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { value: "10+", label: "Projects", icon: "🚀" },
            { value: "500+", label: "Problems Solved", icon: "🧩" },
            { value: "5+", label: "Technologies", icon: "⚡" },
            { value: "∞", label: "Curiosity", icon: "💡" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03, borderColor: "rgba(129,236,255,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-panel p-5 md:p-6 rounded-2xl border border-white/5 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-[var(--font-headline)] font-bold text-on-surface mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-[var(--font-label)] text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
