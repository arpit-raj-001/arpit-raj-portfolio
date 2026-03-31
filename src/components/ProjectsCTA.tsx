"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const FILTERS = ["All", "Web Dev", "Machine Learning", "Data Analytics"];
const PROJECTS_PER_PAGE = 6;

const getDomainColor = (domain: string) => {
  switch (domain) {
    case "Web Dev":
      return "text-[#81ecff] bg-[#81ecff]/10 border-[#81ecff]/30";
    case "Machine Learning":
      return "text-[#00affe] bg-[#00affe]/10 border-[#00affe]/30";
    case "Data Analytics":
      return "text-[#72eff5] bg-[#72eff5]/10 border-[#72eff5]/30";
    default:
      return "text-white bg-white/10 border-white/30";
  }
};

export default function ProjectsCTA() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 1. Featured Projects
  const featuredProjects = useMemo(() => {
    return projectsData.filter((p) => p.featured).slice(0, 3);
  }, []);

  // 2. Filtered Projects (for the slider grid)
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter((p) => p.domain === activeFilter);
  }, [activeFilter]);

  // Handle changing filter (reset page)
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const nextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1));

  // Shared Card Component for Featured & Grid
  const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => {
    const domainStyle = getDomainColor(project.domain);
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02, y: -5 }}
        onClick={() => setSelectedProject(project)}
        className={`glass-panel p-6 ${
          featured ? "md:p-8" : "md:p-6"
        } rounded-2xl border border-white/5 text-left cursor-pointer hover:border-primary/30 transition-all duration-500 flex flex-col h-full relative group shadow-lg hover:shadow-[0_0_30px_rgba(129,236,255,0.15)]`}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-2xl transition-all duration-500" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-[var(--font-label)] tracking-widest uppercase border ${domainStyle}`}
            >
              {project.domain}
            </span>
            {project.featured && featured && (
              <span className="text-secondary text-sm">⭐ FEATURED</span>
            )}
            {!featured && (
              <span
                className={`text-[10px] uppercase font-[var(--font-label)] tracking-wider px-2 py-0.5 rounded border border-white/10 ${
                  project.status === "Completed"
                    ? "text-[#4DB33D] bg-[#4DB33D]/10"
                    : "text-[#e48e00] bg-[#e48e00]/10"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>

          <h4
            className={`font-[var(--font-headline)] font-bold text-on-surface mb-2 ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {project.title}
          </h4>
          
          <p className="text-on-surface-variant text-sm font-light mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md bg-surface-container-high border border-white/5 text-[10px] font-[var(--font-label)] tracking-widest text-[#a8abb3]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#050810]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-40">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="font-[var(--font-label)] text-secondary text-xs tracking-[0.3em] uppercase mb-4">
          Portfolio Showcase
        </p>

        <h2 className="font-[var(--font-headline)] text-4xl md:text-6xl font-extralight tracking-tighter mb-16 text-on-surface">
          FEATURED{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] to-[#00affe]">
            PROJECTS
          </span>
        </h2>

        {/* 1. TOP SECTION: Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* 2. FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`relative px-6 py-2.5 rounded-full font-[var(--font-label)] text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === filter
                  ? "text-[#0a0e14] border-transparent"
                  : "text-on-surface-variant border-white/10 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* 3. PAGINATED GRID */}
        <div className="min-h-[600px] flex flex-col justify-between">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AnimatePresence mode="popLayout">
              {paginatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-6 mt-auto">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Previous page"
              >
                <span className="text-xl">←</span>
              </button>
              
              <div className="flex gap-2 font-[var(--font-label)] text-xs tracking-widest">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentPage === i + 1 ? "bg-primary w-6" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Next page"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Modal Integration */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
