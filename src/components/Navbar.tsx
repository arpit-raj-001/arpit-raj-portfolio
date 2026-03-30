"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stats" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full border z-50 flex justify-between items-center px-6 md:px-8 py-3 transition-all duration-500 font-[var(--font-headline)] tracking-tight ${
          scrolled
            ? "border-white/10 bg-[#0a0e14]/80 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,229,255,0.08)]"
            : "border-white/5 bg-[#0a0e14]/40 backdrop-blur-xl"
        }`}
      >
        <a href="#" className="text-lg md:text-xl font-light tracking-[0.2em] text-primary uppercase">
          ARPIT RAJ
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--color-on-surface-variant)] hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-bold text-sm hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all duration-300 active:scale-95"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-primary"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-primary"
          />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-3xl border border-white/10 bg-[#0a0e14]/95 backdrop-blur-2xl z-50 p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-colors py-2 text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-primary-container text-on-primary-container font-bold text-center"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
