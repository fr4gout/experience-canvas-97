import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li";
}

/** Scroll-triggered reveal that collapses to a no-op under reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const reduced = usePrefersReducedMotion();
  const Component = motion[as];

  return (
    <Component
      ref={ref}
      className={className}
      initial={reduced ? undefined : { opacity: 0, y }}
      animate={
        reduced ? undefined : inView ? { opacity: 1, y: 0 } : { opacity: 0, y }
      }
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
