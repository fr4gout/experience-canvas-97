import { ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { useWebGLSupport } from "@/hooks/use-webgl-support";

const HeroScene = lazy(() => import("./HeroScene"));

/** Static, styled stand-in used while loading and when WebGL is unavailable. */
function CoreFallback() {
  return (
    <div aria-hidden className="flex h-full w-full items-center justify-center">
      <div className="relative h-[min(60vw,26rem)] w-[min(60vw,26rem)]">
        <div className="absolute inset-0 rounded-full border border-accent/25" />
        <div className="absolute inset-[12%] rounded-full border border-accent/15" />
        <div className="absolute inset-[26%] rotate-45 border border-accent/30" />
        <div className="absolute inset-[38%] rounded-full bg-accent/10 blur-2xl" />
      </div>
    </div>
  );
}

export function HeroCanvas() {
  const webgl = useWebGLSupport();

  return (
    <ClientOnly fallback={<CoreFallback />}>
      {webgl === false ? (
        <CoreFallback />
      ) : (
        <Suspense fallback={<CoreFallback />}>
          <HeroScene />
        </Suspense>
      )}
    </ClientOnly>
  );
}
