"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { products, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Plus, Search, Filter } from "lucide-react";
import StarBorder from "@/components/ui/StarBorder";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const wishlist = useStore((state) => state.wishlist);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "peripherals", "components"];

  return (
    <main className="min-h-screen bg-tech-black selection:bg-tech-cyan/20 pb-20">
      <SiteNav />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              The <span className="text-tech-cyan">Arsenal.</span>
            </h1>
            <p className="text-tech-silver/40 font-medium italic">"Every component is a masterpiece of precision."</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <div className="relative group flex-1 md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-tech-silver/20 group-focus-within:text-tech-cyan transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search gear..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-tech-silver/20 focus:outline-none focus:border-tech-cyan/30 focus:bg-white/10 transition-all font-medium"
                />
             </div>
             
             <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all",
                      selectedCategory === cat 
                        ? "bg-tech-cyan text-tech-black" 
                        : "bg-white/5 text-tech-silver/40 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => {
            const isWishlisted = wishlist.some((item) => item.id === product.id);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-white/5 hover:border-white/10 transition-all"
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
                      isWishlisted 
                        ? "bg-tech-magenta text-white" 
                        : "bg-white/10 text-white hover:bg-tech-magenta"
                    )}
                  >
                    <Heart size={18} className={cn(isWishlisted && "fill-current")} />
                  </button>
                  <div className="absolute bottom-6 left-6">
                     <span className={cn(
                       "px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-tech-black/50 backdrop-blur-md border border-white/10",
                       product.color === "tech-cyan" ? "text-tech-cyan" : "text-tech-magenta"
                     )}>
                        {product.category}
                     </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between grow space-y-6">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-black text-white leading-tight mb-2 tracking-tight group-hover:text-tech-cyan transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="text-tech-silver/40 font-mono text-lg">${product.price}</div>
                  </Link>

                  <StarBorder
                    as="div"
                    color="#00E5FF"
                    speed="5s"
                    thickness={1}
                    className="w-full cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    <span className="flex items-center justify-center gap-2 w-full bg-white/5 text-white hover:bg-tech-cyan hover:text-tech-black rounded-[16px] py-5 text-sm font-black apple-transition group">
                       ADD TO CART
                       <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                    </span>
                  </StarBorder>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center space-y-6">
             <div className="text-9xl opacity-5">∅</div>
             <p className="text-tech-silver/40 font-medium italic">"No gear found matching your search."</p>
             <Button 
              variant="link" 
              onClick={() => {setSearchQuery(""); setSelectedCategory("all");}}
              className="text-tech-cyan font-black"
             >
               RESET FILTERS
             </Button>
          </div>
        )}
      </div>
    </main>
  );
}
