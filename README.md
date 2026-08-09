# Lumina Studio

NEXT-GEN 3D UI/UX DESIGNER PORTFOLIO — WEBSITE BUILD PROMPT

Create a premium, futuristic 3D portfolio website for a professional UI/UX Designer, Graphic Designer, and Creative Digital Designer.

The website must feel like a high-end digital experience / interactive design studio, not a traditional portfolio template.

TECHNOLOGY

Use:

React

TypeScript

Vite

Tailwind CSS

Three.js

React Three Fiber

Drei

Framer Motion / Motion

Lucide React

GSAP where advanced scroll animation is necessary

Use a clean, scalable component architecture with reusable components and strongly typed TypeScript.

DESIGN DIRECTION

Overall Feel

Think:

Futuristic

Premium

Minimal

Cinematic

Experimental

Interactive

3D

High-end creative agency

Next-generation UI/UX portfolio

Avoid anything that looks like a generic AI-generated portfolio.

Do NOT use excessive gradients, excessive rounded cards, random glassmorphism, unnecessary blobs, or template-like sections.

The design should feel intentionally art-directed.

Color System

Primary background:

#060810

Primary accent:

#6BBFFF

Secondary surfaces:

rgba(14, 18, 36, 0.7)

Typography:

Primary: crisp white

Secondary: muted slate/gray

Accent: #6BBFFF

Keep the overall palette cool-toned.

Do not introduce warm orange, yellow, gold, beige, or brown tones.

3D EXPERIENCE

The hero section should contain an interactive 3D centerpiece.

Create a sophisticated abstract 3D object representing creativity/design.

Possible concept:

A floating futuristic 3D design core made from:

Metallic geometric forms

Transparent glass layers

Thin glowing lines

UI panels

Wireframe elements

Small floating particles

Subtle blue emissive lighting

The object should slowly rotate and react subtly to:

Mouse movement

Cursor position

Scroll

Hover

Use realistic lighting, depth, shadows, reflections, and depth-of-field where appropriate.

The 3D scene must remain performant.

Provide a graceful fallback if WebGL is unavailable.

NAVIGATION

Create a minimal floating navigation system.

Navigation:

Home

About

Work

Services

Contact

Include a small designer identity/logo on the left.

Right side:

Availability indicator

"Let's Talk" CTA

Navigation should remain elegant while scrolling.

On mobile, transform it into a clean compact menu.

HERO SECTION

Create a cinematic full-screen hero.

Small eyebrow:

UI/UX DESIGNER · CREATIVE DESIGNER

Main headline:

I DESIGN DIGITAL EXPERIENCES THAT FEEL DIFFERENT.

Create strong typography hierarchy.

Use oversized typography with controlled line breaks.

Supporting text:

I create thoughtful interfaces, visual systems and interactive experiences where design, technology and storytelling meet.

Primary CTA:

VIEW MY WORK

Secondary CTA:

LET'S TALK

Add a subtle scroll indicator.

The 3D centerpiece should visually interact with the typography without making the hero overcrowded.

CUSTOM CURSOR

Create a premium custom cursor experience on desktop.

States:

Normal:
small circular cursor.

Hovering over interactive elements:
expand the cursor.

Hovering over project cards:
display:

VIEW PROJECT →

Keep the interaction subtle and smooth.

Disable custom cursor behavior on touch devices.

ABOUT SECTION

Create an editorial-style About section.

Do not make it a boring centered paragraph.

Use a split layout.

Left:

Large typography:

DESIGN IS NOT JUST HOW IT LOOKS.

Right:

A concise professional introduction.

Include small information blocks:

UI/UX
PRODUCT DESIGN
VISUAL DESIGN
INTERACTION DESIGN
CREATIVE DIRECTION

Add subtle animated numbers/statistics if appropriate.

Example:

04+ Years
50+ Projects
20+ Brands
∞ Ideas

Do not invent real achievements if actual data is unavailable. Use editable placeholder values.

SELECTED WORK

This should be the visual centerpiece of the website.

Create an immersive project showcase.

Instead of a standard grid, use a combination of:

Large horizontal project cards

Full-width case studies

Sticky scrolling sections

Parallax images

3D hover effects

Magnetic interactions

Each project should include:

Project number:

01

Project title:

Project Name

Category:

UI/UX · Product Design

Short description.

Project preview.

When hovering:

Image subtly scales

Typography shifts

Cursor changes

Accent line animates

Project metadata transitions smoothly

Create at least 4 editable project entries.

Example categories:

01 — Banking Experience
02 — FiveM Gaming Platform
03 — Creative Brand System
04 — Mobile Product Experience

Use placeholder images/assets where actual portfolio images are unavailable.

PROJECT CASE STUDY INTERACTION

Clicking a project should open a dedicated case-study experience.

Include:

Project overview

Problem

Research

Strategy

Wireframes

Design system

Final UI

Interaction

Outcome

Use large visual storytelling.

Allow smooth transition from the project card into the case study.

Add:

BACK TO WORK

SERVICES

