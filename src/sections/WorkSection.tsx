import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionLabel } from "@/components/ui-kit/SectionLabel";
import { Reveal } from "@/components/ui-kit/Reveal";

export function WorkSection() {
  return (
    <section id="work" className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <Reveal>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.04em]">
                PROJECTS, IN DETAIL
              </h2>
            </Reveal>
          </div>
          <p className="label-mono max-w-xs text-muted-foreground">
            Four selected engagements · product, platform, brand and mobile
          </p>
        </div>

        <div className="mt-14">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
