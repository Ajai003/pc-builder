"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Layout, ChevronRight, Zap } from "lucide-react";
import StarBorder from "@/components/ui/StarBorder";

const components = {
  cpu: [
    { name: "Intel Core i9-14900K", price: 589 },
    { name: "AMD Ryzen 9 7950X3D", price: 699 },
    { name: "Intel Core i7-14700K", price: 409 },
  ],
  gpu: [
    { name: "NVIDIA RTX 4090", price: 1599 },
    { name: "NVIDIA RTX 4080 Super", price: 999 },
    { name: "AMD Radeon RX 7900 XTX", price: 949 },
  ],
  ram: [
    { name: "64GB DDR5 6000MHz", price: 219 },
    { name: "32GB DDR5 6000MHz", price: 129 },
    { name: "16GB DDR5 5200MHz", price: 69 },
  ]
};

export function SimpleBuilder() {
  const [selections, setSelections] = useState({
    cpu: components.cpu[0],
    gpu: components.gpu[0],
    ram: components.ram[0],
  });

  const total = selections.cpu.price + selections.gpu.price + selections.ram.price + 1200; // Base price for case/cooling/etc

  return (
    <section id="builder" className="py-32 bg-tech-gray/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Configuration */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white tracking-tighter">Forge Your Machine.</h2>
              <p className="text-tech-silver/40 font-medium">Select your core modules. Real-time pricing and compatibility active.</p>
            </div>

            <div className="space-y-8">
              {Object.entries(components).map(([type, options]) => (
                <div key={type} className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black text-tech-cyan/60 uppercase tracking-widest">
                    {type === "cpu" && <Cpu size={14} />}
                    {type === "gpu" && <Zap size={14} />}
                    {type === "ram" && <Database size={14} />}
                    Select {type.toUpperCase()}
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {options.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => setSelections({ ...selections, [type]: option })}
                        className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 group ${
                          selections[type as keyof typeof selections].name === option.name
                            ? "bg-tech-cyan/10 border-tech-cyan text-white glow-cyan"
                            : "bg-white/5 border-white/5 text-tech-silver/40 hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-2 h-2 rounded-full ${
                            selections[type as keyof typeof selections].name === option.name ? "bg-tech-cyan" : "bg-white/10"
                          }`} />
                          <span className="font-bold">{option.name}</span>
                        </div>
                        <span className="font-mono text-sm tracking-tight">+ ${option.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Summary Box */}
          <div className="sticky top-32">
            <div className="glass-card p-10 rounded-[3rem] border border-white/10 space-y-8 glow-magenta">
              <div className="pb-8 border-b border-white/5">
                <h3 className="text-2xl font-black text-white mb-2">Build Summary</h3>
                <p className="text-sm font-medium text-tech-silver/40">Status: Configuration Stable</p>
              </div>

              <div className="space-y-6">
                {Object.entries(selections).map(([type, item]) => (
                  <div key={type} className="flex justify-between items-center group">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-tech-silver/40 font-bold">{type}</div>
                      <div className="text-white font-bold text-sm tracking-tight group-hover:text-tech-cyan apple-transition">{item.name}</div>
                    </div>
                    <div className="text-tech-silver/60 font-mono text-sm">${item.price}</div>
                  </div>
                ))}
                <div className="flex justify-between items-center py-4 border-t border-white/5 mt-4">
                  <div className="text-tech-silver/40 text-sm font-bold uppercase tracking-widest">Base Components</div>
                  <div className="text-tech-silver/60 font-mono text-sm">$1200</div>
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-black text-white tracking-tighter uppercase mr-4">Total Est.</div>
                  <div className="text-6xl font-black text-tech-cyan text-glow tracking-tighter">${total}</div>
                </div>
                <StarBorder
                  as="div"
                  color="#FF00FF"
                  speed="4s"
                  thickness={2}
                  className="w-full cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-2 w-full bg-tech-magenta text-white hover:bg-white hover:text-tech-black apple-transition py-8 text-2xl font-black rounded-[16px] group shadow-[0_0_40px_rgba(255,0,255,0.2)]">
                    Reserve Build
                    <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </StarBorder>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
