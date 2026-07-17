import { cn } from "@/lib/utils";

type Variant = "broken" | "flowing" | "resolved";

type Message = {
  from: "Cliente" | "agente" | "system";
  text: string;
  time?: string;
  status?: "enviado" | "lido";
};

const CONVERSATIONS: Record<Variant, { title: string; messages: Message[]; typing?: boolean }> = {
  broken: {
    title: "Cliente · 23:48 ",
    messages: [
      { from: "Cliente", text: "Olá! Você ainda tem essa peça no estoque? ", time: "23:48 "},
      { from: "Cliente", text: "Oiee?? Eu preciso disso para amanhã!!", time: "00:15 "},
      { from: "Cliente", text: "Deixa quieto, encontrei em outro lugar? ", time: "9:02 "},
    ],
  },
  flowing: {
    title: "FHPS Agente · online",
    typing: true,
    messages: [
      { from: "Cliente", text: "Olá! Você ainda tem essa peça no estoque?", time: "23:48 " },
      {
        from: "agente",
        text: "Oi!! Sim — nós temos 3 peças restantes tamanho M. Quer que eu deixe reservado para você? 🎯",
        time: "23:48 ",
        status: "lido",
      },
      { from: "Cliente", text: "Sim, por favor!", time: "23:49 " },
    ],
  },
  resolved: {
    title: "FHPS Agent · online",
    messages: [
      { from: "agente", text: "Sua compra foi feita com sucesso! 📦 Entrega: Terça-feira, 14–16 horas.", time: "23:50 ", status: "lido" },
      { from: "Cliente", text: "Foi rápido. Obrigada!", time: "23:50 " },
      { from: "system", text: "✓ Venda Concluída — lead convertido em 2 minutos " },
    ],
  },
};

export function PhoneMockup({ variant, className }: { variant: Variant; className?: string }) {
  const convo = CONVERSATIONS[variant];
  const isBroken = variant === "broken";

  return (
    <div
      className={cn(
        "glass w-[280px] rounded-[2rem] p-3 sm:w-[300px]",
        variant === "flowing" && "glow-cyan gradient-border",
        variant === "resolved" && "glow-mint",
        isBroken && "opacity-70 saturate-50",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.5rem] bg-card">
        {/* header */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
              isBroken ? "bg-muted text-muted-foreground" : "bg-gradient-to-br from-primary to-secondary text-primary-foreground",
            )}
          >
            {isBroken ? "?" : "AI"}
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">{convo.title}</p>
            {!isBroken && <p className="text-[10px] text-accent">replies instantly</p>}
            {isBroken && <p className="text-[10px] text-muted-foreground">last seen yesterday</p>}
          </div>
        </div>
        {/* messages */}
        <div className="flex min-h-[260px] flex-col justify-end gap-2 p-4">
          {convo.messages.map((m, i) =>
            m.from === "system" ? (
              <div
                key={i}
                className="mx-auto rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-center text-[10px] font-medium text-accent"
              >
                {m.text}
              </div>
            ) : (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed",
                  m.from === "customer"
                    ? "self-start rounded-bl-sm bg-muted text-foreground"
                    : "self-end rounded-br-sm bg-primary/15 text-foreground",
                )}
              >
                {m.text}
                <span className="mt-1 flex items-center justify-end gap-1 text-[9px] text-muted-foreground">
                  {m.time}
                  {m.status && <span className={m.status === "read" ? "text-primary" : ""}>✓✓</span>}
                  {isBroken && m.from === "customer" && <span>✓</span>}
                </span>
              </div>
            ),
          )}
          {convo.typing && (
            <div className="flex w-14 items-center justify-center gap-1 self-end rounded-xl rounded-br-sm bg-primary/15 px-3 py-2.5">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  style={{ animation: `typing-dot 1.2s ease-in-out ${d * 0.2}s infinite` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}