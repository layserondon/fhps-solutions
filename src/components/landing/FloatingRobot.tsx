import { useEffect, useState } from "react";
import robotAsset from "@/assets/robot-mascot.png.asset.json";

const WHATSAPP_URL = "https://wa.me/0000000000?text=Hi!%20I%20want%20to%20know%20more%20about%20FHPS%20Agents";

export function FloatingRobot() {
  const [dimmed, setDimmed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const form = document.getElementById("lead-form");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setDimmed(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 z-40 transition-opacity duration-500 sm:bottom-6 sm:right-6"
      style={{ opacity: dimmed ? 0.25 : 1 }}
    >
      {hovered && (
        <div className="glass absolute -top-12 right-0 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-medium text-foreground">
          Need help? Chat with us →
        </div>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative block bg-transparent transition-transform duration-300 hover:scale-105"
      >
        <span
          aria-hidden="true"
          className="animate-glow-pulse absolute inset-0 -z-10 scale-125 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--cyan-glow) 35%, transparent), color-mix(in oklab, var(--violet-glow) 25%, transparent) 60%, transparent 75%)",
          }}
        />
        <img
          src={robotAsset.url}
          alt="FHPS Agents robot assistant"
          className="animate-float-soft h-[90px] w-auto sm:h-[125px]"
          loading="lazy"
        />
      </a>
    </div>
  );
}