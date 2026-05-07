"use client";

import { SiteNav } from "@/components/SiteNav";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { ProductSection } from "@/components/ProductSection";
import { BannerSection } from "@/components/BannerSection";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <main className="relative bg-tech-black overflow-x-hidden selection:bg-tech-cyan/20">
      
      {/* Premium Bubble Navigation */}
      <SiteNav />

      {/* Hero: Content Left, pc.png Right */}
      <HeroSection />

      {/* Feature Display: Minimal Glass Cards */}
      <FeatureSection />

      {/* Simplified Product Highlights (Links to full arsenal) */}
      <ProductSection />

      {/* Banner: Full-width clean typography */}
      <BannerSection />

      {/* Final Action Call */}
      <CTASection />

      {/* Footer: Legal & Links */}
      <footer className="py-20 bg-tech-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-6">
            <div className="text-2xl font-black text-white tracking-tighter">
              TECH<span className="text-tech-cyan">FORGE</span>
            </div>
            <p className="text-sm text-tech-silver/40 font-medium italic">
              "Precision engineering for the modern professional."
            </p>
          </div>

          {[
            { title: "Hardware", links: ["All Builds", "Components", "Peripherals"], hrefs: ["/products", "/products", "/products"] },
            { title: "Service", links: ["Support", "Warranty", "Returns"], hrefs: ["/contact", "/about", "/about"] },
            { title: "Company", links: ["About", "Careers", "Contact"], hrefs: ["/about", "/about", "/contact"] }
          ].map((column) => (
            <div key={column.title} className="space-y-6">
              <h4 className="text-xs font-black text-tech-cyan uppercase tracking-[0.3em]">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, idx) => (
                  <li key={link}>
                    <Link href={column.hrefs[idx]} className="text-sm text-tech-silver/40 hover:text-white apple-transition">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase font-bold tracking-[0.4em] text-tech-silver/20">
          <span>&copy; 2026 TechForge Engineering Ltd.</span>
          <div className="flex gap-8">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Security: AES-256</span>
          </div>
        </div>

        {/* Global Glow */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tech-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      </footer>
    </main>
  );
}



