import { useState, useEffect } from "react";
import { GitMerge, Settings } from "lucide-react";

export function AnimWorkflow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-28 w-full items-center justify-between overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper-2)] px-8 shadow-inner relative">
      
      {/* Input Block */}
      <div className={`h-8 w-8 shrink-0 rounded-sm bg-[color:var(--color-ink)] transition-transform duration-700 ease-in-out ${step === 0 ? 'translate-x-0 opacity-100' : 'translate-x-[40px] opacity-0'}`} />

      {/* Logic Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[color:var(--color-border-strong)] bg-[color:var(--color-paper)] transition-all duration-300 ${step === 1 ? 'scale-110 border-[color:var(--color-ink)] shadow-md' : 'scale-100'}`}>
           <Settings className={`h-5 w-5 text-[color:var(--color-graphite-500)] ${step === 1 ? 'animate-spin text-[color:var(--color-ink)]' : ''}`} />
        </div>
      </div>

      {/* Output Lanes */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className={`h-[2px] w-8 bg-[color:var(--color-border-strong)] transition-colors duration-300 ${step === 2 ? 'bg-[color:var(--color-ink)]' : ''}`} />
          <div className={`h-6 w-16 rounded-sm border transition-all duration-300 ${step === 2 ? 'border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)]' : 'border-[color:var(--color-border-strong)] bg-transparent text-transparent'}`}>
            <span className="flex h-full w-full items-center justify-center text-[10px] font-bold tracking-widest uppercase opacity-100">Approve</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`h-[2px] w-8 bg-[color:var(--color-border-strong)] transition-colors duration-300 ${step === 3 ? 'bg-[color:var(--color-ink)]' : ''}`} />
          <div className={`h-6 w-16 rounded-sm border transition-all duration-300 ${step === 3 ? 'border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)]' : 'border-[color:var(--color-border-strong)] bg-transparent text-transparent'}`}>
            <span className="flex h-full w-full items-center justify-center text-[10px] font-bold tracking-widest uppercase opacity-100">Review</span>
          </div>
        </div>
      </div>

    </div>
  );
}
