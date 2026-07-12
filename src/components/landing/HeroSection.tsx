import { PhoneMockup } from "./PhoneMockup";
import { SlidingTextButton } from "./SlidingTextButton";
import { FadeIn } from "./FadeIn";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-36 sm:pt-44">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--cyan-glow), var(--violet-glow) 60%, transparent)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
              AI Agents for WhatsApp
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-display mt-5 text-4xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your customer service. <span className="gradient-text">Always online.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0">
              Respond to thousands of customers at once, convert leads into sales, and never miss
              a message again — 24 hours a day.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="#cta">
                <SlidingTextButton label="Try it free" size="lg" />
              </a>
              <a href="#solution">
                <SlidingTextButton label="Watch demo" variant="ghost" size="lg" />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="mt-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Trusted by 500+ small businesses
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={200} className="flex justify-center">
          <div className="animate-float-soft">
            <PhoneMockup variant="flowing" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}