Create a visually experimental services section.

Services:

UI/UX DESIGN

Research, wireframes, user flows, prototypes and polished interfaces.

PRODUCT DESIGN

Design systems and scalable digital products.

VISUAL DESIGN

Brand visuals, social graphics and digital experiences.

INTERACTION DESIGN

Motion, micro-interactions and immersive experiences.

CREATIVE DIRECTION

Visual concepts and complete digital art direction.

Use animated typography rather than traditional service cards.

DESIGN PROCESS

Create an interactive horizontal process timeline.

01 — DISCOVER
02 — DEFINE
03 — DESIGN
04 — PROTOTYPE
05 — REFINE
06 — DELIVER

As the user scrolls, each stage should become active.

Use subtle line animations and progressive transitions.

DESIGN SYSTEM SHOWCASE

Add a section demonstrating design-system thinking.

Visually showcase:

Typography

Colors

Buttons

Inputs

Cards

Navigation

Icons

UI components

Make this section feel like an interactive Figma/design-system environment.

Users should be able to hover over components and see subtle states.

EXPERIENCE / SKILLS

Create a futuristic skills visualization.

Skills:

Figma

UI/UX

Prototyping

Design Systems

React

TypeScript

Tailwind CSS

Motion Design

Graphic Design

Branding

Avoid traditional progress bars.

Use an interactive constellation / orbit / node visualization.

CONTACT SECTION

End with a powerful cinematic CTA.

Large typography:

HAVE AN IDEA?

Second line:

LET'S BUILD SOMETHING GREAT.

Include:

START A PROJECT →

Also provide editable social/contact links.

Keep this section visually minimal.

FOOTER

Minimal footer.

Left:

Designer name / brand.

Center:

Available for selected projects.

Right:

Social links.

Bottom:

© 2026 — ALL RIGHTS RESERVED

MOTION SYSTEM

Animations must feel intentional and premium.

Use:

Smooth page transitions

Scroll-triggered reveals

Text masking

Parallax

Magnetic buttons

Image distortion

3D object movement

Hover transitions

Section transitions

Subtle scale effects

Animation timing should generally feel smooth rather than flashy.

Avoid excessive animation.

Use reduced-motion support:

prefers-reduced-motion

RESPONSIVE DESIGN

The website must be fully responsive.

Desktop:

Immersive 3D experience.

Tablet:

Reduce 3D complexity and spacing.

Mobile:

Prioritize typography, content and performance.

On mobile:

Disable heavy cursor effects

Reduce particle count

Reduce 3D complexity

Simplify navigation

Preserve visual identity

Maintain smooth scrolling

The website must look intentionally designed on mobile, not like a compressed desktop layout.

PERFORMANCE

Optimize the experience carefully.

Requirements:

Lazy-load 3D assets

Optimize images

Use compressed textures

Limit unnecessary WebGL rendering

Avoid excessive DOM animations

Use GPU-friendly transforms

Lazy-load project media

Code-split heavy components

Respect reduced-motion preferences

The 3D experience should enhance the portfolio, never make it slow.

ACCESSIBILITY

Implement:

Semantic HTML

Keyboard navigation

Visible focus states

Accessible buttons

Proper heading hierarchy

Alt text for images

Sufficient contrast

Reduced-motion support

Do not sacrifice accessibility for visual effects.

CODE ARCHITECTURE

Use a scalable structure such as:

src/
├── components/
│ ├── navigation/
│ ├── hero/
│ ├── about/
│ ├── projects/
│ ├── services/
│ ├── process/
│ ├── design-system/
│ ├── contact/
│ └── three/
│
├── sections/
├── pages/
├── hooks/
├── animations/
├── data/
├── types/
├── assets/
├── utils/
└── styles/

Create reusable components instead of putting everything inside App.tsx.

Use TypeScript interfaces/types for:

Projects

Services

Skills

Navigation

Social links

Case studies

Keep portfolio content inside structured data files so it can be changed without modifying components.

UI DETAILS

Use:

Thin borders

Subtle shadows

Deep dark surfaces

Precise spacing

Strong typography

Minimal rounded corners

Subtle blue glow

Fine grid lines

Micro-interactions

Avoid:

Excessive cards

Excessive gradients

Huge glowing text

Random 3D objects

Generic stock illustrations

Overused glassmorphism

Excessive border radius

Template-looking layouts

Fake testimonials

Fake statistics

Every visual element should have a purpose.

FINAL EXPERIENCE

The finished website should feel like:

A designer's interactive digital playground combined with a premium creative studio portfolio.

It should immediately communicate:

"This person understands design, interaction, technology and visual storytelling."

The experience should be memorable within the first 5 seconds.

Prioritize:

Visual identity

Typography

3D interaction

Portfolio storytelling

Motion design

UX

Performance

Accessibility

Build the website as a real production-quality portfolio, not a concept mockup.

Make every section polished, responsive, reusable and easy to customize.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://experience-canvas-97.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a2cf7f21-4084-4c3d-99dc-8c1e43959715).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
