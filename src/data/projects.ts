import type { Project } from "@/types";
import bankingImg from "@/assets/project-banking.jpg";
import gamingImg from "@/assets/project-gaming.jpg";
import brandImg from "@/assets/project-brand.jpg";
import mobileImg from "@/assets/project-mobile.jpg";

export const projects: Project[] = [
  {
    slug: "banking-experience",
    index: "01",
    title: "Banking Experience",
    category: "UI/UX · Product Design",
    year: "2025",
    role: "Lead Product Designer",
    description:
      "A calm, data-dense banking interface that makes spending legible at a glance instead of burying it in tables.",
    image: bankingImg,
    imageAlt: "Dark banking dashboard concept with blue data panels",
    caseStudy: {
      overview:
        "A digital bank needed a dashboard that served both casual balance-checkers and power users reconciling business accounts, without shipping two products.",
      blocks: [
        {
          heading: "Problem",
          body: "The legacy dashboard treated every number with equal weight. Users reported that finding a single transaction took several screens, and support tickets clustered around the same three tasks.",
        },
        {
          heading: "Research",
          body: "Twelve moderated sessions plus a diary study across two weeks.",
          points: [
            "Balance, recent activity and upcoming debits drove 80% of sessions",
            "Power users lived in search and filters, never the charts",
            "Trust dropped whenever numbers animated on load",
          ],
        },
        {
          heading: "Strategy",
          body: "Split the surface into a fast lane and a deep lane: an always-visible summary rail for the common cases, and a progressive analytics workspace for everything else.",
        },
        {
          heading: "Wireframes",
          body: "Low-fidelity flows tested against the three highest-volume tasks before a single pixel of visual design existed. Two navigation models were prototyped and one was cut.",
        },
        {
          heading: "Design System",
          body: "A twelve-column grid, four surface elevations, a restrained numeric type scale and a single accent reserved for state changes and positive actions.",
        },
        {
          heading: "Final UI",
          body: "Dark-first interface with typographic hierarchy carrying the load, thin separators instead of boxes, and charts that stay still until the user asks a question.",
        },
        {
          heading: "Interaction",
          body: "Micro-interactions confirm state without theatre: filters snap, rows expand in place, and every transition respects reduced-motion settings.",
        },
      ],
      outcome: [
        "Task completion time down on the three primary flows",
        "Single component library adopted across web and mobile",
        "Support tickets consolidated into one help surface",
      ],
    },
  },
  {
    slug: "fivem-gaming-platform",
    index: "02",
    title: "FiveM Gaming Platform",
    category: "Product Design · Interaction",
    year: "2025",
    role: "Product & Interaction Designer",
    description:
      "A community platform and in-game HUD language for a roleplay server, built to read instantly at speed.",
    image: gamingImg,
    imageAlt: "Angular blue HUD interface concept for a gaming platform",
    caseStudy: {
      overview:
        "A roleplay community had grown past its forum. They needed a platform for onboarding, applications and live server state — plus a HUD system that felt native to the game.",
      blocks: [
        {
          heading: "Problem",
          body: "New players dropped out during a multi-step application process, and the in-game interface competed with the world for attention.",
        },
        {
          heading: "Research",
          body: "Analysed drop-off across the application funnel and ran playtests with returning members.",
          points: [
            "Most abandonment happened before the first form field",
            "HUD elements were unreadable during motion",
            "Moderators needed status at a glance, not a dashboard",
          ],
        },
        {
          heading: "Strategy",
          body: "Front-load the payoff: show the world, the roles and the live server before asking for anything. Keep the HUD peripheral by design.",
        },
        {
          heading: "Wireframes",
          body: "Application flow reduced from seven steps to three, with progress persisted between sessions.",
        },
        {
          heading: "Design System",
          body: "Angular frames, one-pixel emissive edges, a mono label scale and strict contrast rules so overlays survive any background.",
        },
        {
          heading: "Final UI",
          body: "Platform and HUD share tokens, so the site feels like an extension of the game rather than marketing around it.",
        },
        {
          heading: "Interaction",
          body: "Overlay elements fade on inactivity, notifications stack in a fixed corner, and nothing animates across the centre of the screen.",
        },
      ],
      outcome: [
        "Application flow shortened to three steps",
        "Shared token set between platform and in-game overlays",
        "Moderation surface reduced to a single live view",
      ],
    },
  },
  {
    slug: "creative-brand-system",
    index: "03",
    title: "Creative Brand System",
    category: "Visual Design · Creative Direction",
    year: "2024",
    role: "Creative Director",
    description:
      "A modular identity for a studio that needed to look different every week without ever looking inconsistent.",
    image: brandImg,
    imageAlt: "Brand identity system layout with geometric monogram on dark background",
    caseStudy: {
      overview:
        "A small creative studio produced constant social and campaign output, but every piece was designed from scratch and none of it looked related.",
      blocks: [
        {
          heading: "Problem",
          body: "No system meant no recognition. Turnaround was slow and quality depended entirely on who happened to be free.",
        },
        {
          heading: "Research",
          body: "Audited two years of output and mapped which elements survived across formats.",
          points: [
            "Typography carried recognition better than colour",
            "The monogram worked at small sizes; the wordmark did not",
            "Grid discipline was the fastest path to consistency",
          ],
        },
        {
          heading: "Strategy",
          body: "Fix the invariants — grid, type, mark, spacing — and let colour and imagery flex per campaign.",
        },
        {
          heading: "Wireframes",
          body: "Layout templates defined as composition rules rather than fixed artboards, so any format could be derived.",
        },
        {
          heading: "Design System",
          body: "A modular grid, three type roles, a constructed monogram and a documented set of allowed compositions.",
        },
        {
          heading: "Final UI",
          body: "Stationery, social kit, deck system and a web identity that all resolve back to the same geometry.",
        },
        {
          heading: "Interaction",
          body: "Digital applications add a single motion signature: the monogram resolving from its construction grid.",
        },
      ],
      outcome: [
        "Campaign turnaround measured in hours, not days",
        "One documented system covering print and digital",
        "Recognition maintained across flexible colourways",
      ],
    },
  },
  {
    slug: "mobile-product-experience",
    index: "04",
    title: "Mobile Product Experience",
    category: "UI/UX · Mobile Product",
    year: "2024",
    role: "Product Designer",
    description:
      "A mobile-first product rebuilt around one-handed use, offline states and honest empty screens.",
    image: mobileImg,
    imageAlt: "Floating mobile app screens with blue glow on dark background",
    caseStudy: {
      overview:
        "A desktop tool was being squeezed onto phones. The brief was to design the mobile product properly rather than shrink the existing one.",
      blocks: [
        {
          heading: "Problem",
          body: "Primary actions sat out of thumb reach, offline behaviour was undefined, and empty states shipped as blank screens.",
        },
        {
          heading: "Research",
          body: "Field sessions with users on the move, on poor connections.",
          points: [
            "Sessions were short and interrupted",
            "Connectivity dropped regularly mid-task",
            "Users needed to know what was saved, always",
          ],
        },
        {
          heading: "Strategy",
          body: "Design for interruption. Persist everything, make sync state visible, and put every primary action in the lower third.",
        },
        {
          heading: "Wireframes",
          body: "Thumb-zone mapping drove navigation placement before layout decisions were made.",
        },
        {
          heading: "Design System",
          body: "A compact spacing scale, 44px minimum targets, and a state library covering loading, empty, offline and error for every surface.",
        },
        {
          heading: "Final UI",
          body: "High-contrast dark interface, large type, and a persistent sync indicator that never blocks the task.",
        },
        {
          heading: "Interaction",
          body: "Gesture navigation with visible affordances, optimistic updates, and haptic-free confirmation for quiet environments.",
        },
      ],
      outcome: [
        "Every primary action within thumb reach",
        "Defined behaviour for offline, empty and error states",
        "Component library shared with the web product",
      ],
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
