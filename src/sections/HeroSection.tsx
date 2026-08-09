import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { Magnetic } from "@/components/ui-kit/Magnetic";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const HEADLINE = ["I DESIGN DIGITAL", "EXPERIENCES THAT", "FEEL DIFFERENT."];

export function HeroSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-20"
    >
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 -z-0 mx-auto h-full w-full max-w-5xl"
      >
        <HeroCanvas />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="label-mono text-accent"
        >
          UI/UX Designer · Creative Designer
        </motion.p>

        <h1 className="mt-6 font-display text-[clamp(2.4rem,8.4vw,7rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          {HEADLINE.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.12 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {i === 2 ? (
                  <>
                    FEEL <span className="text-accent">DIFFERENT.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#work"
                data-cursor="hover"
                className="label-mono inline-flex items-center gap-3 bg-accent px-6 py-4 text-accent-foreground transition-opacity hover:opacity-90"
              >
                View My Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                data-cursor="hover"
                className="label-mono inline-flex items-center gap-3 border border-border-strong px-6 py-4 text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Let&apos;s Talk
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <span className="label-mono flex items-center gap-2 text-muted-foreground">
          <ArrowDown size={12} className="animate-bounce" aria-hidden />
          Scroll
        </span>
      </div>
    </section>
  );
}
