"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Star, Heart } from "lucide-react";
import { products } from "@/lib/data";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function ProductSection() {
  const [mounted, setMounted] = useState(false);
  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const wishlist = useStore((state) => state.wishlist);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show only first 4 products on landing page
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="shop" className="py-32 bg-tech-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">Premium <span className="text-tech-cyan">Gear.</span></h2>
             <p className="text-tech-silver/40 font-medium max-w-lg italic">"Precision-engineered arsenal for high-performance operations."</p>
          </div>
          <Link href="/products">
            <Button variant="link" className="text-tech-cyan text-lg font-black uppercase tracking-widest hover:text-white group">
              View Full Arsenal 
              <Plus size={20} className="ml-2 group-hover:rotate-90 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => {
            const isWishlisted = mounted && wishlist.some(item => item.id === product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-white/5"
              >
                <div className="relative aspect-square overflow-hidden bg-white/5">
                  <Link href={`/products/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className={cn(
                      "absolute top-6 right-6 p-3 backdrop-blur-md rounded-full transition-all",
                      isWishlisted ? "bg-tech-magenta text-white" : "bg-white/10 text-white hover:bg-tech-magenta"
                    )}
                  >
                    <Heart size={18} className={cn(isWishlisted && "fill-current")} />
                  </button>
                </div>

                <div className="p-8 flex flex-col justify-between grow space-y-6">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-black text-white leading-tight mb-2 tracking-tight line-clamp-1 group-hover:text-tech-cyan transition-colors">{product.name}</h3>
                    <div className="text-tech-silver/40 font-mono text-lg">${product.price}</div>
                  </Link>

                  <Button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-white/5 border border-white/10 text-white hover:bg-tech-cyan hover:text-tech-black hover:border-tech-cyan rounded-2xl group py-6 text-sm font-black apple-transition uppercase tracking-widest"
                  >
                    ADD TO CART
                    <Plus size={16} className="ml-2 group-hover:rotate-90 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

