"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Trophy, Users, Zap, Shield, Target } from "lucide-react";

export function GamingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const skew = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full py-40 overflow-hidden bg-tech-black flex flex-col items-center justify-center">
      
      {/* Background Motion Blur Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <motion.div style={{ x: x1 }} className="absolute top-1/4 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-tech-green to-transparent" />
         <motion.div style={{ x: x2 }} className="absolute top-2/4 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-tech-cyan to-transparent" />
         <motion.div style={{ x: x1 }} className="absolute top-3/4 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-tech-green to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <motion.div 
          style={{ opacity, skewY: skew }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-tech-green/10 border border-tech-green/20 rounded-none mb-8">
             <div className="w-1.5 h-1.5 rounded-full bg-tech-green animate-pulse" />
             <span className="text-[10px] font-mono text-tech-green tracking-[0.5em] uppercase">Competitive_Elite_Hardware</span>
          </div>
          <h2 className="text-7xl md:text-[11rem] font-black text-white tracking-tighter leading-none italic uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            UNLEASH THE<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-tech-green via-white to-tech-cyan text-glow">CHAMPION.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Target size={32} />} 
            title="PRECISION_AIM" 
            desc="Optimized polling rates and sub-1ms kernel-level latency for instant reaction." 
            color="tech-green"
          />
          <FeatureCard 
            icon={<Zap size={32} />} 
            title="8K_ULTRA" 
            desc="Crush your frame rate limits with advanced DLSS 4.0 and AI-frame generation." 
            color="tech-cyan"
          />
          <FeatureCard 
            icon={<Shield size={32} />} 
            title="BATTLE_READY" 
            desc="Military-grade components tested for extreme endurance during 24h marathons." 
            color="tech-green"
          />
        </div>
      </div>

      {/* Pulsing RGB Background Radial */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.1)_0%,transparent_70%)] pointer-events-none" 
      />
    </section>
  );
}

function FeatureCard({ icon, title, desc, color }: any) {
  return (
    <div className="glass-card p-12 border-b-8 group hover:-translate-y-4 transition-all duration-700 relative overflow-hidden" style={{ borderBottomColor: color === 'tech-green' ? '#39FF14' : '#00E5FF' }}>
      <div className={`mb-8 text-${color} group-hover:scale-125 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase leading-none">{title}</h3>
      <p className="text-tech-silver/40 text-sm leading-relaxed font-mono">
        {desc}
      </p>
      
      {/* Decorative Scanner Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
         <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-${color}`} />
      </div>

      <div className="mt-10 flex items-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity">
         <div className="h-px grow bg-white/20" />
         <div className={`w-3 h-3 rounded-full bg-${color}`} />
      </div>
    </div>
  )
}

