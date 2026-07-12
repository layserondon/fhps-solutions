import { CountUpStat } from "./CountUpStat";
import { PhoneMockup } from "./PhoneMockup";
import { FadeIn } from "./FadeIn";
import { GlassCard } from "./GlassCard";

export function ProblemSection() {
  return (
    <section className="section-gradient relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-center text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            What's costing you customers <span className="text-muted-foreground">right now</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Every day, customers message outside business hours, wait too long for a reply, and
            give up before they ever buy.
          </p>
        </FadeIn>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { end: 68, suffix: "%", label: "of leads are lost due to slow response time" },
              { end: 3, prefix: "+", suffix: "h", label: "average manual response time for small businesses" },
              { end: 40, suffix: "%", label: "of customers never reach out again after being ignored" },
              { end: 24, suffix: "/7", label: "is how long AI-powered competitors are already responding" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 100}>
                <GlassCard className="p-6 opacity-80 saturate-50 sm:p-8">
                  <CountUpStat end={s.end} prefix={s.prefix} suffix={s.suffix} label={s.label} muted />
                </GlassCard>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200} className="flex justify-center">
            <PhoneMockup variant="broken" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}