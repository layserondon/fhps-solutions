import { Zap, Target, CalendarCheck, Workflow, Brain, UserCheck } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { PhoneMockup } from "./PhoneMockup";
import { FadeIn } from "./FadeIn";

const capabilities = [
  { icon: Zap, title: "Instant response", desc: "Answers the first contact in seconds, every time." },
  { icon: Target, title: "Lead qualification", desc: "Identifies who's ready to buy and prioritizes them." },
  { icon: CalendarCheck, title: "Automated booking", desc: "Schedules and confirms appointments with no human step." },
  { icon: Workflow, title: "Funnel integration", desc: "Connects directly to your CRM, catalog, or checkout." },
  { icon: Brain, title: "Continuous learning", desc: "Gets better with every conversation." },
  { icon: UserCheck, title: "Smart handoff", desc: "Escalates to a human only when it truly matters." },
];

export function SolutionSection() {
  return (
    <section id="solution" className="relative px-4 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--violet-glow)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-center text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            Meet your new <span className="gradient-text">customer service team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            An AI agent that lives inside your WhatsApp, answering every message like your best
            salesperson — without breaks, sick days, or missed leads.
          </p>
        </FadeIn>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <FadeIn className="order-2 flex justify-center lg:order-1">
            <PhoneMockup variant="flowing" />
          </FadeIn>
          <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FadeIn key={c.title} delay={i * 80}>
                <GlassCard gradient className="group h-full p-6 transition-shadow duration-300 hover:glow-violet">
                  <c.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-secondary" />
                  <h3 className="font-display mt-4 text-sm font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}