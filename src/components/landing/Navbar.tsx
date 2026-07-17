import { SlidingTextButton } from "./SlidingTextButton";

const links = [
  { label: "Solução", href: "#solution" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Produtos", href: "#products" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="glass flex h-9 w-9 items-center justify-center rounded-xl">
          <img
            src="/logo.jpeg"
            alt="FHPS Agents"
            className="h-10 w-auto"
          />
          </span>
          <span className="font-display text-sm font-bold tracking-wide text-foreground">
            FHPS <span className="gradient-text">AGENTS IA</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#cta">
          <SlidingTextButton label="Agente uma reunião" />
        </a>
      </nav>
    </header>
  );
}