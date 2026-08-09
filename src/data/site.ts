import type { NavItem, SocialLink, Stat } from "@/types";

export const site = {
  name: "AYAAN RAHMAN",
  shortName: "AR",
  role: "UI/UX Designer · Creative Designer",
  availability: "Available for selected projects",
  email: "hello@ayaan.design",
  location: "Dhaka · Remote worldwide",
  intro:
    "I create thoughtful interfaces, visual systems and interactive experiences where design, technology and storytelling meet.",
  about:
    "I work with founders and product teams to turn complex ideas into interfaces people actually understand. My practice sits between product thinking, visual systems and motion — research first, pixels second, and a design system underneath everything so the work keeps scaling after launch.",
  aboutSecondary:
    "Currently taking on a small number of product and brand engagements each quarter, with a bias toward teams who care about craft.",
};

export const navItems: NavItem[] = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Work", hash: "#work" },
  { label: "Services", hash: "#services" },
  { label: "Contact", hash: "#contact" },
];

export const disciplines = [
  "UI/UX",
  "Product Design",
  "Visual Design",
  "Interaction Design",
  "Creative Direction",
];

// Placeholder values — edit freely.
export const stats: Stat[] = [
  { value: "04+", label: "Years" },
  { value: "50+", label: "Projects" },
  { value: "20+", label: "Brands" },
  { value: "∞", label: "Ideas" },
];

export const socials: SocialLink[] = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];
