import { useState, useEffect } from "react";

export function VoiceDemoOverlay() {
  const fullText = "Terima dari Supplier Budi, 100 karton Milo";
  const [displayedText, setDisplayedText] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    
    const runAnimation = async () => {
      while (mounted) {
        // Reset state
        setDisplayedText("");
        setShowResponse(false);
        setIsTyping(true);
        
        await sleep(500); // Initial pause
        if (!mounted) break;
        
        // Typing effect
        for (let i = 1; i <= fullText.length; i++) {
          if (!mounted) break;
          setDisplayedText(fullText.slice(0, i));
          await sleep(60); // Typing speed
        }
        
        if (!mounted) break;
        setIsTyping(false);
        await sleep(600); // Pause before showing response
        
        if (!mounted) break;
        setShowResponse(true);
        
        await sleep(5000); // Wait before looping
      }
    };
    
    runAnimation();
    
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[340px] bg-[color:var(--color-ink)]/80 border border-[color:var(--color-paper)]/20 p-5 backdrop-blur-md flex flex-col gap-5">
      <div className="self-end bg-[color:var(--color-paper)] text-[color:var(--color-ink)] px-4 py-3 text-[15px] font-medium leading-snug rounded-t-2xl rounded-bl-2xl max-w-[90%] shadow-lg min-h-[48px]">
        "{displayedText}{isTyping && <span className="animate-pulse">|</span>}"
      </div>
      
      <div 
        className={`self-start bg-[color:var(--color-graphite-900)] text-[color:var(--color-paper)] border border-[color:var(--color-border-strong)] px-4 py-4 text-sm rounded-t-2xl rounded-br-2xl max-w-[100%] w-full shadow-lg transition-all duration-500 transform ${showResponse ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <p className="font-semibold tracking-wider text-[11px] uppercase text-[color:var(--color-graphite-400)] mb-3">GRN Confirmed</p>
        <div className="flex justify-between items-center border-b border-[color:var(--color-border-strong)] pb-3 mb-3">
          <span className="font-display text-lg">Milo 1kg</span>
          <span className="text-green-400 font-mono">+100 ctn</span>
        </div>
        <p className="text-[13px] text-[color:var(--color-graphite-400)]">Stock updated to 450 ctn in Zone A.</p>
      </div>
    </div>
  );
}
