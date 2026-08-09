import { useState } from "react";
import { services } from "@/data/services";
import { SectionLabel } from "@/components/ui-kit/SectionLabel";
import { Reveal } from "@/components/ui-kit/Reveal";

export function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Services</SectionLabel>

        <ul className="mt-14 border-t border-border">
          {services.map((service) => {
            const isActive = active === service.index;
            return (
              <li
                key={service.index}
                className="border-b border-border"
                onMouseEnter={() => setActive(service.index)}
                onMouseLeave={() => setActive(null)}
              >
                <Reveal>
                  <div
                    className="group flex flex-col gap-4 py-8 focus-within:text-foreground sm:flex-row sm:items-baseline sm:gap-10"
                    tabIndex={0}
                    onFocus={() => setActive(service.index)}
                    onBlur={() => setActive(null)}
                  >
                    <span className="label-mono w-10 shrink-0 text-accent">
                      {service.index}
                    </span>
                    <h3
                      className={`font-display text-[clamp(1.6rem,4.4vw,3.2rem)] font-medium uppercase leading-[1.02] tracking-[-0.04em] transition-[color,transform] duration-500 sm:flex-1 ${
                        isActive
                          ? "translate-x-2 text-accent"
                          : "text-foreground/85"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`max-w-xs text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 sm:text-right ${
                        isActive ? "opacity-100" : "sm:opacity-40"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
