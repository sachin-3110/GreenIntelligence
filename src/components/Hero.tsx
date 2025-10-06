import { Button } from "./ui/button";
import { ArrowRight, Zap, TrendingDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
          <Zap className="w-4 h-4" />
          <span>AI Sustainability Platform</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Reduce AI's Carbon
          <span className="block bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
            Footprint by 70%
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Intelligent query routing middleware that optimizes AI computation, reduces GPU usage, and ensures government compliance—all while cutting environmental impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a href="#dashboard" className="bg-primary hover:bg-primary/90 group text-white  rounded-2xl text-xl flex p-4 justify-center items-center">
            View Dashboard
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
            <TrendingDown className="w-4 h-4 mr-2" />
            See Impact Report
          </Button>
        </div>
      </div>
    </section>
  );
};
