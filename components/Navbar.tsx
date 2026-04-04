"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Build PC", href: "#builder" },
    { name: "Shop", href: "#shop" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-tech-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white">
          TECH<span className="text-tech-cyan">FORGE</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-tech-silver/60 hover:text-tech-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Icons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-tech-silver/60 hover:text-white transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-tech-magenta rounded-full text-[10px] font-bold flex items-center justify-center text-white">2</span>
          </button>
          <Button variant="ghost" size="sm" className="text-tech-silver/60 hover:text-white">
            <User size={20} className="mr-2" />
            Login
          </Button>
          <Button size="sm" className="bg-tech-cyan text-tech-black hover:bg-white apple-transition font-bold">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-tech-black border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-tech-silver/60"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
              <Button className="w-full bg-tech-cyan text-tech-black font-bold">Start Building</Button>
              <Button variant="outline" className="w-full border-white/10 text-white">Login</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
