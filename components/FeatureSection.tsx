"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, ShieldCheck, Truck, Terminal, Layers, Hexagon, Binary } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const features = [
  {
    title: "Extreme Performance",
    description: "Equipped with the latest generation processors and high-speed memory for seamless gaming.",
    icon: <Zap className="text-tech-cyan" size={32} />,
    glowColor: "rgba(0, 229, 255, 0.1)",
    tag: "CPU_STABLE",
    stat: "5.4GHz+"
  },
  {
    title: "Premium Components",
    description: "We only use gold-standard hardware from trusted manufacturers like ASUS, NVIDIA, and AMD.",
    icon: <Cpu className="text-tech-magenta" size={32} />,
    glowColor: "rgba(255, 0, 255, 0.08)",
    tag: "HW_VERIFIED",
    stat: "99.9% UPTIME"
  },
  {
    title: "5-Year Tech Warranty",
    description: "Every TechForge build comes with a comprehensive 5-year hardware and labor warranty.",
    icon: <ShieldCheck className="text-tech-cyan" size={32} />,
    glowColor: "rgba(0, 229, 255, 0.1)",
    tag: "SECURE_OPS",
    stat: "FULL COVER"
  },
  {
    title: "Priority Delivery",
    description: "Safely packaged and shipped with premium insurance. Real-time tracking included.",
    icon: <Truck className="text-tech-magenta" size={32} />,
    glowColor: "rgba(255, 0, 255, 0.08)",
    tag: "LOG_ACTIVE",
    stat: "GLOBAL"
  }
];

export function FeatureSection() {
  return (
    <section id="about" className="py-40 bg-tech-black relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-tech-cyan/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tech-magenta/10 blur-[120px] rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Advanced Typography */}
        <div className="mb-24 space-y-6 max-w-4xl">
          <div className="flex items-center gap-4 text-tech-cyan/60 font-black text-xs uppercase tracking-[0.5em]">
             <Terminal size={14} />
             <span>Core_System_Capabilities</span>
             <div className="h-px flex-1 bg-tech-cyan/20"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            ENGINEERED FOR<br/>
            <span className="text-tech-cyan text-glow italic">SUPERIORITY.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="text-tech-silver/40 text-xl font-medium max-w-xl leading-relaxed italic border-l-2 border-tech-magenta/20 pl-6">
              "We don't just assemble computers. We forge precision instruments designed for the limits of human achievement."
            </p>
            
            <div className="gap-4 opacity-20 hidden lg:flex">
               <Binary size={40} className="text-white" />
               <Hexagon size={40} className="text-white" />
               <Layers size={40} className="text-white" />
            </div>
          </div>
        </div>

        {/* Feature Grid with SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard glowColor={feature.glowColor} className="h-full">
                {/* Card Tag */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-mono">
                    {feature.tag}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-tech-cyan animate-pulse"></div>
                </div>

                {/* Icon Container */}
                <div className="mb-8 p-5 bg-white/5 rounded-[1.5rem] w-fit border border-white/5 group-hover:border-white/10 group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="space-y-4 grow">
                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight uppercase group-hover:text-tech-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-tech-silver/40 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>

                {/* Card Footer / Stat */}
                <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-end">
                  <div className="text-[10px] font-black text-tech-silver/20 uppercase tracking-widest">Performance Metric</div>
                  <div className="text-lg font-mono font-bold text-tech-cyan/60">{feature.stat}</div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Decorative HUD Footnote */}
        <div className="mt-20 flex flex-wrap gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/10 italic">
           <span className="flex items-center gap-2"><div className="w-1 h-1 bg-tech-cyan rounded-full"></div> System_Check: Optimal</span>
           <span className="flex items-center gap-2"><div className="w-1 h-1 bg-tech-magenta rounded-full"></div> Core_Temp: 32°C</span>
           <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white/20 rounded-full"></div> Latency: 0.4ms</span>
        </div>
      </div>
    </section>
  );
}
