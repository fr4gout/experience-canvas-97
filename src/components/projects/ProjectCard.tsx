import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="group border-t border-border">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        data-cursor="view"
        className="block py-8 focus-visible:outline-offset-8 sm:py-12"
        aria-label={`${project.title} — open case study`}
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="label-mono text-accent">{project.index}</span>
              <span aria-hidden className="h-px flex-1 origin-left scale-x-0 bg-accent/60 transition-transform duration-700 group-hover:scale-x-100" />
              <span className="label-mono text-muted-foreground">{project.year}</span>
            </div>

            <h3 className="mt-6 font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2">
              {project.title}
            </h3>
            <p className="label-mono mt-3 text-muted-foreground">{project.category}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <span className="label-mono mt-7 inline-flex items-center gap-2 text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Open case study <ArrowUpRight size={13} aria-hidden />
            </span>
          </div>

          <div className="relative overflow-hidden border border-border lg:col-span-7">
            <motion.img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              width={1280}
              height={960}
              style={reduced ? undefined : { y }}
              className="aspect-[16/10] w-full scale-105 object-cover transition-[transform,filter] duration-[900ms] ease-out group-hover:scale-110 group-hover:brightness-110"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-background/30 transition-opacity duration-700 group-hover:opacity-0"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
