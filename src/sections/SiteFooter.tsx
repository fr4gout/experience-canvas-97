import { site, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-sm tracking-[0.18em]">{site.name}</p>
        <p className="label-mono flex items-center gap-2 text-muted-foreground">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.availability}
        </p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="label-mono text-muted-foreground transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <p className="label-mono mx-auto max-w-7xl px-6 py-5 text-muted-foreground">
          © 2026 — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
