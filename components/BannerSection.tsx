"use client";

import { motion } from "framer-motion";

export function BannerSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-tech-black border-y border-white/5">
      {/* Background with blurred pc.png */}
      <div className="absolute inset-0 opacity-20 grayscale filter blur-[120px]">
        <img 
          src="/pc.png" 
          alt="PC Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-tech-black via-tech-black/40 to-tech-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center space-y-12 max-w-5xl px-6"
      >
        <h2 className="text-6xl md:text-9xl font-black text-white tracking-widest uppercase italic leading-none drop-shadow-2xl">
          POWER.<br/>
          <span className="text-tech-cyan text-glow">PRECISION.</span><br/>
          PERFORMANCE.
        </h2>
        
        <div className="flex items-center justify-center gap-12 text-tech-silver/40 font-mono text-xs tracking-[0.5em] uppercase">
          <span>ID: FORGE_ALPHA_07</span>
          <div className="w-1 h-1 bg-tech-magenta rounded-full" />
          <span>EST: 2026.04.04</span>
          <div className="w-1 h-1 bg-tech-cyan rounded-full" />
          <span>SECURE_LINK: ACTIVE</span>
        </div>
      </motion.div>
    </section>
  );
}
