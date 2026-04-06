"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { components } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Gpu, 
  HardDrive, 
  Settings2, 
  Zap, 
  Trash2, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";

const buildSteps = [
  { id: "cpu", name: "Processor", icon: Cpu, options: components.cpu },
  { id: "gpu", name: "Graphics", icon: Gpu, options: components.gpu },
  { id: "ram", name: "Memory", icon: Settings2, options: components.ram },
  { id: "storage", name: "Storage", icon: HardDrive, options: components.storage },
  { id: "psu", name: "Power", icon: Zap, options: components.psu },
];

export default function BuildPCPage() {
  const [selections, setSelections] = useState<Record<string, any>>({});
  const [activeStep, setActiveStep] = useState(0);
  
  const currentStep = buildSteps[activeStep];
  const addToCart = useStore((state) => state.addToCart);

  const totalPrice = useMemo(() => {
    return Object.values(selections).reduce((acc, item) => acc + item.price, 0);
  }, [selections]);

  const progress = ((activeStep + 1) / buildSteps.length) * 100;

  const handleSelect = (option: any) => {
    setSelections((prev) => ({ ...prev, [currentStep.id]: option }));
  };

  const isStepComplete = (stepId: string) => !!selections[stepId];
  const allStepsComplete = buildSteps.every((step) => !!selections[step.id]);

  const handleBuildReady = () => {
    if (!allStepsComplete) return;
    
    const buildProduct = {
      id: `build-${Date.now()}`,
      name: `Custom Forge Elite Build`,
      price: totalPrice,
      image: "/pc.png",
      description: `Custom high-performance build with ${selections.cpu.name} and ${selections.gpu.name}.`,
      category: "builds" as const,
      color: "tech-cyan",
      specs: {
        CPU: selections.cpu.name,
        GPU: selections.gpu.name,
        RAM: selections.ram.name,
        Storage: selections.storage.name,
        PSU: selections.psu.name,
      }
    };
    
    addToCart(buildProduct);
    alert("System Blueprint Uploaded to Cart!");
  };

  return (
    <main className="min-h-screen bg-tech-black selection:bg-tech-cyan/20 pb-40 overflow-x-hidden">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
           <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
                 Forge.
              </h1>
              <p className="text-tech-silver/40 font-medium italic">"Configure your ultimate computing machine."</p>
           </div>
           
           <div className="w-full lg:w-96 space-y-4">
              <div className="flex justify-between items-end">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-tech-silver/20">Build Progress</span>
                 <span className="text-sm font-mono text-tech-cyan font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-tech-cyan shadow-[0_0_15px_rgba(0,255,255,0.5)]" 
                 />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           {/* Steps Sidebar */}
           <div className="lg:col-span-3 space-y-4">
              {buildSteps.map((step, index) => {
                const isSelected = activeStep === index;
                const isCompleted = isStepComplete(step.id);
                
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "w-full flex items-center p-6 rounded-2xl border transition-all text-left group",
                      isSelected 
                        ? "bg-tech-cyan/10 border-tech-cyan/30 text-white" 
                        : "bg-white/5 border-white/5 text-tech-silver/40 hover:bg-white/10"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mr-4 shrink-0 transition-colors",
                      isSelected ? "bg-tech-cyan text-tech-black" : "bg-white/5 group-hover:bg-white/10"
                    )}>
                       {isCompleted ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
                    </div>
                    <div className="flex-1">
                       <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-0.5 opacity-40">Step 0{index + 1}</div>
                       <div className="font-black text-sm tracking-tight">{step.name}</div>
                    </div>
                    {isCompleted && !isSelected && <div className="text-tech-cyan text-xs font-mono font-bold">${selections[step.id].price}</div>}
                  </button>
                );
              })}
           </div>

           {/* Active Configuration */}
           <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-[2rem] bg-tech-cyan/10 flex items-center justify-center text-tech-cyan border border-tech-cyan/20">
                         <currentStep.icon size={32} />
                      </div>
                      <div>
                         <h2 className="text-4xl font-black text-white tracking-tight uppercase italic">{currentStep.name}</h2>
                         <p className="text-tech-silver/40 font-medium text-sm italic">Select your core component</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 gap-4">
                      {currentStep.options.map((option) => {
                        const isSelected = selections[currentStep.id]?.id === option.id;
                        
                        return (
                          <button
                            key={option.id}
                            onClick={() => handleSelect(option)}
                            className={cn(
                              "flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 rounded-[2rem] border transition-all gap-4 group",
                              isSelected 
                                ? "bg-white text-tech-black border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
                                : "bg-white/5 border-white/5 text-white hover:bg-white/10"
                            )}
                          >
                             <div className="flex items-center gap-4">
                                <div className={cn(
                                  "w-6 h-6 rounded-full border flex items-center justify-center transition-colors",
                                  isSelected ? "border-tech-black bg-tech-black" : "border-white/20"
                                )}>
                                   {isSelected && <div className="w-2.5 h-2.5 bg-tech-cyan rounded-full shadow-[0_0_10px_rgba(0,255,255,1)]" />}
                                </div>
                                <span className="text-lg font-black tracking-tight">{option.name}</span>
                             </div>
                             <div className={cn(
                               "text-2xl font-mono font-bold tracking-tighter",
                               isSelected ? "text-tech-black" : "text-tech-cyan"
                             )}>
                                ${option.price}
                             </div>
                          </button>
                        );
                      })}
                   </div>

                   <div className="pt-10 flex justify-between">
                     <Button 
                      variant="ghost" 
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      disabled={activeStep === 0}
                      className="text-tech-silver/40 hover:text-white font-black uppercase text-xs tracking-widest disabled:opacity-0"
                     >
                       Previous Step
                     </Button>
                     <Button 
                      onClick={() => setActiveStep(prev => Math.min(buildSteps.length - 1, prev + 1))}
                      disabled={!isStepComplete(currentStep.id) || activeStep === buildSteps.length - 1}
                      className="bg-white/5 border border-white/10 text-white hover:bg-tech-cyan hover:text-tech-black hover:border-tech-cyan rounded-2xl px-10 py-8 font-black uppercase tracking-widest text-xs group"
                     >
                       Next Step
                       <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </Button>
                   </div>
                </motion.div>
              </AnimatePresence>
           </div>

           {/* Build Summary Card */}
           <div className="lg:col-span-3 lg:sticky lg:top-40">
              <div className="glass-card rounded-[3rem] p-10 border border-white/10 space-y-8 relative overflow-hidden">
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-tech-cyan/10 blur-[80px] rounded-full" />
                 
                 <h3 className="text-2xl font-black text-white italic">Build <span className="text-tech-cyan">Blueprint</span></h3>

                 <div className="space-y-4">
                    {buildSteps.map((step) => (
                      <div key={step.id} className="flex justify-between items-start gap-4">
                         <div className="space-y-1">
                            <div className="text-[9px] font-black uppercase tracking-widest text-tech-silver/20">{step.name}</div>
                            <div className={cn(
                              "text-xs font-bold transition-colors",
                              selections[step.id] ? "text-white" : "text-tech-silver/10 italic"
                            )}>
                              {selections[step.id]?.name || "Unconfigured"}
                            </div>
                         </div>
                         {selections[step.id] && (
                           <button 
                            onClick={() => {
                              const newSelections = { ...selections };
                              delete newSelections[step.id];
                              setSelections(newSelections);
                            }}
                            className="text-tech-magenta hover:scale-110 transition-transform pt-4"
                           >
                              <Trash2 size={12} />
                           </button>
                         )}
                      </div>
                    ))}
                 </div>

                 <div className="pt-8 border-t border-white/5 space-y-6">
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-black uppercase text-tech-silver/40 tracking-widest">Total Outcome</span>
                       <span className="text-4xl font-mono text-tech-cyan leading-none font-bold">${totalPrice}</span>
                    </div>

                    <Button 
                      onClick={handleBuildReady}
                      disabled={!allStepsComplete}
                      className={cn(
                        "w-full py-8 rounded-2xl font-black apple-transition text-base",
                        allStepsComplete 
                          ? "bg-tech-cyan text-tech-black hover:bg-white shadow-[0_0_30px_rgba(0,255,255,0.2)]" 
                          : "bg-white/5 text-tech-silver/10 border-white/5 cursor-not-allowed"
                      )}
                    >
                       DEPLOY SYSTEM
                       <ChevronRight size={20} className="ml-2" />
                    </Button>
                 </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-tech-silver/20">
                 <ShieldCheck size={16} />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Compatibility</span>
              </div>
           </div>
        </div>
      </div>

      {/* Decorative BG pc.png */}
      <div className="fixed -bottom-40 -right-40 opacity-10 pointer-events-none scale-150 grayscale blur-sm">
         <img src="/pc.png" alt="PC Blueprint" />
      </div>
    </main>
  );
}
