import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { SiteNav } from "@/components/navigation/SiteNav";
import { SiteFooter } from "@/sections/SiteFooter";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionLabel } from "@/components/ui-kit/SectionLabel";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study`;
    const description = project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const next =
    projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length]!;

  return (
    <div className="relative min-h-dvh bg-background">
      <CustomCursor />
      <SiteNav />

      <main>
        <article>
          <header className="relative overflow-hidden border-b border-border pb-16 pt-36 sm:pt-44">
            <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />
            <div className="relative mx-auto max-w-7xl px-6">
              <Link
                to="/"
                hash="work"
                className="label-mono inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
              >
                <ArrowLeft size={13} aria-hidden /> Back to Work
              </Link>

              <p className="label-mono mt-10 text-accent">{project.index}</p>
              <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,5.5rem)] font-medium uppercase leading-[0.96] tracking-[-0.045em]">
                {project.title}
              </h1>

              <dl className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
                <div>
                  <dt className="label-mono text-muted-foreground">Category</dt>
                  <dd className="mt-2 text-sm text-secondary-foreground">
                    {project.category}
                  </dd>
                </div>
                <div>
                  <dt className="label-mono text-muted-foreground">Role</dt>
                  <dd className="mt-2 text-sm text-secondary-foreground">
                    {project.role}
                  </dd>
                </div>
                <div>
                  <dt className="label-mono text-muted-foreground">Year</dt>
                  <dd className="mt-2 text-sm text-secondary-foreground">
                    {project.year}
                  </dd>
                </div>
              </dl>
            </div>
          </header>

          <figure className="mx-auto max-w-7xl px-6 py-14">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={960}
              className="w-full border border-border object-cover"
            />
          </figure>

          <section className="mx-auto max-w-7xl px-6 pb-8">
            <SectionLabel>Overview</SectionLabel>
            <Reveal>
              <p className="mt-6 max-w-3xl font-display text-[clamp(1.3rem,3vw,2.2rem)] font-medium leading-[1.2] tracking-[-0.03em]">
                {project.caseStudy.overview}
              </p>
            </Reveal>
          </section>

          <div className="mx-auto max-w-7xl px-6 pb-16">
            {project.caseStudy.blocks.map((block, i) => (
              <Reveal key={block.heading}>
                <section className="grid gap-6 border-t border-border py-12 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <span className="label-mono text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 font-display text-2xl uppercase tracking-tight sm:text-3xl">
                      {block.heading}
                    </h2>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-base leading-relaxed text-secondary-foreground">
                      {block.body}
                    </p>
                    {block.points && (
                      <ul className="mt-6 space-y-3">
                        {block.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span aria-hidden className="mt-2 h-px w-5 shrink-0 bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              </Reveal>
            ))}

            <section className="border-t border-border py-12">
              <SectionLabel>Outcome</SectionLabel>
              <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
                {project.caseStudy.outcome.map((item) => (
                  <li key={item} className="bg-background p-6 text-sm text-secondary-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <nav
          aria-label="Next project"
          className="border-t border-border py-14"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-6">
            <div>
              <p className="label-mono text-muted-foreground">Next project</p>
              <Link
                to="/work/$slug"
                params={{ slug: next.slug }}
                data-cursor="view"
                className="mt-3 inline-flex items-center gap-4 font-display text-[clamp(1.6rem,4vw,3rem)] font-medium uppercase leading-none tracking-[-0.04em] transition-colors hover:text-accent"
              >
                {next.title} <ArrowUpRight size={26} aria-hidden />
              </Link>
            </div>
            <Link
              to="/"
              hash="work"
              className="label-mono border border-border-strong px-5 py-3 transition-colors hover:border-accent hover:text-accent"
            >
              Back to Work
            </Link>
          </div>
        </nav>
      </main>

      <SiteFooter />
    </div>
  );
}
