import { useState, useEffect } from "react";

export function AnimVoiceWave() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => !a);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex h-24 w-full items-center justify-center overflow-hidden rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink)] p-4 shadow-inner">
      <div className="flex items-end gap-1 h-12">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div 
            key={i}
            className={`w-2 rounded-t-sm bg-[color:var(--color-paper)] transition-all duration-300 ease-in-out`}
            style={{
              height: active ? `${Math.max(20, Math.random() * 100)}%` : '15%',
              transitionDelay: `${i * 50}ms`
            }}
          />
        ))}
      </div>
    </div>
  );
}
