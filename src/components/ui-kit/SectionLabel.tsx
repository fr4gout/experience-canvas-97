import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-3 text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-accent/60" />
      {children}
    </span>
  );
}
