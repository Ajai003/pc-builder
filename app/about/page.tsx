"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ShieldCheck, Zap, Globe, Cpu, Users, Award } from "lucide-react";

const stats = [
  { label: "Systems Built", value: "14,500+" },
  { label: "Global Reach", value: "48 Countries" },
  { label: "Precision Rating", value: "99.9%" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-tech-black selection:bg-tech-cyan/20 pb-40 overflow-x-hidden">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="space-y-10">
              <div className="space-y-6">
                 <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
                    Forge <br /> <span className="text-tech-cyan">Legacy.</span>
                 </h1>
                 <p className="text-2xl text-tech-silver/40 font-medium italic max-w-xl">
                    "We don't just assemble computers. We engineer performance interfaces for the next generation of digital pioneers."
                 </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
                 {stats.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                       <div className="text-3xl font-mono text-white font-bold tracking-tight">{stat.value}</div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-tech-silver/20">{stat.label}</div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="relative group">
              <div className="absolute inset-0 bg-tech-cyan/10 blur-[120px] rounded-full group-hover:bg-tech-cyan/20 transition-all duration-1000" />
              <div className="glass-card rounded-[4rem] overflow-hidden border border-white/10 aspect-video relative z-10">
                 <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" 
                  alt="Precision Lab" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-tech-black via-transparent to-transparent opacity-80" />
              </div>
           </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
           {[
             { icon: Cpu, name: "Neural Integrity", desc: "Every component is tested under extreme thermal stress to guarantee zero failures." },
             { icon: ShieldCheck, name: "Ironclad Defense", desc: "Military-grade protection protocols and premium warranties for absolute peace of mind." },
             { icon: Zap, name: "Overclock Culture", desc: "Born from the enthusiast community. We live for the extra frames and peak efficiency." }
           ].map((value) => (
             <div key={value.name} className="glass-card rounded-[3rem] p-12 border border-white/5 space-y-6 group hover:border-tech-cyan/20 transition-all">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-tech-silver/40 group-hover:bg-tech-cyan group-hover:text-tech-black transition-all">
                   <value.icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-white italic">{value.name}</h3>
                <p className="text-tech-silver/40 font-medium italic text-sm leading-relaxed">{value.desc}</p>
             </div>
           ))}
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase italic">The Tech-Forge <span className="text-tech-cyan">Oath.</span></h2>
            <div className="relative">
               <div className="text-9xl absolute -top-10 left-0 text-white/5 font-serif italic">"</div>
               <p className="text-4xl md:text-6xl font-light text-tech-silver/60 italic leading-tight px-20">
                  Engineering the <span className="text-white">impossible</span>, one system at a time. For the visionaries, the creators, and the athletes of the digital arena.
               </p>
               <div className="text-9xl absolute -bottom-40 right-0 text-white/5 font-serif italic rotate-180">"</div>
            </div>
        </div>
      </div>
    </main>
  );
}
