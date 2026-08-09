import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/navigation/SiteNav";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { WorkSection } from "@/sections/WorkSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { DesignSystemSection } from "@/sections/DesignSystemSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";
import { SiteFooter } from "@/sections/SiteFooter";

const title = "Ayaan Rahman — UI/UX & Creative Digital Designer";
const description =
  "Portfolio of a UI/UX, product and creative digital designer building interfaces, design systems and interactive 3D experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh bg-background">
      <CustomCursor />
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <DesignSystemSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
