import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { disciplines, site, stats } from "@/data/site";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionLabel } from "@/components/ui-kit/SectionLabel";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value.replace(/\d/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const digits = value.match(/\d+/);
    if (!digits) {
      setDisplay(value);
      return;
    }
    const target = Number(digits[0]);
    const pad = digits[0].length;
    let frame = 0;
    const total = 32;
    const id = window.setInterval(() => {
      frame += 1;
      const current = Math.round((target * frame) / total);
      setDisplay(value.replace(/\d+/, String(current).padStart(pad, "0")));
      if (frame >= total) window.clearInterval(id);
    }, 24);
    return () => window.clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl tracking-tight sm:text-5xl">
      {display}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>About</SectionLabel>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,5.2vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.04em]">
                DESIGN IS NOT
                <br />
                JUST HOW
                <br />
                <span className="text-accent">IT LOOKS.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <StatValue value={stat.value} />
                  <p className="label-mono mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.05}>
              <p className="text-base leading-relaxed text-secondary-foreground sm:text-lg">
                {site.about}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {site.aboutSecondary}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 border-t border-border">
              <ul>
                {disciplines.map((discipline) => (
                  <li
                    key={discipline}
                    className="flex items-center justify-between border-b border-border py-4"
                  >
                    <span className="label-mono text-foreground">{discipline}</span>
                    <span aria-hidden className="h-px w-10 bg-accent/50" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
