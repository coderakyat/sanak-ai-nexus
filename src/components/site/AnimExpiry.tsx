import { useState, useEffect } from "react";

export function AnimExpiry() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-24 w-full flex-col justify-center gap-3 overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink)] p-4 shadow-inner">
      {/* Item 1 - Safe */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[color:var(--color-graphite-500)]" />
          <div className="h-2 w-16 rounded-sm bg-[color:var(--color-graphite-600)]" />
        </div>
        <div className="font-mono text-xs text-[color:var(--color-graphite-500)]">120 days</div>
      </div>
      
      {/* Item 2 - Animated Expiry */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            className={`h-2 w-2 rounded-full transition-colors duration-500 ${step === 0 ? "bg-[color:var(--color-graphite-500)]" : step === 1 ? "bg-amber-400" : "bg-red-500 animate-pulse"}`} 
          />
          <div className="h-2 w-24 rounded-sm bg-[color:var(--color-paper)]" />
        </div>
        <div 
          className={`font-mono text-xs transition-colors duration-500 ${step === 0 ? "text-[color:var(--color-graphite-500)]" : step === 1 ? "text-amber-400" : "text-red-500"}`}
        >
          {step === 0 ? "45 days" : step === 1 ? "14 days" : "EXPIRING"}
        </div>
      </div>
    </div>
  );
}
