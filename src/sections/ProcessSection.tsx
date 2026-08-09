import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { processSteps } from "@/data/services";
import { SectionLabel } from "@/components/ui-kit/SectionLabel";

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 40%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-6 font-display text-[clamp(1.8rem,4.4vw,3.4rem)] font-medium leading-[1] tracking-[-0.04em]">
          SIX STAGES, NO SHORTCUTS
        </h2>

        <div ref={ref} className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-3 h-px bg-border" />
          <motion.div
            aria-hidden
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-3 h-px origin-left bg-accent"
          />

          <ol className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step, i) => {
              const start = i / processSteps.length;
              return (
                <ProcessStepItem
                  key={step.index}
                  index={step.index}
                  title={step.title}
                  description={step.description}
                  progress={scrollYProgress}
                  threshold={start}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessStepItem({
  index,
  title,
  description,
  progress,
  threshold,
}: {
  index: string;
  title: string;
  description: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  threshold: number;
}) {
  const opacity = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.1],
    [0.35, 1],
  );
  const dotScale = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.1],
    [0.6, 1],
  );

  return (
    <motion.li style={{ opacity }} className="relative pt-0">
      <motion.span
        aria-hidden
        style={{ scale: dotScale }}
        className="absolute -top-[1.05rem] left-0 block h-2 w-2 rounded-full bg-accent"
      />
      <span className="label-mono block text-accent">{index}</span>
      <h3 className="mt-3 font-display text-lg uppercase tracking-tight">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.li>
  );
}
