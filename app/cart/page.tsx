"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight, CreditCard, ShieldCheck, Zap, ChevronLeft } from "lucide-react";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const clearCart = useStore((state) => state.clearCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 25;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-tech-black selection:bg-tech-cyan/20 pb-40">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                 Manifest.
              </h1>
              <p className="text-tech-silver/40 font-medium italic">"Review your selection before deployment."</p>
           </div>
           
           <div className="text-right">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-tech-silver/20 mb-2">Operation ID</div>
              <div className="text-xl font-mono text-tech-cyan">#TF-973-AX</div>
           </div>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="group glass-card rounded-[2.5rem] p-8 border border-white/5 flex flex-col sm:flex-row gap-10 items-center"
                  >
                    <div className="w-40 aspect-square rounded-[1.5rem] overflow-hidden bg-white/5 shrink-0 border border-white/5">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="flex-1 space-y-6 w-full">
                       <div className="flex justify-between items-start">
                          <div>
                             <h3 className="text-2xl font-black text-white tracking-tight">{item.name}</h3>
                             <p className="text-sm font-black uppercase tracking-widest text-tech-silver/20">{item.category}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-3 bg-white/5 rounded-2xl text-tech-magenta hover:bg-tech-magenta hover:text-white transition-all border border-white/5"
                          >
                            <Trash2 size={18} />
                          </button>
                       </div>

                       <div className="flex flex-wrap items-end justify-between gap-6">
                          <div className="flex items-center bg-white/5 border border-white/5 rounded-2xl p-1 shrink-0">
                             <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center text-tech-silver/40 hover:text-white transition-colors"
                             >
                                <Minus size={16} />
                             </button>
                             <span className="w-12 text-center text-white font-mono font-bold text-lg">{item.quantity}</span>
                             <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center text-tech-silver/40 hover:text-white transition-colors"
                             >
                                <Plus size={16} />
                             </button>
                          </div>
                          
                          <div className="text-right">
                             <div className="text-[10px] font-black uppercase tracking-widest text-tech-silver/20">Line Value</div>
                             <div className="text-2xl font-mono text-white font-bold">${item.price * item.quantity}</div>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <Button 
                variant="ghost" 
                onClick={clearCart}
                className="text-tech-silver/20 hover:text-tech-magenta font-black text-xs uppercase tracking-widest"
              >
                UNLOAD ALL ASSETS
              </Button>
            </div>

            {/* Receipt Summary */}
            <div className="lg:sticky lg:top-40 space-y-8">
               <div className="glass-card rounded-[3rem] p-10 border border-white/5 space-y-8 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-tech-cyan/10 blur-[80px] rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tech-magenta/10 blur-[80px] rounded-full" />

                  <h2 className="text-3xl font-black text-white tracking-tighter">Terminal <span className="text-tech-cyan">Report</span></h2>

                  <div className="space-y-4 font-bold uppercase tracking-widest text-xs">
                     <div className="flex justify-between text-tech-silver/40">
                        <span>Base Valuation</span>
                        <span className="font-mono text-white">${total.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-tech-silver/40">
                        <span>Intake Logistics</span>
                        <span className={cn("font-mono", shipping === 0 ? "text-tech-cyan" : "text-white")}>
                           {shipping === 0 ? "EXEMPT" : `$${shipping.toFixed(2)}`}
                        </span>
                     </div>
                     <div className="flex justify-between text-tech-silver/40">
                        <span>System Duty (8%)</span>
                        <span className="font-mono text-white">${tax.toFixed(2)}</span>
                     </div>
                     <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                        <span className="text-white text-base">Total Outcome</span>
                        <span className="text-4xl font-mono text-tech-cyan">${grandTotal.toFixed(2)}</span>
                     </div>
                  </div>

                  <div className="space-y-4 pt-10">
                     <Button className="w-full bg-tech-cyan text-tech-black hover:bg-white text-base font-black py-8 rounded-2xl group apple-transition">
                        DEPLOY SETUP
                        <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                     </Button>
                     <p className="text-[10px] text-tech-silver/20 font-bold italic text-center uppercase tracking-widest">
                        SECURED VIA TECH-FORGE NEURAL LINK
                     </p>
                  </div>
               </div>

               <div className="flex items-center gap-4 px-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <ShieldCheck size={20} className="text-tech-cyan" />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase text-white tracking-widest">Encrypted Checkout</div>
                     <div className="text-[9px] font-medium text-tech-silver/20 italic">AES-256 Military Grade Protocol</div>
                  </div>
               </div>
            </div>
          </div>
        ) : (
          <div className="py-40 text-center space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
             <div className="relative inline-block">
                <ShoppingCart size={120} className="text-tech-silver/5 mx-auto" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-tech-cyan/20 blur-[60px] rounded-full"
                />
             </div>
             <div className="space-y-4">
                <h2 className="text-4xl font-black text-white italic">"Your manifest is currently empty."</h2>
                <p className="text-tech-silver/40 font-medium">Head back to the arsenal to select your gear.</p>
             </div>
             <Link href="/products">
                <Button variant="outline" className="border-white/10 text-white hover:bg-tech-cyan hover:text-tech-black hover:border-tech-cyan px-10 py-8 rounded-2xl font-black uppercase tracking-widest text-xs apple-transition">
                   <ChevronLeft size={16} className="mr-2" />
                   RETURN TO ARSENAL
                </Button>
             </Link>
          </div>
        )}
      </div>
    </main>
  );
}
