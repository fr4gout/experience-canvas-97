import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useFinePointer } from "@/hooks/use-fine-pointer";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/** Wraps children in a subtle magnetic pull toward the cursor. */
export function Magnetic({ children, className, strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const active = fine && !reduced;

  const onMove = (event: MouseEvent<HTMLSpanElement>) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={active ? { x: springX, y: springY } : undefined}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}
