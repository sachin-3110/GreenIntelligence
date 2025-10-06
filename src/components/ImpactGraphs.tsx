import { Card } from "./ui/card";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const carbonData = [
  { month: "Jan", emissions: 65, saved: 35 },
  { month: "Feb", emissions: 59, saved: 41 },
  { month: "Mar", emissions: 52, saved: 48 },
  { month: "Apr", emissions: 48, saved: 52 },
  { month: "May", emissions: 42, saved: 58 },
  { month: "Jun", emissions: 38, saved: 62 },
];

const efficiencyData = [
  { month: "Jan", efficiency: 45 },
  { month: "Feb", efficiency: 52 },
  { month: "Mar", efficiency: 61 },
  { month: "Apr", efficiency: 68 },
  { month: "May", efficiency: 73 },
  { month: "Jun", efficiency: 78 },
];

const routingData = [
  { category: "Standard", queries: 320 },
  { category: "Optimized", queries: 890 },
  { category: "Edge Cache", queries: 650 },
  { category: "Deferred", queries: 420 },
];

export const ImpactGraphs = () => {
  return (
    <section id="impact" className="container mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Environmental Impact</h2>
        <p className="text-muted-foreground">Real-time insights into AI sustainability metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4">Carbon Emissions Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={carbonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="emissions" 
                stackId="1"
                stroke="hsl(var(--destructive))" 
                fill="hsl(var(--destructive) / 0.2)" 
                name="Emissions"
              />
              <Area 
                type="monotone" 
                dataKey="saved" 
                stackId="1"
                stroke="hsl(var(--success))" 
                fill="hsl(var(--success) / 0.3)" 
                name="CO₂ Saved"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4">Query Routing Efficiency</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={efficiencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", r: 5 }}
                name="Efficiency %"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Query Distribution by Routing Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={routingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Bar 
                dataKey="queries" 
                fill="hsl(var(--primary))" 
                radius={[8, 8, 0, 0]}
                name="Queries (thousands)"
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
};
