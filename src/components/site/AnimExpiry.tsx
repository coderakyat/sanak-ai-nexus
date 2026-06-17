import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export function AnimExpiry() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-28 w-full flex-col justify-center gap-4 overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper-2)] p-6 shadow-inner">
      {/* Safe timeline */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <div className="h-1.5 w-12 rounded-sm bg-[color:var(--color-graphite-600)]" />
            <div className="font-mono text-[10px] text-[color:var(--color-graphite-500)]">120 days</div>
          </div>
          <div className="h-1.5 w-full bg-[color:var(--color-border-strong)] rounded-full overflow-hidden">
            <div className="h-full bg-[color:var(--color-graphite-500)] w-3/4" />
          </div>
        </div>
      </div>
      
      {/* Expiring timeline */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <div className="h-1.5 w-16 rounded-sm bg-[color:var(--color-ink)]" />
            <div 
              className={`font-mono text-[10px] transition-colors duration-500 ${step < 2 ? "text-[color:var(--color-graphite-500)]" : step === 2 ? "text-amber-500 font-bold" : "text-red-500 font-bold"}`}
            >
              {step < 2 ? "45 days" : step === 2 ? "14 days" : "EXPIRING"}
            </div>
          </div>
          <div className="h-1.5 w-full bg-[color:var(--color-border-strong)] rounded-full overflow-hidden relative">
            <div 
              className={`absolute top-0 left-0 h-full transition-all duration-500 ease-linear ${step < 2 ? "bg-[color:var(--color-graphite-500)] w-1/2" : step === 2 ? "bg-amber-500 w-1/4" : "bg-red-500 w-[5%]"}`} 
            />
          </div>
        </div>
        <div className={`shrink-0 transition-opacity duration-300 ${step === 3 ? "opacity-100" : "opacity-0"}`}>
          <AlertTriangle className="h-5 w-5 text-red-500" />
        </div>
      </div>
    </div>
  );
}
