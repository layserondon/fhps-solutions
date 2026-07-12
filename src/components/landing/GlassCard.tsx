import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  gradient?: boolean;
  glow?: "cyan" | "violet" | "mint" | "none";
};

export function GlassCard({
  gradient = false,
  glow = "none",
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl",
        gradient && "gradient-border",
        glow === "cyan" && "glow-cyan",
        glow === "violet" && "glow-violet",
        glow === "mint" && "glow-mint",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}