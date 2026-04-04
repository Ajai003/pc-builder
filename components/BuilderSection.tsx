"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Box, Layers, MousePointer2, Plus, Cpu, Monitor, Database } from "lucide-react";

const steps = [
  {
    id: "chassis",
    name: "01. FORGE_CHASSIS",
    description: "Premium aerospace-grade aluminum frame with tempered glass panels and modular drive bays.",
    icon: <Box size={40} />,
    color: "tech-green"
  },
  {
    id: "circuits",
    name: "02. CORE_ASSEMBLY",
    description: "Multi-layer PCB integration with 24-phase power delivery and gold-plated connectors.",
    icon: <Cpu size={40} />,
    color: "tech-cyan"
  },
  {
    id: "thermal",
    name: "03. THERMAL_GRID",
    description: "High-density micro-fin radiators and custom liquid cooling loops with PWM control.",
    icon: <Layers size={40} />,
    color: "tech-green"
  },
];

export function BuilderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-tech-black overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Visual: Rotating PC Core */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
           <AssemblyVisual progress={scrollYProgress} />
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 pointer-events-none">
          
          {/* Left: Sequential Info Cards */}
          <div className="relative h-[500px]">
            {steps.map((step, index) => (
              <StepCard 
                key={step.id} 
                step={step} 
                index={index} 
                progress={scrollYProgress} 
              />
            ))}
          </div>

          {/* Right: Interaction Overlay */}
          <div className="hidden lg:flex flex-col items-end gap-12 font-mono">
             <div className="space-y-2 text-right">
                <div className="text-[10px] text-tech-green/40 tracking-[0.4em]">CONNECTIVITY_STATUS</div>
                <div className="text-sm text-white font-bold">STABLE_LINK_08</div>
             </div>
             <div className="space-y-4">
                <div className="text-[10px] text-tech-cyan/40 tracking-[0.4em]">ACTIVE_MODULES</div>
                <div className="flex gap-2">
                   {[0,1,2,3].map(i => <div key={i} className="w-2 h-8 bg-tech-cyan/20 border border-tech-cyan/40" />)}
                </div>
             </div>
          </div>
        </div>

        {/* Global Build HUD */}
        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
           <div className="flex flex-col gap-2">
              <div className="text-[10px] font-mono text-tech-green tracking-[0.5em]">BUILD_PROGRESS</div>
              <div className="flex gap-2">
                 {steps.map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-20 h-1 bg-white/5"
                      style={{ 
                        backgroundColor: useTransform(
                          scrollYProgress, 
                          [i * 0.33, (i + 1) * 0.33], 
                          ["rgba(255,255,255,0.05)", "rgba(57,255,20,1)"]
                        ),
                        boxShadow: useTransform(
                          scrollYProgress,
                          [i * 0.33, (i + 1) * 0.33],
                          ["0 0 0px rgba(57,255,20,0)", "0 0 15px rgba(57,255,20,0.5)"]
                        )
                      }}
                    />
                 ))}
              </div>
           </div>
           
           <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
              X_88 // Y_92 // Z_104
           </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index, progress }: any) {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;
  
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.1], [50, 0]);
  const blur = useTransform(progress, [start, start + 0.1, end - 0.1, end], ["12px", "0px", "0px", "12px"]);

  return (
    <motion.div
      style={{ opacity, y, filter: `blur(${blur})` }}
      className="absolute inset-0 flex flex-col justify-center pointer-events-auto"
    >
      <div className="space-y-8 glass-card p-10 border-l-8" style={{ borderLeftColor: step.color === 'tech-green' ? '#39FF14' : '#00E5FF' }}>
        <div className="text-tech-green font-mono text-xs tracking-[0.6em] mb-2">{step.name}</div>
        <h2 className="text-6xl font-black text-white leading-tight tracking-tighter">
          FORGE YOUR<br/>
          <span className={step.color === 'tech-green' ? 'text-tech-green' : 'text-tech-cyan'}>LEGACY.</span>
        </h2>
        <p className="text-tech-silver/60 text-lg max-w-sm leading-relaxed font-light">
          {step.description}
        </p>
        
        <div className="flex items-center gap-6 pt-4">
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold hover:bg-tech-green hover:text-tech-black transition-all group flex items-center gap-3">
            <Plus size={18} className="group-hover:rotate-90 transition-transform" />
            PART_INIT
          </button>
          <div className="flex -space-x-2">
             {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-tech-black bg-tech-gray" />)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AssemblyVisual({ progress }: any) {
  const rotateY = useTransform(progress, [0, 1], [0, 180]);
  const z = useTransform(progress, [0, 1], [0, 50]);
  const opacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      style={{ rotateY, translateZ: z, opacity }}
      className="relative w-full h-[800px] flex items-center justify-center pointer-events-none"
    >
      {/* Background Hero PC Frame */}
      <motion.div
        className="absolute w-[600px] h-[700px] rounded-[4rem] border border-white/5 overflow-hidden"
        style={{ 
          scale: useTransform(progress, [0, 1], [0.9, 1.1]),
          boxShadow: "0 0 100px rgba(0,0,0,0.5)"
        }}
      >
        <img 
          src="/hero-pc.png" 
          alt="PC Core" 
          className="w-full h-full object-cover transform scale-125 opacity-30 brightness-50 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-tech-black/90" />
      </motion.div>

      {/* Floating Interactive Layers */}
      <AssemblyLayer index={0} progress={progress} color="tech-green" icon={<Monitor size={60} />} />
      <AssemblyLayer index={1} progress={progress} color="tech-cyan" icon={<Cpu size={60} />} />
      <AssemblyLayer index={2} progress={progress} color="tech-green" icon={<Database size={60} />} />
      
      {/* Central Energy Core */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-64 h-64 bg-tech-green/20 blur-[100px] rounded-full"
      />
    </motion.div>
  );
}

function AssemblyLayer({ index, progress, color, icon }: any) {
  const start = index * 0.25;
  const y = useTransform(progress, [start, start + 0.25], [200 * (index + 1), 0]);
  const opacity = useTransform(progress, [start, start + 0.1, start + 0.4, start + 0.5], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, start + 0.25], [0.5, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className={`absolute w-96 h-96 border-2 border-${color}/20 rounded-3xl glass-card flex flex-col items-center justify-center gap-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
    >
      <div className={`text-${color} drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]`}>
        {icon}
      </div>
      <div className={`h-1 w-24 bg-${color}/20 rounded-full overflow-hidden`}>
        <motion.div 
          animate={{ x: [-100, 100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={`h-full w-12 bg-${color}`}
        />
      </div>
      
      {/* HUD Accents */}
      <div className={`absolute top-4 left-4 w-6 h-6 border-t border-l border-${color}/40`} />
      <div className={`absolute bottom-4 right-4 w-6 h-6 border-b border-r border-${color}/40`} />
    </motion.div>
  );
}

