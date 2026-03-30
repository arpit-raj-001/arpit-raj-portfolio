"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contacts = [
  {
    label: "Email (College)",
    value: "24uec011@lnmiit.ac.in",
    href: "mailto:24uec011@lnmiit.ac.in",
    icon: "📧",
  },
  {
    label: "Email (Personal)",
    value: "arpit1206477417@gmail.com",
    href: "mailto:arpit1206477417@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "+91 7909058218",
    href: "tel:+917909058218",
    icon: "📱",
  },
  {
    label: "LinkedIn",
    value: "Arpit Raj",
    href: "https://www.linkedin.com/in/arpit-raj-614240318",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "arpit-raj-001",
    href: "https://github.com/arpit-raj-001",
    icon: "🐙",
  },
  {
    label: "Instagram",
    value: "@_arpit_raj_16",
    href: "https://www.instagram.com/_arpit_raj_16",
    icon: "📸",
  },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div
              className="glass-panel-dense w-full max-w-md rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-[var(--font-headline)] text-xl font-bold text-on-surface">
                    Let&apos;s Connect
                  </h3>
                  <p className="font-[var(--font-label)] text-xs text-on-surface-variant mt-1">
                    Reach out through any channel
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-on-surface-variant hover:text-on-surface"
                >
                  ✕
                </button>
              </div>

              {/* Contact Links */}
              <div className="space-y-3 mb-8">
                {contacts.map((contact, i) => (
                  <motion.a
                    key={contact.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-xl w-8 text-center">{contact.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-[var(--font-label)] text-[10px] text-on-surface-variant uppercase tracking-wider">
                        {contact.label}
                      </div>
                      <div className="text-sm text-on-surface truncate group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    <span className="text-on-surface-variant group-hover:text-primary transition-colors text-sm">
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:arpit1206477417@gmail.com?subject=Hiring Inquiry"
                  className="flex-1 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold text-sm text-center"
                >
                  Hire Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/support"
                  className="flex-1 py-3 rounded-full border border-white/10 text-on-surface font-medium text-sm text-center hover:bg-white/5 transition-colors"
                >
                  ☕ Buy Me a Coffee
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
