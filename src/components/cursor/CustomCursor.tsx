import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useFinePointer } from "@/hooks/use-fine-pointer";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type CursorState = "default" | "hover" | "view";

/**
 * Desktop-only custom cursor.
 * Elements opt in with data-cursor="hover" | "view".
 */
export function CustomCursor() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 900, damping: 60, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 900, damping: 60, mass: 0.35 });

  const enabled = fine && !reduced;

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-none-desktop");

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const marked = target?.closest?.("[data-cursor]") as HTMLElement | null;
      if (marked) {
        setState((marked.dataset.cursor as CursorState) ?? "hover");
        return;
      }
      const interactive = target?.closest?.(
        "a, button, input, textarea, select, [role='button']",
      );
      setState(interactive ? "hover" : "default");
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = state === "view" ? 104 : state === "hover" ? 48 : 12;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-accent/70 bg-accent/10 backdrop-blur-[1px]"
        animate={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          backgroundColor:
            state === "default"
              ? "rgba(107,191,255,0.9)"
              : "rgba(107,191,255,0.12)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        {state === "view" && (
          <span className="label-mono whitespace-nowrap text-accent">
            View Project →
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
