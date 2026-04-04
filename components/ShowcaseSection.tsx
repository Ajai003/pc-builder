"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Star, ArrowRight, MousePointer2, Zap, Shield, Target } from "lucide-react";

const products = [
  {
    id: 1,
    name: "CYBER_MOUSE X1",
    price: "$149",
    rating: "4.9",
    image: "/hero-pc.png",
    color: "tech-green"
  },
  {
    id: 2,
    name: "FORGE_KEY_MECHANICAL",
    price: "$299",
    rating: "5.0",
    image: "/hero-pc.png",
    color: "tech-cyan"
  },
  {
    id: 3,
    name: "LIQUID_FLOW_GPU_BLOCK",
    price: "$199",
    rating: "4.8",
    image: "/hero-pc.png",
    color: "tech-green"
  },
  {
    id: 4,
    name: "NEON_STRIP_PRO",
    price: "$49",
    rating: "4.7",
    image: "/hero-pc.png",
    color: "tech-cyan"
  },
];

export function ShowcaseSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["1%", "-65%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-tech-black overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header Content */}
        <motion.div 
          style={{ opacity }}
          className="max-w-7xl mx-auto px-10 md:px-20 w-full mb-16 flex justify-between items-end relative z-20"
        >
           <div className="space-y-6">
              <div className="flex items-center gap-3 text-tech-cyan font-mono text-[10px] tracking-[0.6em] uppercase px-4 py-1 bg-tech-cyan/5 border border-tech-cyan/10">
                 <ShoppingBag size={14} className="animate-pulse" />
                 GEAR_COLLECTION_SYNC
              </div>
              <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter uppercase leading-none italic">
                ELITE<br/><span className="text-tech-green text-glow">ARSENAL.</span>
              </h2>
           </div>
           
           <div className="hidden lg:block text-right space-y-3 opacity-20 font-mono">
              <div className="text-[10px] tracking-[0.4em] text-white">COLLECTION_HASH: 0x8FA4</div>
              <div className="text-[10px] tracking-[0.4em] text-white">CATALOG_VER: 4.0.1</div>
              <div className="h-16 w-px bg-linear-to-b from-white to-transparent ml-auto" />
           </div>
        </motion.div>

        {/* Horizontal Scroll Area */}
        <div className="relative">
          <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-20">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
            {/* View All Terminal */}
            <div className="min-w-[450px] h-[600px] glass-card group cursor-pointer relative overflow-hidden flex items-center justify-center border-2 border-dashed border-white/5 hover:border-tech-green/30 transition-all">
               <div className="absolute inset-0 bg-tech-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-center relative z-10 space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    className="w-24 h-24 rounded-full border-2 border-tech-green/20 flex items-center justify-center mx-auto"
                  >
                     <ArrowRight className="text-tech-green" size={40} />
                  </motion.div>
                  <div className="space-y-2">
                    <div className="text-tech-green font-mono text-[10px] tracking-[0.5em] uppercase">Connect_Vault</div>
                    <div className="text-white font-black text-3xl tracking-tighter">VIEW FULL REPOSITORY</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Navigation HUD */}
        <div className="max-w-7xl mx-auto px-10 md:px-20 w-full mt-24 flex items-center gap-10">
           <div className="text-[10px] font-mono text-tech-silver/20 tracking-[0.5em]">0%</div>
           <div className="grow h-px bg-white/5 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-tech-green tech-glow-green"
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
              {/* Drifting particle on bar */}
              <motion.div 
                style={{ left: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
              />
           </div>
           <div className="text-[10px] font-mono text-tech-silver/20 tracking-[0.5em] uppercase">
              100%_SCAN
           </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: any) {
  return (
    <div className="min-w-[450px] h-[600px] glass-card group relative overflow-hidden flex flex-col shadow-2xl">
       {/* Scanning Image Region */}
       <div className="h-3/5 relative overflow-hidden p-10 bg-black/40">
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 blur-xs group-hover:blur-0"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-tech-black/80" />
          
          {/* Badge Overlays */}
          <div className="absolute top-8 left-8 z-20 space-y-3">
             <div className="px-4 py-1.5 bg-tech-green text-tech-black text-[9px] font-black tracking-[0.3em] skew-x-[-15deg]">
                HIGH_DEMAND
             </div>
             <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white tracking-[0.3em] skew-x-[-15deg]">
                LIMITED_RUN
             </div>
          </div>

          {/* Floating Indicators */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-6 right-6 z-20 flex gap-1 items-center opacity-40"
          >
             <div className="w-1 h-4 bg-tech-cyan" />
             <div className="w-1 h-2 bg-tech-cyan" />
             <div className="w-1 h-6 bg-tech-cyan" />
          </motion.div>
       </div>

       {/* Detailed Info Region */}
       <div className="p-10 grow flex flex-col justify-between relative bg-tech-gray/60 backdrop-blur-3xl">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="space-y-6">
             <div className="flex justify-between items-start">
                <h3 className="text-2xl font-black text-white tracking-tighter leading-none italic uppercase group-hover:text-tech-green transition-colors">{product.name}</h3>
                <div className="text-3xl font-black text-tech-cyan font-mono">{product.price}</div>
             </div>
             
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-tech-green text-[10px] font-mono font-bold">
                   <Star size={12} fill="currentColor" /> {product.rating} <span className="opacity-40">/ 5.0</span>
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="text-[9px] font-mono text-white/30 tracking-widest uppercase italic">
                   Verified_Forge_Hardware
                </div>
             </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/5">
             <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-tech-green' : 'bg-white/10'}`} />
                ))}
             </div>
             <motion.button 
               whileHover={{ x: 5 }}
               className="flex items-center gap-3 text-[10px] font-black text-white group/btn tracking-[0.3em]"
             >
                INITIALIZE_CHECKOUT <MousePointer2 size={14} className="group-hover/btn:text-tech-green transition-colors" />
             </motion.button>
          </div>
       </div>

       {/* Glowing Bottom Bar */}
       <div className={`absolute bottom-0 left-0 h-1.5 bg-${product.color} tech-glow-${product.color === 'tech-green' ? 'green' : 'cyan'} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
    </div>
  )
}

