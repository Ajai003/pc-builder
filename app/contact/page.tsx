"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail, Phone, Globe, ChevronRight } from "lucide-react";
import StarBorder from "@/components/ui/StarBorder";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-tech-black selection:bg-tech-cyan/20 pb-40 overflow-x-hidden">
      <SiteNav />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           
           {/* Contact Info */}
           <div className="space-y-12">
              <div className="space-y-6">
                 <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
                    Establish <br /> <span className="text-tech-cyan">Link.</span>
                 </h1>
                 <p className="text-2xl text-tech-silver/40 font-medium italic max-w-lg">
                    "Direct neural connection to the Tech-Forge support matrix."
                 </p>
              </div>

              <div className="space-y-10 pt-10 border-t border-white/5">
                 {[
                   { icon: Mail, label: "Neural Transmission", value: "ops@techforge.io" },
                   { icon: Phone, label: "Voice Uplink", value: "+1 (888) FORGE-XT" },
                   { icon: MapPin, label: "Core Node", value: "Sector 7, Neo-Tokyo Hub" }
                 ].map((item) => (
                   <div key={item.label} className="flex items-center gap-6 group cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-tech-silver/40 group-hover:bg-tech-cyan group-hover:text-tech-black transition-all">
                         <item.icon size={20} />
                      </div>
                      <div className="space-y-0.5">
                         <div className="text-[10px] font-black uppercase tracking-widest text-tech-silver/20">{item.label}</div>
                         <div className="text-lg font-bold text-white group-hover:text-tech-cyan transition-colors">{item.value}</div>
                      </div>
                   </div>
                 ))}
              </div>

              {/* Decorative Element */}
              <div className="pt-10 hidden lg:block">
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-tech-silver/10 mb-8">SECURE ENCRYPTED CHANNEL</div>
                 <div className="flex gap-4">
                    {[1,2,3,4,5,6].map(i => (
                       <div key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? 'bg-tech-cyan/20' : 'bg-white/5'}`} />
                    ))}
                 </div>
              </div>
           </div>

           {/* Contact Form */}
           <div className="relative group">
              <div className="absolute inset-0 bg-tech-cyan/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="glass-card rounded-[3rem] p-12 lg:p-20 border border-white/10 space-y-10 relative z-10">
                 <h2 className="text-3xl font-black text-white italic">Interface <span className="text-tech-cyan">Module</span></h2>
                 
                 <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-tech-silver/20 px-4">Identifier</label>
                       <input 
                        type="text" 
                        placeholder="Full name or Designation"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-8 text-white placeholder:text-tech-silver/20 focus:outline-none focus:border-tech-cyan/30 focus:bg-white/10 transition-all font-medium"
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-tech-silver/20 px-4">Endpoint</label>
                       <input 
                        type="email" 
                        placeholder="Email address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-8 text-white placeholder:text-tech-silver/20 focus:outline-none focus:border-tech-cyan/30 focus:bg-white/10 transition-all font-medium"
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-tech-silver/20 px-4">Transmission</label>
                       <textarea 
                        rows={5} 
                        placeholder="Detailed message or inquiry..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-8 text-white placeholder:text-tech-silver/20 focus:outline-none focus:border-tech-cyan/30 focus:bg-white/10 transition-all font-medium resize-none"
                       />
                    </div>

                    <StarBorder
                      as="div"
                      color={status === "sent" ? "#FF00FF" : "#00E5FF"}
                      speed="4s"
                      thickness={2}
                      className="w-full cursor-pointer"
                      onClick={handleSubmit}
                    >
                      <span className={`flex items-center justify-center gap-4 w-full py-8 rounded-[16px] font-black uppercase tracking-widest transition-all ${
                        status === "sent" 
                          ? "bg-tech-magenta text-white" 
                          : "bg-tech-cyan text-tech-black hover:bg-white"
                      }`}>
                       {status === "idle" && (
                         <>
                           INITIALIZE UPLINK
                           <Send size={18} />
                         </>
                       )}
                       {status === "sending" && <span className="animate-pulse">TRANSMITTING...</span>}
                       {status === "sent" && <span>UPLINK SUCCESSFUL.</span>}
                      </span>
                    </StarBorder>
                 </form>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
