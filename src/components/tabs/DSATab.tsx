"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "LeetCode",
    icon: "🟡",
    solved: 420,
    rating: 1756,
    handle: "@arpit_raj",
    link: "https://leetcode.com/",
    color: "#FFA116",
    gradient: "from-[#FFA116]/20 to-[#FFD700]/5",
    borderHover: "hover:border-[#FFA116]/40",
  },
  {
    name: "GeeksforGeeks",
    icon: "🟢",
    solved: 280,
    rating: null,
    handle: "@arpit_raj",
    link: "https://www.geeksforgeeks.org/",
    color: "#2F8D46",
    gradient: "from-[#2F8D46]/20 to-[#4CAF50]/5",
    borderHover: "hover:border-[#2F8D46]/40",
  },
  {
    name: "Codeforces",
    icon: "🔵",
    solved: 150,
    rating: 1380,
    handle: "@arpit_raj",
    link: "https://codeforces.com/",
    color: "#1890FF",
    gradient: "from-[#1890FF]/20 to-[#42A5F5]/5",
    borderHover: "hover:border-[#1890FF]/40",
  },
  {
    name: "CodeChef",
    icon: "⭐",
    solved: 95,
    rating: 1620,
    handle: "@arpit_raj",
    link: "https://www.codechef.com/",
    color: "#5B4638",
    gradient: "from-[#A0522D]/20 to-[#CD853F]/5",
    borderHover: "hover:border-[#A0522D]/40",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function DSATab() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {platforms.map((platform) => (
        <motion.a
          key={platform.name}
          variants={item}
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className={`glass-panel p-6 md:p-8 rounded-2xl border border-white/5 ${platform.borderHover} transition-all duration-500 cursor-pointer group block`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{platform.icon}</span>
              <div>
                <h4 className="font-[var(--font-headline)] font-bold text-on-surface text-base">
                  {platform.name}
                </h4>
                <p className="font-[var(--font-label)] text-[10px] text-on-surface-variant tracking-wider">
                  {platform.handle}
                </p>
              </div>
            </div>
            <span className="text-on-surface-variant group-hover:text-primary transition-colors text-xl">
              ↗
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`rounded-xl p-3 bg-gradient-to-br ${platform.gradient}`}>
              <div className="font-[var(--font-headline)] text-2xl font-bold text-on-surface">
                {platform.solved}
                <span className="text-sm text-on-surface-variant font-normal">+</span>
              </div>
              <div className="font-[var(--font-label)] text-[10px] text-on-surface-variant uppercase tracking-wider">
                Solved
              </div>
            </div>

            {platform.rating && (
              <div className={`rounded-xl p-3 bg-gradient-to-br ${platform.gradient}`}>
                <div className="font-[var(--font-headline)] text-2xl font-bold text-on-surface">
                  {platform.rating}
                </div>
                <div className="font-[var(--font-label)] text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Rating
                </div>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-5 w-full h-1 bg-surface-container rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((platform.solved / 500) * 100, 100)}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: platform.color }}
            />
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
