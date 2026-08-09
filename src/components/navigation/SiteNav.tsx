import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { Magnetic } from "@/components/ui-kit/Magnetic";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between border px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled
            ? "border-border bg-surface backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          to="/"
          hash="home"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-8 w-8 items-center justify-center border border-accent/50 font-mono text-xs text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            {site.shortName}
          </span>
          <span className="hidden font-display text-sm tracking-[0.18em] sm:block">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to="/"
                hash={item.hash.replace("#", "")}
                className="label-mono text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="label-mono text-muted-foreground">Available</span>
          </span>

          <Magnetic className="hidden sm:inline-block">
            <a
              href="#contact"
              data-cursor="hover"
              className="label-mono border border-accent/50 px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Let&apos;s Talk
            </a>
          </Magnetic>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-background/97 px-8 backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              to="/"
              hash={item.hash.replace("#", "")}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-border py-5 font-display text-3xl tracking-tight text-foreground"
            >
              <span className="label-mono text-accent">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
          <p className="label-mono mt-8 text-muted-foreground">
            {site.availability}
          </p>
        </div>
      )}
    </header>
  );
}
