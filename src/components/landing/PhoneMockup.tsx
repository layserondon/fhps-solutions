import { cn } from "@/lib/utils";

type Variant = "broken" | "flowing" | "resolved";

type Message = {
  from: "customer" | "agent" | "system";
  text: string;
  time?: string;
  status?: "sent" | "read";
};

const CONVERSATIONS: Record<Variant, { title: string; messages: Message[]; typing?: boolean }> = {
  broken: {
    title: "Customer · 11:48 PM",
    messages: [
      { from: "customer", text: "Hi! Do you have this in stock?", time: "11:48 PM" },
      { from: "customer", text: "Hello?? I need it for tomorrow", time: "12:15 AM" },
      { from: "customer", text: "Never mind, found it elsewhere.", time: "9:02 AM" },
    ],
  },
  flowing: {
    title: "FHPS Agent · online",
    typing: true,
    messages: [
      { from: "customer", text: "Hi! Do you have this in stock?", time: "11:48 PM" },
      {
        from: "agent",
        text: "Hey! Yes — we have 3 left in size M. Want me to reserve one for you? 🎯",
        time: "11:48 PM",
        status: "read",
      },
      { from: "customer", text: "Yes please!", time: "11:49 PM" },
    ],
  },
  resolved: {
    title: "FHPS Agent · online",
    messages: [
      { from: "agent", text: "Your order is confirmed! 📦 Delivery Tuesday, 2–4 PM.", time: "11:50 PM", status: "read" },
      { from: "customer", text: "That was so fast. Thank you!", time: "11:50 PM" },
      { from: "system", text: "✓ Sale completed — lead converted in 2 min" },
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