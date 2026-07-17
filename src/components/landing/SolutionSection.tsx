import { Zap, Target, CalendarCheck, Workflow, Brain, UserCheck } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { PhoneMockup } from "./PhoneMockup";
import { FadeIn } from "./FadeIn";

const capabilities = [
  { icon: Zap, title: "Resposta imediata", desc: "Responde ao primeiro contato em segundos, sempre." },
  { icon: Target, title: "Qualificação de leads", desc: "Identifica quem está pronto para comprar e prioriza esses clientes." },
  { icon: CalendarCheck, title: "Agendamento automatizado", desc: "Agenda e confirma compromissos sem intervenção humana." },
  { icon: Workflow, title: "Integração de funil", desc: "Conecta-se diretamente ao seu CRM, catálogo ou checkout." },
  { icon: Brain, title: "Aprendizado contínuog", desc: "Fica melhor a cada conversa." },
  { icon: UserCheck, title: "Transferência inteligente", desc: "Encaminha para um humano apenas quando realmente importa." },
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
            Conheça seu time de <span className="gradient-text">Atendimento ao cliente</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Um agente de IA que vive dentro do seu WhatsApp, respondendo a cada mensagem como o seu melhor vendedor
           — sem pausas, licenças médicas ou leads perdidos.
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