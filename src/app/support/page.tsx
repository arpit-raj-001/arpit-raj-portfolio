"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const UPI_ID = "arpit1206477417@okicici";

const amounts = [
  { value: 20, label: "₹20" },
  { value: 50, label: "₹50" },
  { value: 100, label: "₹100" },
  { value: 0, label: "Custom" },
];

export default function BuyMeCoffeePage() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const activeAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;

  const handleAmountClick = (amount: number) => {
    if (amount === 0) {
      setIsCustom(true);
      setCustomAmount("");
    } else {
      setIsCustom(false);
      setSelectedAmount(amount);
    }
  };

  const handleInitiateTransfer = () => {
    const upiUrl = `upi://pay?pa=${UPI_ID}&pn=Arpit%20Raj&am=${activeAmount}&cu=INR&tn=${encodeURIComponent(message || "Support via Portfolio")}`;
    window.location.href = upiUrl;
  };

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = UPI_ID;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e14] text-[#f1f3fc] relative overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(129, 236, 255, 0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(0, 175, 254, 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl"
        style={{ boxShadow: "0 0 20px rgba(0,229,255,0.1)" }}
      >
        <nav className="flex justify-between items-center px-6 md:px-8 py-5 max-w-6xl mx-auto">
          <Link
            href="/"
            className="font-[var(--font-headline)] text-lg font-light tracking-[0.15em] text-[#81ecff] uppercase"
          >
            ARPIT RAJ
          </Link>
          <Link
            href="/"
            className="text-[#81ecff] border border-[#81ecff]/30 px-5 py-2 rounded-full hover:bg-[#81ecff]/10 transition-all text-xs uppercase tracking-[0.15em] font-[var(--font-label)]"
          >
            ← Back to Site
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-screen">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="font-[var(--font-label)] text-[#81ecff] tracking-[0.3em] uppercase text-xs mb-4 block">
            System Maintenance
          </span>
          <h1 className="font-[var(--font-headline)] font-light text-5xl md:text-7xl tracking-tighter leading-tight mb-6">
            FUEL THE{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] to-[#00affe]">
              VOYAGE
            </span>
          </h1>
          <p className="text-[#a8abb3] text-lg font-light leading-relaxed max-w-lg mx-auto">
            Your support helps maintain this orbital ecosystem. Every contribution
            fuels new experiments and open-source projects.
          </p>
        </motion.div>

        {/* Main Transaction Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl rounded-2xl p-8 md:p-12 shadow-2xl relative"
          style={{
            background: "rgba(15, 20, 26, 0.4)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(129, 236, 255, 0.15)",
          }}
        >
          {/* Decorative top light */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#81ecff]/50 to-transparent" />

          <div className="space-y-10">
            {/* Amount Selection */}
            <div className="space-y-4">
              <label className="font-[var(--font-label)] text-xs uppercase tracking-[0.15em] text-[#a8abb3]">
                Select Fuel Level
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {amounts.map((amt) => {
                  const isActive = amt.value === 0 ? isCustom : !isCustom && selectedAmount === amt.value;
                  return (
                    <motion.button
                      key={amt.label}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAmountClick(amt.value)}
                      className={`flex flex-col items-center justify-center py-4 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-[#81ecff] bg-[#81ecff]/10 shadow-[0_0_15px_rgba(129,236,255,0.2)]"
                          : "border-[#44484f] hover:border-[#81ecff]/50"
                      }`}
                    >
                      <span
                        className={`font-[var(--font-headline)] font-semibold transition-colors ${
                          amt.value === 0 ? "text-xs font-[var(--font-label)] uppercase" : "text-2xl"
                        } ${isActive ? "text-[#81ecff]" : "text-[#f1f3fc]"}`}
                      >
                        {amt.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Custom Amount Input */}
              <AnimatePresence>
                {isCustom && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="relative mt-2">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#81ecff] font-[var(--font-headline)] text-lg">
                        ₹
                      </span>
                      <input
                        type="number"
                        min="1"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full bg-[#0f141a]/50 border-b border-[#44484f] focus:border-[#81ecff] text-[#f1f3fc] placeholder:text-[#44484f] py-3 pl-10 pr-4 outline-none transition-all text-lg font-[var(--font-headline)] rounded-lg"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Message Input */}
            <div className="space-y-4">
              <label className="font-[var(--font-label)] text-xs uppercase tracking-[0.15em] text-[#a8abb3]">
                Transmission Note
              </label>
              <textarea
                className="w-full bg-[#0f141a]/50 border-b border-[#44484f] focus:border-[#81ecff] text-[#f1f3fc] placeholder:text-[#a8abb3]/30 resize-none transition-all py-3 px-1 outline-none rounded-lg text-sm"
                placeholder="Optional message to the pilot..."
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col items-center space-y-6 pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-[#81ecff]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white p-4 rounded-xl shadow-[0_0_30px_rgba(129,236,255,0.1)]">
                  <Image
                    src="/qr-code.png"
                    alt="Payment QR Code - Scan with any UPI app"
                    width={192}
                    height={192}
                    className="w-40 h-40 md:w-48 md:h-48"
                    priority
                  />
                </div>
              </motion.div>

              {/* UPI ID with copy */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3 text-[#a8abb3]">
                  <span className="text-[#81ecff] text-sm">🔒</span>
                  <span className="font-[var(--font-label)] text-[10px] uppercase tracking-[0.2em]">
                    Secure UPI Payment
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyUPI}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151a21] border border-[#44484f]/50 hover:border-[#81ecff]/30 transition-all group"
                >
                  <span className="font-[var(--font-label)] text-xs text-[#a8abb3] group-hover:text-[#81ecff] transition-colors">
                    {UPI_ID}
                  </span>
                  <span className="text-xs text-[#81ecff]">
                    {copied ? "✓" : "📋"}
                  </span>
                </motion.button>
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[10px] text-[#81ecff] font-[var(--font-label)]"
                    >
                      Copied to clipboard!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInitiateTransfer}
              disabled={activeAmount <= 0}
              className={`w-full py-5 rounded-full font-[var(--font-headline)] font-bold uppercase tracking-[0.15em] text-sm relative overflow-hidden group transition-all duration-300 ${
                activeAmount > 0
                  ? "bg-gradient-to-r from-[#81ecff] to-[#00affe] text-[#003855] shadow-[0_0_30px_rgba(0,175,254,0.3)]"
                  : "bg-[#44484f]/30 text-[#72757d] cursor-not-allowed"
              }`}
            >
              <span className="relative z-10">
                {activeAmount > 0 ? `Initiate Transfer — ₹${activeAmount}` : "Select an Amount"}
              </span>
              {activeAmount > 0 && (
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Supportive Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-12 hover:opacity-100 transition-all duration-700"
        >
          {[
            { icon: "🚀", label: "Propulsion Ready" },
            { icon: "💻", label: "Dev Ops Funded" },
            { icon: "🌐", label: "Global Access" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-[var(--font-label)] text-xs tracking-[0.15em] uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/5 bg-[#0a0e14]">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-6 max-w-6xl mx-auto">
          <div className="font-[var(--font-headline)] font-bold text-[#81ecff] uppercase tracking-[0.15em] text-sm">
            ARPIT RAJ
          </div>
          <div className="font-[var(--font-label)] text-[10px] tracking-[0.15em] uppercase text-[#72757d]">
            © {new Date().getFullYear()} Arpit Raj. Crafted with 💙
          </div>
          <div className="flex gap-8">
            {[
              { label: "GitHub", href: "https://github.com/arpit-raj-001" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/arpit-raj-614240318" },
              { label: "Instagram", href: "https://www.instagram.com/_arpit_raj_16" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#72757d] hover:text-[#81ecff] font-[var(--font-label)] text-xs uppercase tracking-[0.15em] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
