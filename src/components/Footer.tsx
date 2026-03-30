"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/arpit-raj-001" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arpit-raj-614240318" },
  { label: "Instagram", href: "https://www.instagram.com/_arpit_raj_16" },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/5 bg-[#050810]">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="font-[var(--font-headline)] text-5xl md:text-7xl font-extralight tracking-tighter leading-none mb-6 text-on-surface">
              LET&apos;S{" "}
              <span className="font-bold text-gradient-primary italic">CONNECT</span>
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-10 max-w-md">
              Ready to bring your ideas to life? I&apos;m always open for collaboration, freelance work,
              or just a good conversation about tech.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="mailto:arpit1206477417@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-lg">✉️</span>
                </div>
                <div>
                  <div className="font-[var(--font-label)] text-[10px] uppercase text-on-surface-variant tracking-wider">
                    Email
                  </div>
                  <div className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
                    arpit1206477417@gmail.com
                  </div>
                </div>
              </a>

              <a href="tel:+917909058218" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <span className="text-secondary text-lg">📱</span>
                </div>
                <div>
                  <div className="font-[var(--font-label)] text-[10px] uppercase text-on-surface-variant tracking-wider">
                    Phone
                  </div>
                  <div className="text-sm font-medium text-on-surface group-hover:text-secondary transition-colors">
                    +91 7909058218
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center">
                  <span className="text-tertiary text-lg">📍</span>
                </div>
                <div>
                  <div className="font-[var(--font-label)] text-[10px] uppercase text-on-surface-variant tracking-wider">
                    Location
                  </div>
                  <div className="text-sm font-medium text-on-surface">India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <form className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 space-y-6">
              <div className="space-y-2">
                <label className="font-[var(--font-label)] text-[10px] uppercase tracking-widest text-primary">
                  Name
                </label>
                <input
                  className="w-full bg-surface-container-low border-b border-white/10 focus:border-primary px-4 py-3 outline-none transition-all placeholder:text-[#3a3f48] rounded-lg text-sm"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-[var(--font-label)] text-[10px] uppercase tracking-widest text-secondary">
                  Email
                </label>
                <input
                  className="w-full bg-surface-container-low border-b border-white/10 focus:border-secondary px-4 py-3 outline-none transition-all placeholder:text-[#3a3f48] rounded-lg text-sm"
                  placeholder="your@email.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="font-[var(--font-label)] text-[10px] uppercase tracking-widest text-tertiary">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-b border-white/10 focus:border-tertiary px-4 py-3 outline-none transition-all placeholder:text-[#3a3f48] rounded-lg resize-none text-sm"
                  placeholder="Tell me about your project..."
                  rows={4}
                />
              </div>
              <button
                type="button"
                className="w-full py-4 rounded-full bg-white text-[#0a0e14] font-bold tracking-widest text-sm hover:bg-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(129,236,255,0.3)]"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
        <div className="font-[var(--font-label)] text-sm font-light tracking-tighter text-on-surface-variant">
          ARPIT RAJ
        </div>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-label)] text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="font-[var(--font-label)] text-[10px] text-on-surface-variant tracking-wider">
          © {new Date().getFullYear()} ARPIT RAJ. CRAFTED WITH 💙
        </div>
      </div>
    </footer>
  );
}
