"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Star } from "lucide-react";

const products = [
  {
    name: "Forge V1 Mechanical Keyboard",
    price: 189,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
    color: "tech-cyan"
  },
  {
    name: "Aero Precision Mouse",
    price: 89,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800",
    color: "tech-magenta"
  },
  {
    name: "Titan Wireless Headset",
    price: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    color: "tech-cyan"
  },
  {
    name: "4K Quantum Display",
    price: 699,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
    color: "tech-magenta"
  }
];

export function ProductSection() {
  return (
    <section id="shop" className="py-32 bg-tech-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Premium Peripherals.</h2>
             <p className="text-tech-silver/40 font-medium max-w-lg italic">"Complete your setup with TechForge precision gear."</p>
          </div>
          <Button variant="link" className="text-tech-cyan text-lg font-black uppercase tracking-widest hover:text-white">View Full Collection →</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-tech-cyan hover:text-tech-black transition-colors">
                  <Star size={18} className="fill-current" />
                </button>
              </div>

              <div className="p-8 flex flex-col justify-between grow space-y-6">
                <div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2 tracking-tight">{product.name}</h3>
                  <div className="text-tech-silver/40 font-mono text-lg">${product.price}</div>
                </div>

                <Button className="w-full bg-white/5 border border-white/10 text-white hover:bg-tech-cyan hover:text-tech-black hover:border-tech-cyan rounded-2xl group py-6 text-sm font-black apple-transition">
                   ADD TO CART
                   <Plus size={16} className="ml-2 group-hover:rotate-90 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
