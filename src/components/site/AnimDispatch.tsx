import { useState, useEffect } from "react";

export function AnimDispatch() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + 25;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-24 w-full flex-col justify-center gap-4 overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper-2)] p-6 shadow-inner">
      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-graphite-500)]">
        <span className={progress >= 0 ? "text-[color:var(--color-ink)] font-bold" : ""}>Recv</span>
        <span className={progress >= 50 ? "text-[color:var(--color-ink)] font-bold" : ""}>Pack</span>
        <span className={progress >= 100 ? "text-[color:var(--color-ink)] font-bold" : ""}>Ship</span>
      </div>
      <div className="relative h-1 w-full bg-[color:var(--color-border-strong)] overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-[color:var(--color-ink)] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
