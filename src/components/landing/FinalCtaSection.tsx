import { useState, type FormEvent } from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { SlidingTextButton } from "./SlidingTextButton";
import { FadeIn } from "./FadeIn";

export function FinalCtaSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("name") || !data.get("whatsapp")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    form.reset();
  };

  return (
    <section id="cta" className="relative px-4 pb-10 pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--violet-glow), var(--cyan-glow) 70%, transparent)" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
            Your next customer won't wait. <span className="gradient-text">Neither should your agent.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Start responding on WhatsApp with AI today — no code, no hassle.
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <GlassCard gradient glow="cyan" className="mx-auto mt-10 max-w-lg p-6 sm:p-8">
            <form id="lead-form" onSubmit={onSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="lead-name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="lead-name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="glass mt-1.5 w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lead-whatsapp" className="text-xs font-medium text-muted-foreground">
                  WhatsApp number
                </label>
                <input
                  id="lead-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="+1 555 000 0000"
                  className="glass mt-1.5 w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lead-company" className="text-xs font-medium text-muted-foreground">
                  Company name
                </label>
                <input
                  id="lead-company"
                  name="company"
                  placeholder="Your business"
                  className="glass mt-1.5 w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none"
                />
              </div>
              <SlidingTextButton type="submit" label="Start your free 7-day trial" size="lg" className="w-full" />
              {status === "success" && (
                <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent">
                  Thanks! We received your request.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-center text-sm font-medium text-destructive">
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </GlassCard>
        </FadeIn>
      </div>

      {/* footer */}
      <footer className="glass relative mx-auto mt-20 max-w-6xl rounded-t-3xl border-b-0 px-6 py-12 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-sm font-bold text-foreground">
              FHPS <span className="gradient-text">AGENTS</span>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              AI agents that automate WhatsApp conversations and convert leads into sales, 24/7.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Product</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Sales Agent", "Support Agent", "Booking Agent"].map((l) => (
                <li key={l}>
                  <a href="#products" className="text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Careers", "Terms", "Privacy"].map((l) => (
                <li key={l}>
                  <a href="#top" className="text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</p>
            <p className="mt-4 text-sm text-muted-foreground">hello@fhpsagents.com</p>
            <div className="mt-4 flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 FHPS Agents. All rights reserved.
        </p>
      </footer>
    </section>
  );
}