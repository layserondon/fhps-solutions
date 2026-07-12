import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("fhps-cookie-consent")) setVisible(true);
  }, []);

  const choose = (value: string) => {
    localStorage.setItem("fhps-cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="glass fixed bottom-4 left-4 z-50 max-w-sm rounded-2xl p-4 sm:bottom-6 sm:left-6">
      <p className="text-xs leading-relaxed text-muted-foreground">
        We use cookies to improve your experience and analyze traffic.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => choose("accepted")}
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Accept
        </button>
        <button
          onClick={() => choose("rejected")}
          className="glass rounded-full px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40"
        >
          Reject
        </button>
      </div>
    </div>
  );
}