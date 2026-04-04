"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden bg-tech-black border-t border-white/5">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tech-magenta/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,229,255,0.05)_0%,transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
            <Zap size={16} className="text-tech-cyan animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.5em] text-white/60 uppercase">Ready_for_deployment</span>
          </div>

          <h2 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">
            START BUILDING YOUR<br/>
            <span className="text-tech-cyan text-glow">DREAM SETUP.</span>
          </h2>

          <p className="text-tech-silver/40 text-xl font-medium max-w-2xl mx-auto leading-relaxed border-l-2 border-tech-magenta/20 pl-6 italic">
            "Your journey to peak performance begins with a single click. Every machine is hand-built, tested, and forged for excellence."
          </p>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-tech-magenta text-white hover:bg-white hover:text-tech-black apple-transition px-16 py-10 text-2xl font-black rounded-3xl group shadow-[0_0_50px_rgba(255,0,255,0.2)] border-none"
            >
              BUILD NOW
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-12 text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
             <span>Secure Checkout</span>
             <div className="w-1 h-1 bg-white/10 rounded-full" />
             <span>Instant Quote</span>
             <div className="w-1 h-1 bg-white/10 rounded-full" />
             <span>Live Support</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-10 left-10 w-24 h-px bg-white/5" />
      <div className="absolute top-10 left-10 h-24 w-px bg-white/5" />
      <div className="absolute bottom-10 right-10 w-24 h-px bg-white/5" />
      <div className="absolute bottom-10 right-10 h-24 w-px bg-white/5" />
    </section>
  );
}


