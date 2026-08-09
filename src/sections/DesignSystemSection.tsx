import { SectionLabel } from "@/components/ui-kit/SectionLabel";
import { Reveal } from "@/components/ui-kit/Reveal";
import { ArrowRight, Compass, Layers, PenTool, Sparkles } from "lucide-react";

const TOKENS = [
  { name: "background", value: "#060810" },
  { name: "surface", value: "rgba(14,18,36,.7)" },
  { name: "accent", value: "#6BBFFF" },
  { name: "foreground", value: "#F2F6FF" },
  { name: "muted", value: "#8794AD" },
];

const ICONS = [Layers, PenTool, Compass, Sparkles, ArrowRight];

export function DesignSystemSection() {
  return (
    <section className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Design System</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,4.4vw,3.4rem)] font-medium leading-[1] tracking-[-0.04em]">
              THE SYSTEM BEHIND THE SCREENS
            </h2>
          </div>
          <p className="label-mono max-w-xs text-muted-foreground">
            Live components · hover to inspect states
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          <Panel title="Typography">
            <p className="font-display text-3xl tracking-tight">Display / 32</p>
            <p className="mt-2 text-base text-secondary-foreground">Body / 16 — regular</p>
            <p className="label-mono mt-2 text-muted-foreground">Label / mono 11</p>
          </Panel>

          <Panel title="Color">
            <ul className="space-y-2">
              {TOKENS.map((token) => (
                <li key={token.name} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-5 w-5 border border-border-strong"
                    style={{ background: token.value }}
                  />
                  <span className="label-mono text-muted-foreground">{token.name}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Buttons">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="label-mono bg-accent px-4 py-3 text-accent-foreground transition-opacity hover:opacity-90"
              >
                Primary
              </button>
              <button
                type="button"
                className="label-mono border border-border-strong px-4 py-3 transition-colors hover:border-accent hover:text-accent"
              >
                Secondary
              </button>
              <button
                type="button"
                className="label-mono px-4 py-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                Ghost
              </button>
            </div>
          </Panel>

          <Panel title="Inputs">
            <label className="label-mono block text-muted-foreground" htmlFor="ds-email">
              Email
            </label>
            <input
              id="ds-email"
              type="email"
              placeholder="name@studio.com"
              className="mt-2 w-full border border-input bg-transparent px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <div className="mt-3 flex items-center gap-3">
              <span className="h-4 w-8 border border-accent/60 p-[2px]">
                <span className="block h-full w-1/2 bg-accent" />
              </span>
              <span className="label-mono text-muted-foreground">Toggle · on</span>
            </div>
          </Panel>

          <Panel title="Cards & Nav">
            <div className="border border-border p-4 transition-colors hover:border-accent/60">
              <span className="label-mono text-accent">01</span>
              <p className="mt-2 font-display text-lg tracking-tight">Card title</p>
              <p className="text-xs text-muted-foreground">Supporting metadata</p>
            </div>
            <div className="mt-4 flex gap-4">
              {["Home", "Work", "About"].map((item, i) => (
                <span
                  key={item}
                  className={`label-mono ${i === 0 ? "text-accent" : "text-muted-foreground"}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </Panel>

          <Panel title="Icons">
            <div className="flex flex-wrap gap-3">
              {ICONS.map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} aria-hidden />
                </span>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="bg-background p-6 transition-colors hover:bg-surface sm:p-8">
      <h3 className="label-mono mb-5 text-accent">{title}</h3>
      {children}
    </Reveal>
  );
}
