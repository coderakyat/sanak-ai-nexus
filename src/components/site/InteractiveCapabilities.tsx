import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";

const capabilities = [
  { n: "01", t: "Conversational interface", d: "Floor workers run operations by speaking or typing naturally. No IT training or laptops required." },
  { n: "02", t: "Centralized stock list", d: "One source of truth for all your items. No more duplicate codes across branches or spreadsheets." },
  { n: "03", t: "100% Audit trail", d: "Every movement is tracked. Know exactly who moved what, when, and for which order." },
  { n: "04", t: "Start in 48 hours", d: "No long implementation runways. Land the system where it hurts most, and expand from there." },
  { n: "05", t: "Built for mid-market", d: "Engineered for distributors that have outgrown Excel but don't want the heavy burden of legacy ERPs." },
  { n: "06", t: "Field-worker first", d: "Designed for the people actually doing the work in a noisy warehouse, not just the managers in the office." },
];

export function InteractiveCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-12 min-h-[600px]">
      <div className="md:col-span-5 flex flex-col">
        <Reveal>
          <p className="editorial-eyebrow text-[color:var(--color-graphite-400)]">
            [ Capabilities / 03 ]
          </p>
          <h2 className="mt-8 display-xl">
            Built for inventory clarity. <br />
            <span className="text-[color:var(--color-graphite-500)]">Designed for execution.</span>
          </h2>
        </Reveal>
        
        {/* Dynamic Visual Panel */}
        <Reveal delay={0.2} className="mt-12 flex-1 relative bg-[color:var(--color-paper-2)] border border-[color:var(--color-border)] min-h-[400px] overflow-hidden flex items-center justify-center p-8">
          
          {/* 01: Conversational */}
          <div className={`absolute inset-0 p-8 transition-opacity duration-500 flex flex-col gap-4 justify-center ${activeIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] p-4 rounded-t-xl rounded-br-xl self-start max-w-[80%] text-sm">Pick 50 ctn of Indomie from Rack A1</div>
            <div className="bg-[color:var(--color-border-strong)] text-[color:var(--color-ink)] p-4 rounded-t-xl rounded-bl-xl self-end max-w-[80%] text-sm flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Task confirmed. Stock deducted.
            </div>
          </div>

          {/* 02: Centralized */}
          <div className={`absolute inset-0 p-8 transition-opacity duration-500 flex flex-col gap-2 justify-center ${activeIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="w-full bg-[color:var(--color-ink)] h-8 flex items-center px-4 gap-4 rounded-t-md">
              <div className="w-4 h-4 bg-[color:var(--color-graphite-600)]" />
              <div className="w-1/3 h-2 bg-[color:var(--color-graphite-600)]" />
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full border border-[color:var(--color-border-strong)] h-10 flex items-center px-4 gap-4">
                 <div className="w-4 h-4 border border-[color:var(--color-graphite-400)]" />
                 <div className="w-1/4 h-2 bg-[color:var(--color-graphite-400)]" />
                 <div className="w-1/4 h-2 bg-[color:var(--color-graphite-300)] ml-auto" />
              </div>
            ))}
          </div>

          {/* 03: Audit Trail */}
          <div className={`absolute inset-0 p-8 transition-opacity duration-500 flex flex-col gap-4 justify-center ${activeIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            {[
              { t: "10:42 AM", u: "Budi", a: "Received 100 ctn" },
              { t: "11:15 AM", u: "System", a: "Moved to Zone B" },
              { t: "14:20 PM", u: "Andi", a: "Picked 15 ctn" },
            ].map((log, i) => (
              <div key={i} className="flex items-start gap-4 text-sm font-mono border-l-2 border-[color:var(--color-ink)] pl-4">
                <span className="text-[color:var(--color-graphite-400)] min-w-[70px]">{log.t}</span>
                <span className="font-bold">{log.u}</span>
                <span className="text-[color:var(--color-graphite-600)]">{log.a}</span>
              </div>
            ))}
          </div>

          {/* 04: Start in 48 hours */}
          <div className={`absolute inset-0 p-8 transition-opacity duration-500 flex items-center justify-center ${activeIndex === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="flex gap-2 items-center w-full">
               <div className="flex-1 h-2 bg-[color:var(--color-ink)] rounded-full" />
               <div className="w-4 h-4 bg-[color:var(--color-ink)] rounded-full animate-bounce" />
               <div className="flex-1 h-2 bg-[color:var(--color-border-strong)] rounded-full" />
               <div className="w-4 h-4 bg-[color:var(--color-border-strong)] rounded-full" />
            </div>
            <div className="absolute bottom-12 font-display text-4xl">Day 02</div>
          </div>

          {/* 05: Mid-market */}
          <div className={`absolute inset-0 p-8 transition-opacity duration-500 flex flex-col gap-4 justify-center ${activeIndex === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="flex gap-4 h-1/3">
              <div className="flex-1 border border-[color:var(--color-border-strong)] bg-white shadow-sm flex items-center justify-center font-display text-2xl text-[color:var(--color-graphite-400)]">WMS</div>
              <div className="flex-1 border border-[color:var(--color-border-strong)] bg-white shadow-sm flex items-center justify-center font-display text-2xl text-[color:var(--color-graphite-400)]">OMS</div>
            </div>
            <div className="w-full flex-1 border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink)] shadow-sm flex items-center justify-center font-display text-3xl text-[color:var(--color-paper)]">SANAK CORE</div>
          </div>

          {/* 06: Field-worker first */}
          <div className={`absolute inset-0 p-8 transition-opacity duration-500 flex items-center justify-center ${activeIndex === 5 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <div className="w-[240px] h-[400px] border-4 border-[color:var(--color-ink)] rounded-3xl p-4 flex flex-col gap-4">
               <div className="w-1/2 h-4 bg-[color:var(--color-border-strong)] mx-auto rounded-full mb-4" />
               <div className="flex-1 bg-[color:var(--color-ink)] rounded-xl flex items-center justify-center text-[color:var(--color-paper)] font-display text-xl">SCAN</div>
               <div className="flex-1 bg-[color:var(--color-border-strong)] rounded-xl flex items-center justify-center text-[color:var(--color-graphite-600)] font-display text-xl">SPEAK</div>
             </div>
          </div>

        </Reveal>
      </div>

      <div className="md:col-span-7">
        <ol className="divide-y divide-[color:var(--color-border-strong)]">
          {capabilities.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.04}>
              <li 
                className={`grid grid-cols-12 gap-6 py-8 cursor-pointer transition-colors duration-300 ${activeIndex === i ? 'bg-[color:var(--color-paper-2)] -mx-6 px-6 border-l-4 border-l-[color:var(--color-ink)]' : 'hover:bg-[color:var(--color-paper-2)]/50'}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                <span className={`col-span-2 editorial-eyebrow md:col-span-1 transition-colors ${activeIndex === i ? 'text-[color:var(--color-ink)] font-bold' : 'text-[color:var(--color-graphite-400)]'}`}>
                  {c.n}
                </span>
                <h3 className={`col-span-10 font-display text-2xl md:col-span-4 transition-colors ${activeIndex === i ? 'text-[color:var(--color-ink)]' : ''}`}>
                  {c.t}
                </h3>
                <p className="col-span-12 text-[color:var(--color-graphite-300)] md:col-span-7">
                  {c.d}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}
