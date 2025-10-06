import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FileCheck, Shield, CheckCircle2, Clock } from "lucide-react";

export const PoliciesSection = () => {
  const policies = [
    {
      id: "POL-2024-001",
      title: "Energy Consumption Standards",
      status: "active",
      compliance: "ISO 14001",
      issueDate: "2024-01-15",
      description: "Maximum GPU utilization thresholds for AI workloads",
    },
    {
      id: "POL-2024-002",
      title: "Carbon Offset Requirements",
      status: "active",
      compliance: "Paris Agreement",
      issueDate: "2024-02-20",
      description: "Mandatory carbon offset for compute-intensive operations",
    },
    {
      id: "POL-2024-003",
      title: "Green Routing Protocols",
      status: "pending",
      compliance: "EPA Guidelines",
      issueDate: "2024-03-10",
      description: "Query optimization and intelligent routing standards",
    },
    {
      id: "POL-2024-004",
      title: "Sustainability Reporting",
      status: "active",
      compliance: "GRI Standards",
      issueDate: "2024-04-05",
      description: "Quarterly environmental impact disclosure requirements",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground";
  };

  return (
    <section id="policies" className="container mx-auto px-4 py-16 space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Government Compliance & Policies</h2>
          <p className="text-muted-foreground">Active environmental regulations and standards</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success/10 border border-success/20">
          <Shield className="w-5 h-5 text-success" />
          <span className="text-sm font-medium text-success">100% Compliant</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policies.map((policy) => (
          <Card
            key={policy.id}
            className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{policy.id}</p>
                    <h3 className="font-semibold">{policy.title}</h3>
                  </div>
                </div>
                <Badge className={getStatusColor(policy.status)}>
                  {policy.status === "active" ? (
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                  ) : (
                    <Clock className="w-3 h-3 mr-1" />
                  )}
                  {policy.status}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">{policy.description}</p>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="text-xs text-muted-foreground">
                  Issued: {policy.issueDate}
                </div>
                <Badge variant="outline" className="text-xs">
                  {policy.compliance}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Regulatory Compliance Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              All policies are automatically monitored and enforced through our intelligent routing system. 
              Real-time compliance tracking ensures your AI operations meet all environmental standards.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
