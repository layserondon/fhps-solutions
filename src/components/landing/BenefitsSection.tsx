import { X, Check } from "lucide-react";
import { CountUpStat } from "./CountUpStat";
import { GlassCard } from "./GlassCard";
import { PhoneMockup } from "./PhoneMockup";
import { FadeIn } from "./FadeIn";

const before = [
  "Respostas horas depois — ou nunca", 
  "Os leads esfriam da noite para o dia", 
  "Uma conversa de cada vez", 
  "Reservas perdidas devido à etiqueta telefônica",
];

const after = [
"Primeira resposta em segundos, 24 horas por dia, 7 dias por semana",
"Leads qualificados enquanto você dorme",
"Milhares de conversas simultâneas",
"Agendamentos realizados automaticamente",
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-gradient relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-center text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            O que realmente <span className="gradient-text">muda</span>
          </h2>
        </FadeIn>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {[
            { end: 10000, prefix: "+", label: "conversas tratadas simultaneamente" },
            { end: 3, suffix: "s", label: "tempo médio de primeira resposta" },
            { end: 35, prefix: "+", suffix: "%", label: "aumento médio na conversão de leads" },
            { end: 24, suffix: "/7", label: "disponibilidade — sem folgas, sem pausas" },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 100}>
              <GlassCard glow="mint" className="h-full p-6 sm:p-8">
                <CountUpStat end={s.end} prefix={s.prefix} suffix={s.suffix} label={s.label} accent="mint" />
              </GlassCard>
            </FadeIn>
          ))}
        </div>
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <FadeIn>
            <GlassCard className="p-8 opacity-80 saturate-50">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Antes— serviço manual</p>
              <ul className="mt-5 space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={150} className="hidden justify-center lg:flex">
            <PhoneMockup variant="resolved" />
          </FadeIn>
          <FadeIn delay={100}>
            <GlassCard glow="mint" gradient className="p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">Depois — FHPS Agentes</p>
              <ul className="mt-5 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}