"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Brain, CheckCircle2, ChevronRight, Cpu, Zap, Activity, Scan } from "lucide-react";

export function RecommendationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] w-full py-40 flex flex-col items-center justify-center bg-tech-black overflow-hidden">
      
      {/* Background Neural Network Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.15)_0%,transparent_70%)]" />
         <div className="w-full h-full scanner-lines" />
         
         {/* Floating Code Snippets */}
         <div className="absolute top-1/4 left-10 text-[8px] font-mono text-tech-green/30 rotate-90 uppercase tracking-[0.5em]">
            INIT_NEURAL_WEIGHTS_0x88FAB
         </div>
         <div className="absolute bottom-1/4 right-10 text-[8px] font-mono text-tech-cyan/30 -rotate-90 uppercase tracking-[0.5em]">
            OPTIMIZING_THERMAL_LOAD_V4
         </div>
      </div>

      <motion.div 
        style={{ opacity, y, scale }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: AI Narrative */}
          <div className="space-y-12">
             <div className="inline-flex items-center gap-4 px-6 py-2 bg-tech-green/5 border border-tech-green/20 rounded-none relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-tech-green" />
                <Brain size={18} className="text-tech-green animate-pulse" />
                <span className="text-[10px] font-mono text-tech-green tracking-[0.6em] uppercase font-black">Forge_Neural_Engine_v9</span>
             </div>
             
             <div className="space-y-6">
                <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-none uppercase italic">
                  SMART<br/><span className="text-transparent bg-clip-text bg-linear-to-r from-tech-green via-white to-tech-cyan text-glow">RECO.</span>
                </h2>
                
                <p className="text-tech-silver/40 text-xl md:text-2xl font-light leading-relaxed max-w-lg italic">
                  "Our silicon-driven architect meticulously scans your performance DNA to recommend a machine that doesn't just play—it dominates."
                </p>
             </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <FeatureCheck text="REAL-TIME_THERMAL_SIM" />
                 <FeatureCheck text="FPS_PREDICTION_ENGINE" />
                 <FeatureCheck text="BOTTLENECK_SOLVER" />
                 <FeatureCheck text="COMPONENT_SYNC_0x1" />
              </div>
          </div>

          {/* Right: Recommendation Interface */}
          <div className="relative group">
             {/* Dynamic Glow Aura */}
             <motion.div 
               animate={{ 
                 opacity: [0.1, 0.2, 0.1],
                 scale: [1, 1.1, 1] 
               }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -inset-20 bg-tech-green/10 blur-[120px] rounded-full pointer-events-none" 
             />
             
             <div className="glass-card p-12 md:p-16 relative overflow-hidden backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                {/* HUD Corner Accents */}
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Scan size={80} className="text-tech-green" />
                </div>
                
                <div className="flex items-center gap-8 mb-16 relative">
                   <div className="w-24 h-24 rounded-3xl bg-tech-black border border-tech-green/20 flex items-center justify-center shadow-inner relative group-hover:border-tech-green/60 transition-colors">
                      <Cpu size={48} className="text-tech-green drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
                      <div className="absolute inset-0 bg-tech-green/5 animate-pulse" />
                   </div>
                   <div>
                      <div className="text-[10px] font-mono text-tech-green/40 tracking-[0.5em] uppercase mb-2 font-black">Active_Profile</div>
                      <div className="text-4xl font-black text-white tracking-tighter uppercase leading-none italic group-hover:text-tech-green transition-colors">APEX_TITAN_PRO</div>
                   </div>
                </div>

                <div className="space-y-8 mb-16">
                   <div className="space-y-2">
                       <div className="flex justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                          <span>CALCULATING_PEAK_OUTPUT</span>
                          <span className="text-tech-green">98.4%</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "98.4%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-tech-green tech-glow-green" 
                          />
                       </div>
                   </div>

                   <div className="grid grid-cols-2 gap-10">
                      <div className="space-y-1">
                         <span className="text-[9px] font-mono text-tech-silver/20 uppercase tracking-widest">Est_FPS_4K</span>
                         <div className="text-3xl font-black text-white">214.5 <span className="text-xs text-tech-green">AVG</span></div>
                      </div>
                      <div className="space-y-1">
                         <span className="text-[9px] font-mono text-tech-silver/20 uppercase tracking-widest">Reliability</span>
                         <div className="text-3xl font-black text-tech-cyan text-glow">S_CLASS</div>
                      </div>
                   </div>
                </div>

                <div className="relative">
                   <motion.button 
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-6 bg-tech-green text-tech-black font-black text-xl flex items-center justify-center gap-6 tech-glow-green group/btn transition-all"
                   >
                      INITIALIZE_RECO_DATA <ChevronRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                   </motion.button>
                   
                   {/* Decorative button scan effect */}
                   <div className="absolute -bottom-4 right-0 text-[8px] font-mono text-white/10 tracking-widest">ENCRYPTED_LINK_ESTABLISHED</div>
                </div>
             </div>

             {/* External Decorative HUD */}
             <div className="absolute -top-12 -left-12 flex flex-col gap-4 opacity-20">
                <div className="flex items-center gap-2">
                   <Activity size={16} className="text-tech-cyan" />
                   <div className="text-[10px] font-mono text-tech-cyan tracking-widest uppercase">NODE_STATUS: SYNC</div>
                </div>
                <div className="h-px w-40 bg-linear-to-r from-tech-cyan to-transparent" />
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FeatureCheck({ text }: { text: string }) {
   return (
      <div className="flex items-center gap-5 group hover:translate-x-2 transition-transform duration-300">
         <div className="p-2 bg-tech-green/10 border border-tech-green/30 group-hover:bg-tech-green group-hover:text-tech-black transition-colors">
            <CheckCircle2 size={14} className="transition-colors" />
         </div>
         <span className="text-white/40 font-mono text-[11px] tracking-[0.2em] uppercase font-bold group-hover:text-white transition-colors">{text}</span>
      </div>
   )
}

