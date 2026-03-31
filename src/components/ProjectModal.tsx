"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const getDomainColor = (domain: string) => {
  switch (domain) {
    case "Web Dev":
      return "text-[#81ecff] border-[#81ecff]/30 bg-[#81ecff]/10";
    case "Machine Learning":
      return "text-[#00affe] border-[#00affe]/30 bg-[#00affe]/10";
    case "Data Analytics":
      return "text-[#72eff5] border-[#72eff5]/30 bg-[#72eff5]/10";
    default:
      return "text-white border-white/30 bg-white/10";
  }
};

export default function ProjectModal({ project, isOpen, onClose }: Props) {
  if (!project) return null;

  const domainStyle = getDomainColor(project.domain);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("To be added soon...");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050810]/80 backdrop-blur-md z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 py-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel border border-white/10 rounded-3xl bg-[#0a0e14]/90 pointer-events-auto relative shadow-[0_0_50px_rgba(0,175,254,0.1)] custom-scrollbar"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-tertiary" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-on-surface hover:bg-white/10 hover:text-primary transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="mb-8 pr-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-[var(--font-label)] border rounded-full ${domainStyle}`}>
                      {project.domain}
                    </span>
                    <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-[var(--font-label)] border border-white/10 rounded-full text-on-surface-variant bg-white/5">
                      {project.difficulty}
                    </span>
                    <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-[var(--font-label)] rounded-full ${project.status === 'Completed' ? 'bg-[#4DB33D]/20 text-[#4DB33D]' : 'bg-[#e48e00]/20 text-[#e48e00]'}`}>
                      {project.status}
                    </span>
                  </div>

                  <h2 className="font-[var(--font-headline)] text-3xl md:text-4xl font-bold text-on-surface mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem Statement Box */}
                <div className="p-5 rounded-2xl bg-surface-container-low border border-primary/20 mb-8 relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 blur group-hover:opacity-20 transition duration-500" />
                  <div className="relative">
                    <h4 className="text-[10px] font-[var(--font-label)] uppercase tracking-widest text-primary mb-2">
                       Mission Objective
                    </h4>
                    <p className="text-on-surface font-medium text-sm md:text-base leading-relaxed">
                      &quot;Built to solve: {project.problem}&quot;
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="space-y-8 mb-10">
                  {/* Key Features */}
                  <div>
                    <h3 className="flex items-center gap-2 font-[var(--font-label)] uppercase tracking-widest text-secondary text-xs mb-4">
                      <span>✨</span> Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-on-surface-variant font-light items-start">
                           <span className="text-secondary/50 mt-1 shrink-0 text-xs">▹</span>
                           <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What I Learned */}
                  <div>
                    <h3 className="flex items-center gap-2 font-[var(--font-label)] uppercase tracking-widest text-tertiary text-xs mb-3">
                      <span>🧠</span> What I Learned
                    </h3>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                      {project.learned}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="flex items-center gap-2 font-[var(--font-label)] uppercase tracking-widest text-on-surface-variant text-xs mb-3">
                      <span>🛠️</span> Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-white/5 text-[11px] font-[var(--font-label)] tracking-wider text-on-surface"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <a
                    href={project.github}
                    onClick={handleLinkClick}
                    className="flex-1 py-4 rounded-full bg-white text-[#0a0e14] font-bold tracking-widest text-sm text-center hover:bg-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(129,236,255,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>&lt;/&gt;</span> VIEW SOURCECODE
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      onClick={handleLinkClick}
                      className="flex-1 py-4 rounded-full border border-white/20 text-on-surface font-bold tracking-widest text-sm text-center hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      </span> 
                      LIVE DEMO
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
