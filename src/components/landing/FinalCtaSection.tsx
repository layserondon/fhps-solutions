import { useState, type FormEvent } from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { SlidingTextButton } from "./SlidingTextButton";
import { FadeIn } from "./FadeIn";

export function FinalCtaSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const formData = new FormData(form);
  
    const data = {
      nome: String(formData.get("nome") || "").trim(),
    
      whatsapp: String(formData.get("whatsapp") || "")
        .replace(/\D/g, ""),
    
      company: String(formData.get("company") || "").trim(),
    };
  
    if (!data.nome || !data.whatsapp) {
      setStatus("error");
      return;
    }
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxXkEIbDT31BaZLNYjosmav3dhILCcK0FJVsYvTjN_NBl0XpbWnT5RjSkNVec883F-H/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
  
      if (!response.ok) {
        throw new Error("Erro");
      }
  
      setStatus("success");
      form.reset();
  
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
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
            Seu próximo cliente não vai esperar. <span className="gradient-text">Seu agente também não devia.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Comece a responder no WhatsApp com IA hoje mesmo — sem programação, sem complicações.
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <GlassCard gradient glow="cyan" className="mx-auto mt-10 max-w-lg p-6 sm:p-8">
            <form id="lead-form" onSubmit={onSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="lead-name" className="text-xs font-medium text-muted-foreground">
                  Nome
                </label>
                <input
                  id="lead-name"
                  name="nome"
                  required
                  placeholder="Seu nome"
                  className="glass mt-1.5 w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lead-whatsapp" className="text-xs font-medium text-muted-foreground">
                  Número do WhatsApp
                </label>
                <input
                  id="lead-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="(11) 000 0000"
                  className="glass mt-1.5 w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lead-company" className="text-xs font-medium text-muted-foreground">
                  Nome da Empresa
                </label>
                <input
                  id="lead-company"
                  name="company"
                  placeholder="Sua empresa"
                  className="glass mt-1.5 w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none"
                />
              </div>
              <SlidingTextButton type="submit" label="Automatize seu negócio AGORA" size="lg" className="w-full" />
              {status === "success" && (
                <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent">
                  Obrigado! Entraremos em contato logo.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-center text-sm font-medium text-destructive">
                  Algo não saiu como planejado. Tente novo!
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
              FHPS <span className="gradient-text">AGENTS IA</span>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Agentes de IA que automatizam conversas no WhatsApp e convertem leads em vendas, 24/7.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Produtos</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Agente de Vendas", "Agente de Atendimentos", "Agente de Reservas"].map((l) => (
                <li key={l}>
                  <a href="#products" className="text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Empresa</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Sobre", "Carreiras", "Termos", "Privacidade"].map((l) => (
                <li key={l}>
                  <a href="#top" className="text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contato</p>
            <p className="mt-4 text-sm text-muted-foreground">iaagentsfhps@gmail.com</p>
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
          © 2026 FHPS Agents IA. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}