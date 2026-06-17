import { useState, useEffect } from "react";
import { Database, Smartphone, Laptop } from "lucide-react";

export function AnimRealtime() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => !p);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-28 w-full items-center justify-between overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper-2)] p-6 shadow-inner relative">
      {/* Left: Mobile Input */}
      <div className={`flex flex-col items-center transition-transform duration-500 ${pulse ? 'scale-110' : 'scale-100'}`}>
        <Smartphone className={`h-6 w-6 ${pulse ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-graphite-400)]'} transition-colors duration-500`} />
        <div className="mt-2 h-1 w-6 rounded-full bg-[color:var(--color-border-strong)] overflow-hidden">
           <div className={`h-full bg-[color:var(--color-ink)] transition-all duration-300 ${pulse ? 'w-full' : 'w-0'}`} />
        </div>
      </div>

      {/* Middle: Data sync particles */}
      <div className="flex flex-1 items-center justify-center relative">
        <div className="absolute left-4 right-4 h-px bg-[color:var(--color-border-strong)] border-dashed" />
        <div 
          className={`absolute h-2 w-2 rounded-full bg-[color:var(--color-ink)] transition-all duration-[1200ms] ease-in-out ${pulse ? 'left-4 opacity-100' : 'left-[calc(100%-1rem)] opacity-0'}`} 
        />
        <Database className={`relative z-10 h-7 w-7 bg-[color:var(--color-paper-2)] p-1 transition-colors duration-300 ${pulse ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-graphite-500)]'}`} />
      </div>

      {/* Right: Dashboard Output */}
      <div className={`flex flex-col items-center transition-transform duration-500 delay-300 ${pulse ? 'scale-110' : 'scale-100'}`}>
        <Laptop className={`h-6 w-6 ${pulse ? 'text-[color:var(--color-ink)]' : 'text-[color:var(--color-graphite-400)]'} transition-colors duration-500`} />
        <div className="mt-2 flex gap-1">
          <div className={`h-2 w-2 rounded-sm transition-colors duration-500 delay-300 ${pulse ? 'bg-[color:var(--color-ink)]' : 'bg-[color:var(--color-border-strong)]'}`} />
          <div className={`h-2 w-2 rounded-sm transition-colors duration-500 delay-400 ${pulse ? 'bg-[color:var(--color-ink)]' : 'bg-[color:var(--color-border-strong)]'}`} />
        </div>
      </div>
    </div>
  );
}
