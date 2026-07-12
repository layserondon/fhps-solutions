import { TrendingUp, Headphones, CalendarClock } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { FadeIn } from "./FadeIn";

const products = [
  {
    icon: TrendingUp,
    name: "Sales Agent",
    tagline: "Turns conversations into revenue.",
    features: ["Lead qualification & scoring", "Cart-recovery closing", "Product recommendations"],
  },
  {
    icon: Headphones,
    name: "Support Agent",
    tagline: "Answers everything, instantly.",
    features: ["FAQ automation", "Order status lookups", "Post-sale support"],
  },
  {
    icon: CalendarClock,
    name: "Booking Agent",
    tagline: "Fills your calendar on autopilot.",
    features: ["Scheduling & confirmation", "Automatic reminders", "For clinics, salons & services"],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative px-4 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--cyan-glow)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-center text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            Choose the right agent <span className="gradient-text">for your business</span>
          </h2>
        </FadeIn>
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 120} className="min-w-[280px] flex-1 snap-center">
              <GlassCard
                gradient
                className="group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:glow-cyan"
              >
                <span className="glass flex h-12 w-12 items-center justify-center rounded-xl">
                  <p.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="font-display mt-6 text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-8 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                >
                  Choose this agent →
                </a>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}