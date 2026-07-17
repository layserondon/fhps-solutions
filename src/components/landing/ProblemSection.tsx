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
          O que está fazendo você perder clientes <span className="text-muted-foreground">Agora?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Todos os dias, clientes enviam mensagens fora do horário comercial, 
          esperam demais por uma resposta e desistem antes mesmo de comprar.
          </p>
        </FadeIn>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { end: 68, suffix: "%", label: "dos leads são perdidos devido ao tempo de resposta lento" },
              { end: 3, prefix: "+", suffix: "h", label: "tempo médio de resposta manual para pequenas empresas" },
              { end: 40, suffix: "%", label: "dos clientes nunca mais entram em contato depois de serem ignorados" },
              { end: 24, suffix: "/7", label: "é há quanto tempo os concorrentes alimentados por IA já estão respondendo" },
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