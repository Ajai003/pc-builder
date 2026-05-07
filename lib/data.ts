export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "peripherals" | "components" | "builds";
  color: string;
  specs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "kb-01",
    name: "Forge V1 Mechanical Keyboard",
    price: 189,
    description: "Ultra-responsive mechanical keyboard with customized switches and vibrant RGB lighting.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
    category: "peripherals",
    color: "tech-cyan",
    specs: {
      "Switch Type": "Forge Blue (Tactile)",
      "Keycaps": "PBT Double-shot",
      "Connectivity": "USB-C, Bluetooth 5.2",
    }
  },
  {
    id: "m-01",
    name: "Aero Precision Mouse",
    price: 89,
    description: "Lightweight gaming mouse designed for precision and speed in competitive environments.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800",
    category: "peripherals",
    color: "tech-magenta",
    specs: {
      "Sensor": "26K DPI Optical",
      "Weight": "58g",
      "Battery": "Up to 80 hours",
    }
  },
  {
    id: "h-01",
    name: "Titan Wireless Headset",
    price: 249,
    description: "Immersive 7.1 surround sound headset with high-fidelity audio and crystal clear microphone.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    category: "peripherals",
    color: "tech-cyan",
    specs: {
      "Drivers": "50mm Neodymium",
      "Latency": "< 20ms",
      "Range": "30ft",
    }
  },
  {
    id: "d-01",
    name: "4K Quantum Display",
    price: 699,
    description: "Stunning 4K resolution monitor with a 144Hz refresh rate and HDR1000 certification.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
    category: "peripherals",
    color: "tech-magenta",
    specs: {
      "Resolution": "3840 x 2160",
      "Panel": "QD-OLED",
      "Refresh": "144Hz",
    }
  },
  {
    id: "cpu-01",
    name: "Intel Core i9-14900K",
    price: 589,
    description: "The ultimate gaming processor for extreme performance.",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
    category: "components",
    color: "tech-cyan",
    specs: {
      "Cores": "24 (8P + 16E)",
      "Boost Clock": "6.0 GHz",
      "TDP": "125W",
    }
  },
  {
    id: "gpu-01",
    name: "NVIDIA RTX 4090",
    price: 1599,
    description: "Peak graphical performance for the most demanding games.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
    category: "components",
    color: "tech-magenta",
    specs: {
      "CUDA Cores": "16384",
      "VRAM": "24GB GDDR6X",
      "Boost Clock": "2.52 GHz",
    }
  },
  {
    id: "mp-01",
    name: "Nexus RGB Mousepad XL",
    price: 59,
    description: "Extended desk mat with 16-zone RGB illumination and micro-textured surface for pinpoint accuracy.",
    image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?auto=format&fit=crop&q=80&w=800",
    category: "peripherals",
    color: "tech-cyan",
    specs: {
      "Size": "900 × 400mm",
      "Surface": "Micro-woven cloth",
      "Lighting": "16-zone RGB",
    }
  },
  {
    id: "ch-01",
    name: "Apex Ergo Gaming Chair",
    price: 449,
    description: "Ergonomic racing-style chair with 4D armrests, lumbar support, and breathable mesh back.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=800",
    category: "peripherals",
    color: "tech-magenta",
    specs: {
      "Recline": "90°–165°",
      "Material": "PU Leather + Mesh",
      "Weight Limit": "150 kg",
    }
  },
  {
    id: "wc-01",
    name: "Prism 4K Streaming Webcam",
    price: 179,
    description: "Ultra-HD webcam with auto-focus, AI face tracking, and studio-grade noise cancellation mic.",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=800",
    category: "peripherals",
    color: "tech-cyan",
    specs: {
      "Resolution": "4K @ 30fps",
      "FOV": "90° wide-angle",
      "Focus": "AI Auto-tracking",
    }
  },
  {
    id: "cool-01",
    name: "CryoLoop 360 AIO Cooler",
    price: 219,
    description: "Triple-fan 360mm all-in-one liquid cooler with infinity mirror pump head and zero-RPM mode.",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=800",
    category: "components",
    color: "tech-cyan",
    specs: {
      "Radiator": "360mm",
      "Fans": "3× 120mm ARGB",
      "TDP Support": "350W+",
    }
  },
  {
    id: "ram-01",
    name: "Hyperion 64GB DDR5 Kit",
    price: 279,
    description: "Dual-channel 64GB DDR5-6400 memory kit with heat-spreader and XMP 3.0 overclocking profile.",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=800",
    category: "components",
    color: "tech-magenta",
    specs: {
      "Capacity": "64GB (2×32GB)",
      "Speed": "DDR5-6400",
      "Latency": "CL32",
    }
  },
  {
    id: "ssd-01",
    name: "Warp Drive 4TB NVMe",
    price: 349,
    description: "PCIe Gen5 NVMe SSD with sequential reads up to 12,400 MB/s and built-in heatsink.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800",
    category: "components",
    color: "tech-cyan",
    specs: {
      "Capacity": "4TB",
      "Read": "12,400 MB/s",
      "Interface": "PCIe 5.0 x4",
    }
  },
];

export const components = {
  cpu: [
    { id: "cpu-1", name: "Intel Core i9-14900K", price: 589 },
    { id: "cpu-2", name: "AMD Ryzen 9 7950X", price: 549 },
    { id: "cpu-3", name: "Intel Core i7-14700K", price: 409 },
  ],
  gpu: [
    { id: "gpu-1", name: "NVIDIA RTX 4090", price: 1599 },
    { id: "gpu-2", name: "NVIDIA RTX 4080 Super", price: 999 },
    { id: "gpu-3", name: "AMD Radeon RX 7900 XTX", price: 929 },
  ],
  ram: [
    { id: "ram-1", name: "32GB DDR5-6000", price: 129 },
    { id: "ram-2", name: "64GB DDR5-6400", price: 249 },
  ],
  storage: [
    { id: "st-1", name: "2TB NVMe Gen5 SSD", price: 259 },
    { id: "st-2", name: "4TB NVMe Gen4 SSD", price: 309 },
  ],
  psu: [
    { id: "psu-1", name: "1000W 80+ Platinum", price: 199 },
    { id: "psu-2", name: "1200W 80+ Titanium", price: 299 },
  ]
};
