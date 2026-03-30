"use client";

import { motion } from "framer-motion";

export default function ProjectsCTA() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <p className="font-[var(--font-label)] text-secondary text-xs tracking-[0.3em] uppercase mb-4">
          Portfolio
        </p>

        <h2 className="font-[var(--font-headline)] text-4xl md:text-6xl font-extralight tracking-tighter mb-6 text-on-surface">
          FEATURED{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">
            MISSIONS
          </span>
        </h2>

        <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Explore a curated selection of projects showcasing my expertise in
          full-stack development, algorithmic problem solving, and data-driven solutions.
        </p>

        {/* Project Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "E-Commerce Platform",
              tech: ["React", "Node.js", "MongoDB"],
              description: "Full-stack marketplace with real-time inventory management",
              gradient: "from-primary/20 to-secondary/5",
            },
            {
              title: "Analytics Dashboard",
              tech: ["Python", "Pandas", "React"],
              description: "Data visualization suite for business intelligence",
              gradient: "from-secondary/20 to-tertiary/5",
            },
            {
              title: "Algorithm Visualizer",
              tech: ["TypeScript", "Next.js", "D3.js"],
              description: "Interactive tool for understanding sorting & graph algorithms",
              gradient: "from-tertiary/20 to-primary/5",
            },
          ].map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-panel p-6 rounded-2xl border border-white/5 text-left cursor-pointer hover:border-primary/20 transition-all duration-500`}
            >
              <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                <span className="text-3xl opacity-50">🚀</span>
              </div>
              <h4 className="font-[var(--font-headline)] font-bold text-on-surface mb-2 text-sm">
                {project.title}
              </h4>
              <p className="text-on-surface-variant text-xs font-light mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-[var(--font-label)] text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,175,254,0.3)" }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/arpit-raj-001"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-secondary to-tertiary text-on-primary-fixed font-bold tracking-wide text-sm md:text-base"
        >
          VIEW ALL PROJECTS ON GITHUB ↗
        </motion.a>
      </motion.div>
    </section>
  );
}
