import { useState, useEffect } from "react";

export function AnimSync() {
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncing((s) => !s);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-24 w-full items-center justify-center gap-6 overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper-2)] p-4 shadow-inner">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 rounded-sm border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper)] shadow-sm" />
        <div className="h-1 w-6 bg-[color:var(--color-graphite-400)]" />
      </div>
      
      <div className="flex flex-col items-center gap-1">
        <div className={`h-1 w-1 rounded-full ${syncing ? 'bg-[color:var(--color-ink)]' : 'bg-[color:var(--color-graphite-400)]'} transition-colors duration-300`} />
        <div className={`h-1 w-1 rounded-full ${!syncing ? 'bg-[color:var(--color-ink)]' : 'bg-[color:var(--color-graphite-400)]'} transition-colors duration-300 delay-100`} />
        <div className={`h-1 w-1 rounded-full ${syncing ? 'bg-[color:var(--color-ink)]' : 'bg-[color:var(--color-graphite-400)]'} transition-colors duration-300 delay-200`} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 rounded-sm border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper)] shadow-sm" />
        <div className="h-1 w-6 bg-[color:var(--color-graphite-400)]" />
      </div>
    </div>
  );
}
