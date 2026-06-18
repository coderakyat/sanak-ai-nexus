import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "as"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "span";
}

export function Reveal({ children, delay = 0, y = 16, as = "div", ...rest }: RevealProps) {
  const Component = motion[as] as any;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
