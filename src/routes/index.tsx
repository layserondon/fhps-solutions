import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { NetworkMeshBackground } from "@/components/landing/NetworkMeshBackground";
import { FloatingRobot } from "@/components/landing/FloatingRobot";
import { CookieBanner } from "@/components/landing/CookieBanner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen scroll-smooth bg-background">
      <NetworkMeshBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <BenefitsSection />
          <ProductsSection />
          <FinalCtaSection />
        </main>
      </div>
      <FloatingRobot />
      <CookieBanner />
    </div>
  );
}
