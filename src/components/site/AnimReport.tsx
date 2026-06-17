import { useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";

export function AnimReport() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((o) => !o);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-28 w-full items-end justify-center overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-paper-2)] shadow-inner relative">
      <div 
        className={`w-4/5 rounded-t-md border border-b-0 border-[color:var(--color-border-strong)] bg-[color:var(--color-paper)] p-4 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="h-4 w-4 text-[color:var(--color-ink)]" />
          <div className="h-2 w-20 rounded-sm bg-[color:var(--color-graphite-600)]" />
        </div>
        
        <div className="flex items-end gap-2 h-8">
          {[40, 70, 45, 90, 60].map((h, i) => (
            <div 
              key={i} 
              className="w-full rounded-t-sm bg-[color:var(--color-ink)] transition-all duration-500"
              style={{ 
                height: open ? `${h}%` : '0%',
                transitionDelay: open ? `${i * 100}ms` : '0ms'
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
