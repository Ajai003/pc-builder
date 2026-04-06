"use client";

import { use, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { products, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Minus, Plus, ChevronLeft, Truck, ShieldCheck, Zap } from "lucide-react";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    notFound();
  }

  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const wishlist = useStore((state) => state.wishlist);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <main className="min-h-screen bg-tech-black selection:bg-tech-cyan/20 pb-20">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        <Link href="/products" className="group flex items-center gap-2 text-tech-silver/40 hover:text-white transition-colors mb-12 font-black text-xs uppercase tracking-widest">
           <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
           Back to Arsenal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Image Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-square glass-card rounded-[3rem] overflow-hidden border border-white/5"
          >
            <div className="absolute inset-0 bg-linear-to-br from-tech-cyan/5 via-transparent to-tech-magenta/5 pointer-events-none" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <button 
              onClick={() => toggleWishlist(product)}
              className={cn(
                "absolute top-10 right-10 p-5 backdrop-blur-xl rounded-full border border-white/10 transition-all z-10",
                isWishlisted 
                  ? "bg-tech-magenta text-white border-tech-magenta/50" 
                  : "bg-white/5 text-white hover:bg-tech-magenta"
              )}
            >
              <Heart size={24} className={cn(isWishlisted && "fill-current")} />
            </button>
          </motion.div>

          {/* Right: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
               <div className={cn(
                  "inline-flex px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10",
                  product.color === "tech-cyan" ? "text-tech-cyan bg-tech-cyan/5" : "text-tech-magenta bg-tech-magenta/5"
               )}>
                  {product.category}
               </div>
               <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                  {product.name}
               </h1>
               <div className="text-4xl font-mono text-tech-cyan font-light">${product.price}</div>
               <p className="text-xl text-tech-silver/60 font-medium italic max-w-xl">
                  "{product.description}"
               </p>
            </div>

            {/* Specs Grid */}
            {product.specs && (
              <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-12">
                 {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                       <dt className="text-[10px] font-black uppercase tracking-widest text-tech-silver/20">{key}</dt>
                       <dd className="text-lg font-bold text-white">{value}</dd>
                    </div>
                 ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
               <Button 
                onClick={() => addToCart(product)}
                size="lg" 
                className="flex-1 bg-tech-cyan text-tech-black hover:bg-white text-lg font-black py-8 rounded-[2rem] transition-all"
               >
                  ACQUIRE NOW
                  <ShoppingCart size={20} className="ml-3" />
               </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-6 pt-12">
               {[
                 { icon: Truck, label: "Express Intake", sub: "2-Day Dispatch" },
                 { icon: ShieldCheck, label: "Forge Guard", sub: "3-Year Warranty" },
                 { icon: Zap, label: "Overclock Ready", sub: "Peak Efficiency" }
               ].map((item) => (
                 <div key={item.label} className="text-center space-y-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto transition-colors group-hover:border-tech-cyan/40">
                       <item.icon size={20} className="text-tech-silver/40 group-hover:text-tech-cyan transition-colors" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-white">{item.label}</div>
                       <div className="text-[9px] font-medium text-tech-silver/20 italic">{item.sub}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
