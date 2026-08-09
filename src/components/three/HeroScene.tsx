import { Canvas } from "@react-three/fiber";
import { DesignCore } from "./DesignCore";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  return (
    <Canvas
      aria-hidden
      dpr={[1, isMobile ? 1.25 : 1.8]}
      camera={{ position: [0, 0, 8.2], fov: 42 }}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
    >
      <DesignCore quality={isMobile ? "low" : "high"} animate={!reduced} />
    </Canvas>
  );
}
