"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEB3FORMS_KEY = "6bf203b7-e287-4864-823f-36f7da185340";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/arpit-raj-001" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arpit-raj-614240318" },
  { label: "Instagram", href: "https://www.instagram.com/_arpit_raj_16" },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          message,
          from_name: "Portfolio Contact Form",
          subject: `New message from ${name} via Portfolio`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

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
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 space-y-6"
            >
              <div className="space-y-2">
                <label className="font-[var(--font-label)] text-[10px] uppercase tracking-widest text-primary">
                  Name
                </label>
                <input
                  className="w-full bg-surface-container-low border-b border-white/10 focus:border-primary px-4 py-3 outline-none transition-all placeholder:text-[#3a3f48] rounded-lg text-sm"
                  placeholder="Your Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button with status states */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-full font-bold tracking-widest text-sm transition-all duration-300 ${
                  status === "sending"
                    ? "bg-on-surface-variant text-surface cursor-wait"
                    : status === "success"
                      ? "bg-[#4DB33D] text-white"
                      : status === "error"
                        ? "bg-error text-white"
                        : "bg-white text-[#0a0e14] hover:bg-primary hover:shadow-[0_0_30px_rgba(129,236,255,0.3)]"
                }`}
              >
                {status === "sending" && "SENDING..."}
                {status === "success" && "✓ MESSAGE SENT!"}
                {status === "error" && "✕ FAILED — TRY AGAIN"}
                {status === "idle" && "SEND MESSAGE"}
              </button>

              {/* Success/Error feedback */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-xs text-[#4DB33D] font-[var(--font-label)]"
                  >
                    Thanks! Your message has been delivered to my inbox.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-xs text-error font-[var(--font-label)]"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
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
