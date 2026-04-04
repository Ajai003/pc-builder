"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Gauge, Thermometer, Zap, Shield, Activity } from "lucide-react";

const hotspots = [
  {
    id: "gpu",
    title: "RTX 4090 TITAN",
    description: "Unrivaled ray-tracing performance and AI-powered frame generation.",
    top: "45%",
    left: "50%",
    color: "tech-green",
    specs: ["24GB G6X", "16384 CUDA"]
  },
  {
    id: "cooling",
    title: "LIQUID FLOW V3",
    description: "Industrial-grade cooling with modular daisy-chain RGB lighting.",
    top: "30%",
    left: "70%",
    color: "tech-cyan",
    specs: ["420mm RAD", "3x 140mm"]
  },
  {
    id: "cpu",
    title: "ROG MAXIMUS",
    description: "Overclocked to the edge. Precision power delivery for elite gaming.",
    top: "40%",
    left: "40%",
    color: "tech-green",
    specs: ["6.2GHz MAX", "24 CORES"]
  },
];

export function PerformanceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["10px", "0px", "0px", "10px"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-tech-black overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Detail Image View */}
        <motion.div
          style={{ scale, opacity, filter: `blur(${blur})` }}
          className="absolute inset-0 z-0 p-8 md:p-20"
        >
          {/* Main Focus Highlight Area */}
          <div className="relative w-full h-full border border-tech-green/10 rounded-3xl overflow-hidden glass shadow-[0_0_100px_rgba(57,255,20,0.1)]">
             <div 
              className="absolute inset-0 bg-[url('/hero-pc.png')] bg-cover bg-center transition-all duration-700"
            />
            {/* HUD Overlay Lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-20">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/5" />
                ))}
            </div>
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 vignette pointer-events-none" />
          </div>
        </motion.div>

        {/* Hotspot Labels */}
        {hotspots.map((spot, index) => (
          <HotspotLabel key={spot.id} spot={spot} index={index} scrollYProgress={scrollYProgress} />
        ))}

        {/* Section Title & Analytics HUD */}
        <div className="absolute top-20 left-20 z-20 flex flex-col gap-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-1 bg-tech-green tech-glow-green" />
             <motion.h2 
               className="text-4xl md:text-6xl font-black text-white tracking-[0.2em] uppercase"
             >
               SYSTEM<br/><span className="text-tech-green">ANALYSIS</span>
             </motion.h2>
          </div>
          
          <div className="glass p-6 border-l-4 border-tech-green space-y-4">
            <div className="flex items-center gap-4 text-tech-green font-mono text-[10px] tracking-widest">
              <Activity size={14} className="animate-pulse" />
              SCANNING_MODULES_COMPLETE: 100%
            </div>
            <div className="grid grid-cols-2 gap-4">
              <HUDStat label="CPU_LOAD" value="12%" color="tech-green" />
              <HUDStat label="GPU_HEAT" value="48°C" color="tech-green" />
            </div>
          </div>
        </div>

        {/* Floating Side Info */}
        <div className="absolute right-20 bottom-20 z-20 hidden lg:block">
           <div className="flex flex-col gap-2 items-end">
              <div className="text-[10px] font-mono text-tech-cyan/40 tracking-widest">ENCRYPTION_LAYER: HEX_0x44</div>
              <div className="text-[10px] font-mono text-tech-cyan/40 tracking-widest">VOLTAGE: 1.25V</div>
              <div className="h-24 w-px bg-linear-to-t from-tech-cyan/40 to-transparent" />
           </div>
        </div>
      </div>
    </section>
  );
}

function HUDStat({ label, value, color }: any) {
  return (
    <div className="space-y-1">
      <div className="text-[8px] font-mono text-white/30 uppercase">{label}</div>
      <div className={`text-sm font-bold text-${color}`}>{value}</div>
    </div>
  )
}

function HotspotLabel({ spot, index, scrollYProgress }: any) {
  const start = index * 0.2 + 0.2;
  const end = start + 0.2;
  
  const opacity = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start - 0.05, start], [0.8, 1]);
  const x = useTransform(scrollYProgress, [start - 0.05, start], [50, 0]);

  return (
    <motion.div
      style={{ top: spot.top, left: spot.left, opacity, scale, x }}
      className="absolute z-30 flex items-start gap-6 group"
    >
      <div className="relative">
        <div className={`w-4 h-4 rounded-full bg-${spot.color} tech-glow-${spot.color === 'tech-green' ? 'green' : 'cyan'} animate-pulse`} />
        <div className={`absolute inset-[-8px] border border-${spot.color}/30 rounded-full animate-[ping_3s_infinite]`} />
      </div>

      <div className="glass-card p-6 min-w-[280px] shadow-2xl relative overflow-hidden">
        <div className={`absolute top-0 left-0 w-1 h-full bg-${spot.color}`} />
        <h3 className="text-white font-black text-xl mb-2 tracking-tight group-hover:text-tech-green transition-colors">{spot.title}</h3>
        <p className="text-tech-silver/60 text-xs leading-relaxed mb-4">{spot.description}</p>
        
        <div className="flex gap-2">
           {spot.specs.map((s: string, i: number) => (
             <span key={i} className="text-[9px] font-mono bg-white/5 px-2 py-1 border border-white/5 text-tech-silver/40">
                {s}
             </span>
           ))}
        </div>
        
        {/* Dynamic scanning line inside card */}
        <div className="absolute top-0 right-0 p-2 opacity-5">
           <Zap size={40} />
        </div>
      </div>
    </motion.div>
  );
}

