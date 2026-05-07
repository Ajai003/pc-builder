"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function SpotlightCard({ children, className = "", glowColor = "rgba(0, 229, 255, 0.15)" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the glow movement
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  // 3D Tilt effect
  const rotateX = useTransform(smoothY, [-200, 200], [10, -10]);
  const rotateY = useTransform(smoothX, [-200, 200], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: "1000px",
      }}
      className={`relative group bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] overflow-hidden transition-colors duration-500 hover:border-white/10 ${className}`}
    >
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* Dynamic Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${smoothX.get() + (cardRef.current?.clientWidth || 0) / 2}px ${smoothY.get() + (cardRef.current?.clientHeight || 0) / 2}px, ${glowColor}, transparent 40%)`,
        }}
      />

      {/* Decorative Corner Markers */}
      <div className="absolute top-6 left-6 w-2 h-2 border-t border-l border-white/20 rounded-tl-sm transition-all group-hover:border-tech-cyan group-hover:scale-110"></div>
      <div className="absolute bottom-6 right-6 w-2 h-2 border-b border-r border-white/20 rounded-br-sm transition-all group-hover:border-tech-magenta group-hover:scale-110"></div>

      <div className="relative z-10 p-10 h-full flex flex-col">
        {children}
      </div>

      {/* Bottom Scanning Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
    </motion.div>
  );
}
