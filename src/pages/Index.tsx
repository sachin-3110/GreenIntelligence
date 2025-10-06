import { Hero } from "@/components/Hero";
import { MetricsOverview } from "@/components/MetricsOverview";
import { ImpactGraphs } from "@/components/ImpactGraphs";
import { PoliciesSection } from "@/components/PoliciesSection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation />
      <Hero />
      <MetricsOverview />
      <ImpactGraphs />
      <PoliciesSection />
    </div>
  );
};

export default Index;
