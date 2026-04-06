"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2, ArrowRight, ChevronLeft, Star } from "lucide-react";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false);
  const wishlist = useStore((state) => state.wishlist);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-tech-black selection:bg-tech-cyan/20 pb-40">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                 Targets.
              </h1>
              <p className="text-tech-silver/40 font-medium italic">"High-priority gear pending acquisition."</p>
           </div>
           
           <div className="text-right">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-tech-silver/20 mb-2">Inventory Status</div>
              <div className="text-xl font-mono text-tech-magenta">{wishlist.length} MARKED</div>
           </div>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {wishlist.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="relative aspect-square overflow-hidden bg-white/5">
                    <Link href={`/products/${item.id}`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Link>
                    <button 
                      onClick={() => toggleWishlist(item)}
                      className="absolute top-6 right-6 p-3 bg-tech-magenta text-white backdrop-blur-md rounded-full transition-all border border-tech-magenta/50"
                    >
                      <Trash2 size={18} />
                    </button>
                    <div className="absolute bottom-6 left-6">
                       <span className={cn(
                         "px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-tech-black/50 backdrop-blur-md border border-white/10",
                         item.color === "tech-cyan" ? "text-tech-cyan" : "text-tech-magenta"
                       )}>
                          {item.category}
                       </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between grow space-y-6">
                    <Link href={`/products/${item.id}`}>
                      <h3 className="text-xl font-black text-white leading-tight mb-2 tracking-tight group-hover:text-tech-cyan transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="text-tech-silver/40 font-mono text-lg">${item.price}</div>
                    </Link>

                    <div className="space-y-4">
                       <Button 
                        onClick={() => {
                           addToCart(item);
                           toggleWishlist(item);
                        }}
                        className="w-full bg-tech-cyan text-tech-black hover:bg-white rounded-2xl group py-6 text-sm font-black apple-transition"
                       >
                          ACQUIRE & DEPLOY
                          <ShoppingCart size={16} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                       </Button>
                       <Button 
                        onClick={() => addToCart(item)}
                        variant="ghost"
                        className="w-full text-tech-silver/40 hover:text-white font-black text-xs uppercase tracking-widest"
                       >
                          KEEP IN SIGHT
                       </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-40 text-center space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
             <div className="relative inline-block">
                <Heart size={120} className="text-tech-silver/5 mx-auto" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-tech-magenta/20 blur-[60px] rounded-full"
                />
             </div>
             <div className="space-y-4">
                <h2 className="text-4xl font-black text-white italic">"No targets currently marked."</h2>
                <p className="text-tech-silver/40 font-medium">Head back to the arsenal to scope out the latest gear.</p>
             </div>
             <Link href="/products">
                <Button variant="outline" className="border-white/10 text-white hover:bg-tech-magenta hover:text-white hover:border-tech-magenta px-10 py-8 rounded-2xl font-black uppercase tracking-widest text-xs apple-transition">
                   <Star size={16} className="mr-2" />
                   SCOPE GEAR
                </Button>
             </Link>
          </div>
        )}
      </div>
    </main>
  );
}
