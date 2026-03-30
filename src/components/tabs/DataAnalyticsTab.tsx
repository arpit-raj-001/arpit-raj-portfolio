"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
}

function SkillBar({ name, percentage, color, delay }: SkillBarProps) {
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-[var(--font-label)] text-sm text-on-surface">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="font-[var(--font-label)] text-xs text-on-surface-variant"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="relative w-full h-2 bg-surface-container rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: hovered ? `0 0 15px ${color}66` : "none",
            transition: "box-shadow 0.3s ease",
          }}
        />
      </div>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-[10px] font-[var(--font-label)] text-on-surface-variant"
        >
          Proficiency: {percentage}/100
        </motion.div>
      )}
    </div>
  );
}

export default function DataAnalyticsTab() {
  const analyticsSkills = [
    { name: "Python", percentage: 80, color: "#3776AB" },
    { name: "Pandas", percentage: 65, color: "#150458" },
    { name: "NumPy", percentage: 70, color: "#013243" },
    { name: "Matplotlib", percentage: 60, color: "#11557C" },
    { name: "SQL", percentage: 75, color: "#e48e00" },
  ];

  const vizSkills = [
    { name: "Tableau", percentage: 55, color: "#E97627" },
    { name: "Power BI", percentage: 50, color: "#F2C811" },
    { name: "Excel Advanced", percentage: 72, color: "#217346" },
    { name: "Data Cleaning", percentage: 78, color: "#81ecff" },
    { name: "Statistical Analysis", percentage: 65, color: "#00affe" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Analytics Core */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5"
      >
        <h4 className="font-[var(--font-headline)] text-lg font-bold mb-6 text-primary">
          Core Analytics
        </h4>
        <div className="space-y-5">
          {analyticsSkills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.15} />
          ))}
        </div>
      </motion.div>

      {/* Visualization & Tools */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5"
      >
        <h4 className="font-[var(--font-headline)] text-lg font-bold mb-6 text-secondary">
          Visualization & Tools
        </h4>
        <div className="space-y-5">
          {vizSkills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.15 + 0.2} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
