"use client";

import { motion } from "framer-motion";

export default function ResumeTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-8"
    >
      {/* Resume Preview Card */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 max-w-lg w-full text-center">
        {/* Icon */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center"
        >
          <span className="text-4xl">📄</span>
        </motion.div>

        <h4 className="font-[var(--font-headline)] text-xl md:text-2xl font-bold text-on-surface mb-3">
          My Resume
        </h4>
        <p className="text-on-surface-variant text-sm md:text-base font-light mb-8 max-w-sm mx-auto">
          A comprehensive overview of my skills, experience, education, and projects.
          Available for download or online viewing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(129,236,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold tracking-wide text-sm flex items-center justify-center gap-2"
          >
            <span>⬇</span> Download PDF
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, borderColor: "rgba(129,236,255,0.4)" }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-white/10 text-primary font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
          >
            <span>↗</span> Open in New Tab
          </motion.a>
        </div>

        {/* Last Updated */}
        <p className="mt-6 text-[10px] font-[var(--font-label)] text-on-surface-variant tracking-wider uppercase">
          Last Updated: March 2026
        </p>
      </div>
    </motion.div>
  );
}
