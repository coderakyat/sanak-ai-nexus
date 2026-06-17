import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  // Duplicate items to ensure smooth infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex w-full overflow-hidden bg-[color:var(--color-paper-2)] py-4">
      {/* Gradient masks for smooth fade at edges */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[color:var(--color-paper-2)] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[color:var(--color-paper-2)] to-transparent" />

      <motion.div
        className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={i} className="flex items-center gap-12 sm:gap-16">
            <span className="font-display text-2xl text-[color:var(--color-graphite-300)] whitespace-nowrap transition-colors hover:text-[color:var(--color-ink)]">
              {item}
            </span>
            <span className="text-[color:var(--color-graphite-500)] text-sm">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
