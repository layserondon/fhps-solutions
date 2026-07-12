import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type CountUpStatProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  muted?: boolean;
  accent?: "cyan" | "mint";
  duration?: number;
};

export function CountUpStat({
  end,
  prefix = "",
  suffix = "",
  label,
  muted = false,
  accent = "cyan",
  duration = 1600,
}: CountUpStatProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={cn(
          "font-mono text-4xl font-semibold tabular-nums sm:text-5xl",
          muted
            ? "text-muted-foreground"
            : accent === "mint"
              ? "text-accent"
              : "text-primary",
        )}
      >
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}