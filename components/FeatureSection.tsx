"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    title: "Extreme Performance",
    description: "Equipped with the latest generation processors and high-speed memory for seamless gaming.",
    icon: <Zap className="text-tech-cyan" size={32} />,
    glow: "glow-cyan"
  },
  {
    title: "Premium Components",
    description: "We only use gold-standard hardware from trusted manufacturers like ASUS, NVIDIA, and AMD.",
    icon: <Cpu className="text-tech-magenta" size={32} />,
    glow: "glow-magenta"
  },
  {
    title: "5-Year Tech Warranty",
    description: "Every TechForge build comes with a comprehensive 5-year hardware and labor warranty.",
    icon: <ShieldCheck className="text-tech-cyan" size={32} />,
    glow: "glow-cyan"
  },
  {
    title: "Priority Delivery",
    description: "Safely packaged and shipped with premium insurance. Real-time tracking included.",
    icon: <Truck className="text-tech-magenta" size={32} />,
    glow: "glow-magenta"
  }
];

export function FeatureSection() {
  return (
    <section id="about" className="py-32 bg-tech-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Engineered for <span className="text-tech-cyan">Superiority.</span>
          </h2>
          <p className="text-tech-silver/40 text-lg max-w-2xl mx-auto font-medium italic">
            "Combining aesthetic excellence with raw computational power."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-10 rounded-[2.5rem] group hover:-translate-y-2 ${feature.glow}`}
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">{feature.title}</h3>
              <p className="text-tech-silver/40 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
