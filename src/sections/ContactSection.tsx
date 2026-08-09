import { ArrowRight } from "lucide-react";
import { site, socials } from "@/data/site";
import { Magnetic } from "@/components/ui-kit/Magnetic";
import { Reveal } from "@/components/ui-kit/Reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-28 sm:py-40"
    >
      <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,8vw,7rem)] font-medium leading-[0.94] tracking-[-0.045em]">
            HAVE AN IDEA?
            <br />
            <span className="text-accent">LET&apos;S BUILD SOMETHING GREAT.</span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Magnetic>
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="label-mono inline-flex items-center gap-3 bg-accent px-7 py-5 text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start a Project <ArrowRight size={14} aria-hidden />
            </a>
          </Magnetic>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="label-mono text-muted-foreground">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-sm text-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                {site.email}
              </a>
              <p className="label-mono mt-6 text-muted-foreground">Based in</p>
              <p className="mt-2 text-sm text-secondary-foreground">{site.location}</p>
            </div>
            <ul className="space-y-2">
              <li className="label-mono text-muted-foreground">Elsewhere</li>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-secondary-foreground transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
