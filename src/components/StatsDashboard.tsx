"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DevTab from "./tabs/DevTab";
import DSATab from "./tabs/DSATab";
import DataAnalyticsTab from "./tabs/DataAnalyticsTab";
import ResumeTab from "./tabs/ResumeTab";

const tabs = [
  { id: "development", label: "Development", icon: "⚡" },
  { id: "dsa", label: "DSA", icon: "🧠" },
  { id: "analytics", label: "Data Analytics", icon: "📊" },
  { id: "resume", label: "Resume", icon: "📄" },
];

const tabContent: Record<string, React.ReactNode> = {
  development: <DevTab />,
  dsa: <DSATab />,
  analytics: <DataAnalyticsTab />,
  resume: <ResumeTab />,
};

export default function StatsDashboard() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <section id="stats" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <p className="font-[var(--font-label)] text-primary text-xs tracking-[0.3em] uppercase mb-4">
          Skills & Proficiency
        </p>
        <h2 className="font-[var(--font-headline)] text-4xl md:text-5xl font-light tracking-tight mb-12 text-on-surface">
          STATS <span className="font-bold text-gradient-primary">DASHBOARD</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 md:px-6 py-2.5 md:py-3 rounded-full font-[var(--font-label)] text-xs md:text-sm tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-on-primary-fixed"
                  : "text-on-surface-variant hover:text-on-surface border border-white/5 hover:border-white/10"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
