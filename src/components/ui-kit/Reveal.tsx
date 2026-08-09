import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Scroll-triggered reveal that collapses to a no-op under reduced motion. */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const reduced = usePrefersReducedMotion();

  const hidden = { opacity: 0, y };
  const shown = { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      className={className ?? ""}
      initial={reduced ? shown : hidden}
      animate={reduced || inView ? shown : hidden}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
