import { Leaf } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Green Intelligence
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#impact" className="text-sm font-medium hover:text-primary transition-colors">
              Impact
            </a>
            <a href="#policies" className="text-sm font-medium hover:text-primary transition-colors">
              Policies
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
