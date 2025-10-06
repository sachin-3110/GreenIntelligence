import { Card } from "./ui/card";
import { Cloud, Cpu, Zap, TrendingDown } from "lucide-react";

export const MetricsOverview = () => {
  const metrics = [
    {
      icon: Cloud,
      label: "CO₂ Reduced",
      value: "47.2",
      unit: "tons",
      change: "+12%",
      trend: "up",
    },
    {
      icon: Cpu,
      label: "GPU Hours Saved",
      value: "8,450",
      unit: "hours",
      change: "+23%",
      trend: "up",
    },
    {
      icon: Zap,
      label: "Energy Saved",
      value: "125.8",
      unit: "MWh",
      change: "+18%",
      trend: "up",
    },
    {
      icon: TrendingDown,
      label: "Queries Optimized",
      value: "2.4M",
      unit: "queries",
      change: "+34%",
      trend: "up",
    },
  ];

  return (
    <section id="dashboard" className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card
              key={metric.label}
              className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-success px-2 py-1 rounded-full bg-success/10">
                  {metric.change}
                </span>
              </div>
              
              <div className="mt-4 space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{metric.value}</span>
                  <span className="text-sm text-muted-foreground">{metric.unit}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
