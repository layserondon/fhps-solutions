import { SlidingTextButton } from "./SlidingTextButton";

const links = [
  { label: "Solution", href: "#solution" },
  { label: "Benefits", href: "#benefits" },
  { label: "Products", href: "#products" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="glass flex h-9 w-9 items-center justify-center rounded-xl">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="fhps-grad" x1="0" y1="0" x2="24" y2="24">
                  <stop stopColor="#00E5FF" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path
                d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-4 4V6Z"
                stroke="url(#fhps-grad)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M12 6.5v4M10 8.5h4" stroke="url(#fhps-grad)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-sm font-bold tracking-wide text-foreground">
            FHPS <span className="gradient-text">AGENTS</span>
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
          <SlidingTextButton label="Try it free" />
        </a>
      </nav>
    </header>
  );
}