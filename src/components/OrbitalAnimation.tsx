"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── Tech icons as SVG-like elements ─────────────── */
const techIcons = [
  { label: "React", symbol: "⚛", color: "#61DAFB", orbit: 1, speed: 25, startAngle: 0 },
  { label: "Next.js", symbol: "N", color: "#ffffff", orbit: 1, speed: 25, startAngle: 180 },
  { label: "Python", symbol: "🐍", color: "#3776AB", orbit: 2, speed: 35, startAngle: 60 },
  { label: "C++", symbol: "C++", color: "#00599C", orbit: 2, speed: 35, startAngle: 240 },
  { label: "CSS3", symbol: "{ }", color: "#264de4", orbit: 3, speed: 45, startAngle: 30 },
  { label: "SQL", symbol: "SQL", color: "#e48e00", orbit: 3, speed: 45, startAngle: 150 },
  { label: "MongoDB", symbol: "🍃", color: "#4DB33D", orbit: 3, speed: 45, startAngle: 270 },
];

const orbitRadii = [100, 160, 230]; // px for orbit rings 1, 2, 3

/* Pre-computed particle data (module scope = pure) */
const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  width: 2 + Math.random() * 3,
  height: 2 + Math.random() * 3,
  top: `${20 + Math.random() * 60}%`,
  left: `${20 + Math.random() * 60}%`,
  yOffset: -20 - Math.random() * 30,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 3,
}));

export default function OrbitalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setMouseOffset({ x: dx * 20, y: dy * 15 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[550px] aspect-square mx-auto"
      style={{
        perspective: "1000px",
        transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
        transition: "transform 0.3s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central Glowing Sphere */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.08, 1] : [1, 1.04, 1],
          boxShadow: isHovered
            ? [
                "0 0 40px rgba(129,236,255,0.4), 0 0 80px rgba(129,236,255,0.2)",
                "0 0 60px rgba(129,236,255,0.6), 0 0 120px rgba(129,236,255,0.3)",
                "0 0 40px rgba(129,236,255,0.4), 0 0 80px rgba(129,236,255,0.2)",
              ]
            : [
                "0 0 30px rgba(129,236,255,0.3), 0 0 60px rgba(129,236,255,0.1)",
                "0 0 50px rgba(129,236,255,0.5), 0 0 100px rgba(129,236,255,0.2)",
                "0 0 30px rgba(129,236,255,0.3), 0 0 60px rgba(129,236,255,0.1)",
              ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full z-20"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #b8f4ff 0%, #81ecff 30%, #00d4ec 60%, #006976 100%)",
        }}
      />

      {/* Inner glow ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(129,236,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Orbit Rings (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 500"
        style={{ transform: "rotateX(15deg)" }}
      >
        <defs>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#81ecff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00affe" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#81ecff" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {orbitRadii.map((r, i) => (
          <ellipse
            key={i}
            cx="250"
            cy="250"
            rx={r * 1.1}
            ry={r * 0.55}
            fill="none"
            stroke="url(#orbitGrad1)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? "8 12" : "4 8"}
            opacity={0.4 + i * 0.1}
          />
        ))}
      </svg>

      {/* Orbiting Tech Icons */}
      {techIcons.map((tech, idx) => (
          <div
            key={idx}
            className="absolute top-1/2 left-1/2 z-30"
            style={{
              width: 0,
              height: 0,
              animation: `orbit-${tech.orbit} ${tech.speed}s linear infinite`,
              animationDelay: `${-(tech.startAngle / 360) * tech.speed}s`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 15px rgba(129,236,255,0.8))" }}
              className="group relative -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300"
              style={{
                background: "rgba(32, 38, 47, 0.7)",
                backdropFilter: "blur(10px)",
                boxShadow: `0 0 10px ${tech.color}33`,
              }}
            >
              <span className="text-sm md:text-lg" style={{ color: tech.color }}>
                {tech.symbol}
              </span>

              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-[#1b2028] text-[10px] font-[var(--font-label)] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                {tech.label}
              </span>
            </motion.div>
          </div>
      ))}

      {/* Ambient particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
            y: [0, p.yOffset, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
