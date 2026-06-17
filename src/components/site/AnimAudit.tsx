import { useState, useEffect } from "react";
import { Lock, FileText } from "lucide-react";

export function AnimAudit() {
  const [rows, setRows] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRows((prev) => {
        if (prev.length >= 3) return [];
        return [...prev, prev.length];
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-28 w-full flex-col justify-end gap-2 overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper-2)] p-4 shadow-inner relative">
      <div className="absolute top-4 right-4 opacity-10">
        <Lock className="h-16 w-16" />
      </div>
      
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          className={`flex w-full items-center justify-between rounded-sm border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper)] p-2 transition-all duration-500 ease-out ${rows.includes(i) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <div className="flex items-center gap-3">
            <FileText className="h-3 w-3 text-[color:var(--color-graphite-400)]" />
            <div className="h-1.5 w-16 rounded-sm bg-[color:var(--color-graphite-600)]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-12 rounded-sm bg-[color:var(--color-graphite-300)]" />
            <Lock className="h-3 w-3 text-[color:var(--color-ink)]" />
          </div>
        </div>
      ))}
    </div>
  );
}
