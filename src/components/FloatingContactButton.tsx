"use client";

import { motion } from "framer-motion";

interface FloatingContactButtonProps {
  onClick: () => void;
}

export default function FloatingContactButton({ onClick }: FloatingContactButtonProps) {
  return (
    <motion.button
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(129,236,255,0.5)" }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-on-primary-fixed shadow-[0_0_20px_rgba(129,236,255,0.3)] flex items-center justify-center"
      aria-label="Open contact modal"
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="text-lg font-bold">💬</span>
    </motion.button>
  );
}
