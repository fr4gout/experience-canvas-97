import { useMemo, useState } from "react";
import { skills } from "@/data/skills";
import { SectionLabel } from "@/components/ui-kit/SectionLabel";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const RADIUS = 190;
const CENTER = 250;

export function SkillsSection() {
  const [active, setActive] = useState<string | null>(null);
  const reduced = usePrefersReducedMotion();

  const nodes = useMemo(
    () =>
      skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
        const ring = i % 2 === 0 ? RADIUS : RADIUS * 0.68;
        return {
          ...skill,
          x: CENTER + Math.cos(angle) * ring,
          y: CENTER + Math.sin(angle) * ring,
        };
      }),
    [],
  );

  return (
    <section className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,4.2vw,3.2rem)] font-medium leading-[1] tracking-[-0.04em]">
              A CONNECTED
              <br />
              TOOLSET
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Design, build and craft disciplines that overlap in practice — hover a
              node to isolate it.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2 lg:hidden">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="label-mono border border-border px-3 py-2 text-muted-foreground"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:col-span-8 lg:block">
            <svg
              viewBox="0 0 500 500"
              role="img"
              aria-label="Skill constellation: Figma, UI/UX, prototyping, design systems, React, TypeScript, Tailwind CSS, motion design, graphic design and branding"
              className="mx-auto h-auto w-full max-w-2xl"
            >
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                fill="none"
                stroke="rgba(107,191,255,0.14)"
              />
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS * 0.68}
                fill="none"
                stroke="rgba(107,191,255,0.1)"
              />
              {nodes.map((node) => (
                <line
                  key={`line-${node.name}`}
                  x1={CENTER}
                  y1={CENTER}
                  x2={node.x}
                  y2={node.y}
                  stroke={
                    active === node.name
                      ? "rgba(107,191,255,0.8)"
                      : "rgba(140,170,220,0.16)"
                  }
                />
              ))}
              <circle cx={CENTER} cy={CENTER} r={5} fill="#6BBFFF">
                {!reduced && (
                  <animate
                    attributeName="r"
                    values="4;7;4"
                    dur="3.6s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              {nodes.map((node) => (
                <g
                  key={node.name}
                  onMouseEnter={() => setActive(node.name)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-default"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={active === node.name ? 7 : 4}
                    fill={active === node.name ? "#6BBFFF" : "#2b3a55"}
                    stroke="#6BBFFF"
                    strokeOpacity={0.6}
                  />
                  <text
                    x={node.x}
                    y={node.y - 14}
                    textAnchor="middle"
                    fontSize="11"
                    letterSpacing="1.6"
                    fill={active === node.name ? "#F2F6FF" : "#8794AD"}
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {node.name.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
