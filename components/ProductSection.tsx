"use client";

import { Plus } from "lucide-react";
import { products } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useMemo } from "react";

// Dynamically import to avoid SSR issues (WebGL needs browser)
const CircularGallery = dynamic(
  () => import("@/components/CircularGallery"),
  { ssr: false }
);

export function ProductSection() {
  // Map products into the CircularGallery item format
  const galleryItems = useMemo(
    () =>
      products.map((p) => ({
        image: p.image,
        text: p.name,
      })),
    []
  );

  return (
    <section id="shop" className="py-32 bg-tech-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              Premium <span className="text-tech-cyan">Gear.</span>
            </h2>
            <p className="text-tech-silver/40 font-medium max-w-lg italic">
              &quot;Precision-engineered arsenal for high-performance operations. Drag to explore.&quot;
            </p>
          </div>
          <Link href="/products">
            <Button
              variant="link"
              className="text-tech-cyan text-lg font-black uppercase tracking-widest hover:text-white group"
            >
              View Full Arsenal
              <Plus
                size={20}
                className="ml-2 group-hover:rotate-90 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>

      {/* CircularGallery — full-width WebGL carousel */}
      <div
        style={{ height: "600px", position: "relative" }}
        className="w-full"
      >
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#00E5FF"
          borderRadius={0.05}
          font="bold 20px sans-serif"
          scrollEase={0.03}
          scrollSpeed={2}
        />
      </div>

      {/* Subtle glow behind gallery */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-tech-cyan/5 blur-[140px] rounded-full pointer-events-none" />
    </section>
  );
}
