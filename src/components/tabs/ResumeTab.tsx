"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeTab() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsAnalyzed(true);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <AnimatePresence mode="wait">
        {!isAnalyzed ? (
          <motion.div
            key="initial-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 max-w-lg w-full text-center relative overflow-hidden"
          >
            {/* Loading Overlay */}
            <AnimatePresence>
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#0a0e14]/80 backdrop-blur-md z-50 flex flex-col items-center justify-center rounded-3xl"
                >
                   <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                     className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full mb-4"
                   />
                   <span className="text-primary font-[var(--font-label)] tracking-widest text-xs uppercase animate-pulse">
                     Analyzing Data...
                   </span>
                </motion.div>
              )}
            </AnimatePresence>

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
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(129,236,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAnalyze}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold tracking-wide text-sm flex items-center justify-center gap-2"
              >
                <span>✨</span> Analyze Resume
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-full bg-surface-container-high border border-white/10 text-on-surface font-medium tracking-wide text-sm flex items-center justify-center gap-2 hover:border-primary/50 transition-colors"
              >
                <span>⬇</span> Download
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-primary font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <span>↗</span> Open
              </motion.a>
            </div>

            {/* Last Updated */}
            <p className="mt-6 text-[10px] font-[var(--font-label)] text-on-surface-variant tracking-wider uppercase">
              Last Updated: March 2026
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="analyzed-view"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-4xl"
          >
            {/* Header / Back button */}
            <motion.div variants={itemVariants} className="flex justify-between items-center mb-8">
               <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-light text-on-surface">
                 RESUME <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ANALYSIS</span>
               </h3>
               <button 
                 onClick={() => setIsAnalyzed(false)}
                 className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-sm font-[var(--font-label)] uppercase tracking-wider"
               >
                 <span>←</span> Back
               </button>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Profile Overview */}
              <motion.div variants={itemVariants} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 col-span-1 lg:col-span-2 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <span className="text-2xl text-primary">👤</span>
                  </div>
                  <div>
                    <h4 className="font-[var(--font-label)] uppercase tracking-widest text-primary text-xs mb-3">Profile Overview</h4>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light">
                      Engineering student with experience in UI/UX design and full-stack web development, combined with exposure to data analytics and real-time systems. Strong focus on building intuitive, high-performance, and user-centric applications.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Core Tech Stack */}
              <motion.div variants={itemVariants} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="text-secondary text-xl">⚡</div>
                   <h4 className="font-[var(--font-label)] uppercase tracking-widest text-secondary text-xs">Core Tech Stack</h4>
                 </div>
                 
                 <div className="space-y-4">
                   <div>
                     <span className="text-on-surface text-sm block mb-1">Languages</span>
                     <p className="text-on-surface-variant text-sm font-light">C/C++, JavaScript, Python, SQL</p>
                   </div>
                   <div>
                     <span className="text-on-surface text-sm block mb-1">Frontend</span>
                     <p className="text-on-surface-variant text-sm font-light">React.js, Next.js, HTML/CSS, Material-UI</p>
                   </div>
                   <div>
                     <span className="text-on-surface text-sm block mb-1">Backend</span>
                     <p className="text-on-surface-variant text-sm font-light">Node.js, Express.js</p>
                   </div>
                   <div>
                     <span className="text-on-surface text-sm block mb-1">Data & Analytics</span>
                     <p className="text-on-surface-variant text-sm font-light">Pandas, NumPy, Matplotlib, Seaborn</p>
                   </div>
                   <div>
                     <span className="text-on-surface text-sm block mb-1">Tools & Other</span>
                     <p className="text-on-surface-variant text-sm font-light">Git, VS Code, OpenCV, WebSockets</p>
                   </div>
                 </div>
              </motion.div>

              {/* Key Strengths */}
              <motion.div variants={itemVariants} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="text-tertiary text-xl">🎯</div>
                   <h4 className="font-[var(--font-label)] uppercase tracking-widest text-tertiary text-xs">Key Strengths</h4>
                 </div>
                 
                 <ul className="space-y-4 mt-2">
                   {[
                     "UI/UX design with Figma and strong visual hierarchy",
                     "Building responsive and performant web applications",
                     "Real-time system development (WebSockets-based apps)",
                     "Data analysis and predictive modeling basics",
                     "Problem-solving and mentoring experience (150+ students)"
                   ].map((strength, idx) => (
                     <li key={idx} className="flex gap-4 text-sm text-on-surface-variant font-light leading-relaxed items-start">
                       <span className="text-tertiary/50 mt-1 shrink-0 text-xs">▹</span>
                       <span>{strength}</span>
                     </li>
                   ))}
                 </ul>
              </motion.div>

              {/* Experience Snapshot */}
              <motion.div variants={itemVariants} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 col-span-1 lg:col-span-2 relative overflow-hidden">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="text-primary text-xl">💼</div>
                   <h4 className="font-[var(--font-label)] uppercase tracking-widest text-primary text-xs">Experience Snapshot</h4>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-surface-container-low border border-white/5 hover:border-primary/20 transition-colors group">
                       <div className="text-[10px] text-primary font-[var(--font-label)] tracking-widest mb-3">MENTOX</div>
                       <h5 className="text-on-surface font-medium text-sm mb-2 group-hover:text-primary transition-colors">UI/UX + Web Developer</h5>
                       <p className="text-on-surface-variant text-sm font-light leading-relaxed">Designed & built production website using React + Next.js</p>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-surface-container-low border border-white/5 hover:border-secondary/20 transition-colors group">
                       <div className="text-[10px] text-secondary font-[var(--font-label)] tracking-widest mb-3">ACADEMIC</div>
                       <h5 className="text-on-surface font-medium text-sm mb-2 group-hover:text-secondary transition-colors">UG Teaching Assistant (PPS)</h5>
                       <p className="text-on-surface-variant text-sm font-light leading-relaxed">Mentored students in C programming and problem-solving</p>
                    </div>
                 </div>
              </motion.div>
              
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
               <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold tracking-wide text-sm flex items-center justify-center gap-2"
              >
                <span>⬇</span> Download Full PDF
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
