import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type SlidingTextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
};

export function SlidingTextButton({
  label,
  variant = "primary",
  size = "md",
  className,
  ...props
}: SlidingTextButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-full font-semibold transition-all duration-300",
        size === "md" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base",
        variant === "primary"
          ? "bg-primary text-primary-foreground glow-cyan hover:shadow-[0_0_60px_-8px_color-mix(in_oklab,var(--cyan-glow)_65%,transparent)]"
          : "glass text-foreground hover:border-primary/50",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none block h-[1.25em] overflow-hidden leading-[1.25em]">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[1.25em]">
          <span className="block h-[1.25em]">{label}</span>
          <span className="block h-[1.25em]">{label}</span>
          <span className="block h-[1.25em]">{label}</span>
        </span>
      </span>
    </button>
  );
}