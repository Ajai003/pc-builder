"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import StarBorder from "@/components/ui/StarBorder";

const Antigravity = dynamic(() => import("@/components/Antigravity"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-tech-black" />
  ),
});

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-tech-black selection:bg-tech-cyan/30">
      
      {/* === Antigravity Particle Background === */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Antigravity
          count={400}
          magnetRadius={8}
          ringRadius={8}
          waveSpeed={0.3}
          waveAmplitude={1.2}
          particleSize={1.8}
          lerpSpeed={0.04}
          color={"#00E5FF"}
          autoAnimate={true}
          particleVariance={0.8}
          rotationSpeed={0.15}
          depthFactor={1.2}
          pulseSpeed={2}
          particleShape={"capsule"}
          fieldStrength={8}
        />
      </div>

      {/* Gradient overlays to blend particles with content */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-linear-to-r from-tech-black/80 via-tech-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-1 pointer-events-none bg-linear-to-t from-tech-black to-transparent" />

      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-tech-cyan/10 blur-[120px] rounded-full pointer-events-none z-1" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-tech-magenta/5 blur-[150px] rounded-full pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <span className="flex h-2 w-2 rounded-full bg-tech-cyan animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-tech-silver/60 uppercase">Edition_2026_Available</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
            Build Your<br/>
            <span className="text-glow text-tech-cyan">Dream PC.</span>
          </h1>

          <p className="text-lg md:text-xl text-tech-silver/40 font-medium max-w-lg leading-relaxed italic">
            &quot;Experience peak performance with our custom-built gaming rigs and premium peripherals. Precision engineered for professionals.&quot;
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Link href="/build-pc" className="w-full sm:w-auto">
              <StarBorder
                as="div"
                color="#00E5FF"
                speed="4s"
                thickness={2}
                className="w-full cursor-pointer"
              >
                <span className="flex items-center justify-center gap-3 bg-tech-cyan text-tech-black px-12 py-6 text-xl font-black rounded-[16px] group hover:bg-white apple-transition">
                  Start Building
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </StarBorder>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <StarBorder
                as="div"
                color="#FF00FF"
                speed="6s"
                thickness={2}
                className="w-full cursor-pointer"
              >
                <span className="flex items-center justify-center px-12 py-6 text-xl font-bold text-white rounded-[16px] hover:bg-white/5 apple-transition">
                  Arsenal
                </span>
              </StarBorder>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-white/5 opacity-50">
            <div className="flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-widest">
              <Globe size={16} className="text-tech-cyan" /> Shipping globally
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-widest">
              <ShieldCheck size={16} className="text-tech-magenta" /> 5yr warranty
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-tech-cyan/20 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
          <img 
            src="/pc.png" 
            alt="TechForge Flagship PC" 
            className="w-full h-auto relative z-10 drop-shadow-[0_0_50px_rgba(0,229,255,0.2)]"
          />
        </motion.div>
      </div>

      {/* Hero Badge Detail */}
      <div className="absolute right-6 bottom-12 hidden xl:flex flex-col items-end gap-2 text-right opacity-20 z-10">
        <div className="text-[10px] font-black tracking-[0.5em] text-white uppercase italic">Forged_in_Performance</div>
        <div className="text-[10px] font-black tracking-[0.5em] text-tech-cyan uppercase italic">Node_Alpha_77</div>
      </div>
    </section>
  );
}
