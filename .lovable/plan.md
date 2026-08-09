# Next-Gen 3D Designer Portfolio

A cinematic, art-directed portfolio built around an interactive 3D centerpiece, editorial typography, and restrained premium motion. Cool-toned dark palette only (`#060810` base, `#6BBFFF` accent, `rgba(14,18,36,0.7)` surfaces).

## Pages

- `/` — Home: Hero (3D core), About, Selected Work, Services, Process, Design System showcase, Skills constellation, Contact, Footer.
- `/work/$slug` — Full case study: overview, problem, research, strategy, wireframes, design system, final UI, interaction, outcome, "Back to Work".

Each route gets its own title/description/OG metadata.

## Sections

**Floating nav** — identity mark left; Home/About/Work/Services/Contact center; availability dot + "Let's Talk" right. Shrinks on scroll; compact full-screen menu on mobile.

**Hero** — eyebrow `UI/UX DESIGNER · CREATIVE DESIGNER`, oversized headline with controlled line breaks, supporting paragraph, `VIEW MY WORK` / `LET'S TALK`, scroll indicator. 3D core sits behind/between the type, not on top of it.

**3D centerpiece** — abstract "design core": metallic geometric shell, transparent glass layers, thin emissive line work, floating wireframe UI planes, sparse particles, cool blue emissive lighting. Slow idle rotation, subtle parallax to cursor, scroll-driven tilt/scale. Lazy-loaded, capped DPR, paused off-screen, static styled fallback if WebGL is unavailable or reduced motion is on.

**Custom cursor** — small dot by default, expands on interactive elements, becomes `VIEW PROJECT →` over project cards. Desktop pointer only.

**About** — split editorial layout: large left statement `DESIGN IS NOT JUST HOW IT LOOKS.`, right intro copy, discipline tags, animated counters with placeholder values (04+ / 50+ / 20+ / ∞).

**Selected Work** — 4 large horizontal entries with sticky/parallax scroll, number, title, category, description, preview image. Hover: image scale, type shift, accent line draw, metadata transition, magnetic pull. Click opens the case study.

**Services** — animated typography rows (not cards) that reveal descriptions on hover/scroll.

**Process** — horizontal scroll-linked timeline, 01–06, stages activate progressively with line-draw animation.

**Design system showcase** — interactive spec board: type scale, color tokens, buttons, inputs, cards, nav, icons, all live and hoverable.

**Skills** — orbit/node constellation with connecting lines, hoverable nodes (no progress bars). Simplified static grid on mobile/reduced motion.

**Contact** — `HAVE AN IDEA?` / `LET'S BUILD SOMETHING GREAT.`, `START A PROJECT →`, editable contact + social links.

**Footer** — name, availability line, socials, `© 2026 — ALL RIGHTS RESERVED`.

## Motion & responsiveness

Scroll-triggered reveals, text masking, parallax, magnetic buttons, page/section transitions — all timed smooth, never flashy, all gated behind `prefers-reduced-motion`. Tablet reduces 3D complexity and spacing; mobile drops the cursor, cuts particles, simplifies the 3D scene, and keeps a purpose-built typographic layout.

## Accessibility

Semantic landmarks, one `<h1>` per page, keyboard-operable nav/cards/menu, visible focus rings in accent blue, alt text on all imagery, AA contrast on the dark surfaces, canvas marked decorative.

## Technical notes

- Stack stays TanStack Start + React 19 + TypeScript + Tailwind v4 (the project's fixed router; not plain Vite SPA routing).
- Add dependencies: `three`, `@react-three/fiber`, `@react-three/drei`, `motion`, `gsap`. `lucide-react` already present.
- Tokens (`--background`, `--accent`, surfaces, radii, fonts) defined in `src/styles.css` under `@theme inline`; no hardcoded color utilities in components. Display + body font pair loaded via `<link>` in `__root.tsx`.
- Structure: `src/components/{navigation,hero,about,projects,services,process,design-system,contact,three,ui}`, `src/sections`, `src/hooks`, `src/animations`, `src/data`, `src/types`, `src/assets`, `src/utils`.
- All content (projects, case studies, services, skills, nav, socials, stats) lives in typed files under `src/data` so it can be edited without touching components.
- 3D canvas loaded via `React.lazy` behind a client-only boundary so SSR/prerender is unaffected; case-study route is code-split.
- Project preview and case-study imagery generated as cool-toned abstract UI visuals and imported as ES modules; no backend required.
