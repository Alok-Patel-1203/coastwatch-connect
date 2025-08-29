import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertTriangle, CheckCircle, Eye, MessageSquare } from "lucide-react";

const mockReports = [
  {
    id: 1,
    type: "Illegal Cutting",
    location: "Sundarbans West",
    severity: "high",
    status: "pending",
    timestamp: "2 hours ago",
    reporter: "Fisherman Ahmad",
    description: "Large-scale mangrove cutting observed near fishing grounds..."
  },
  {
    id: 2,
    type: "Waste Dumping",
    location: "Chittagong Coast",
    severity: "medium",
    status: "verified",
    timestamp: "5 hours ago",
    reporter: "NGO Volunteer",
    description: "Industrial waste being dumped in protected mangrove area..."
  },
  {
    id: 3,
    type: "Water Pollution",
    location: "Cox's Bazar",
    severity: "critical",
    status: "investigating",
    timestamp: "1 day ago",
    reporter: "Local Resident",
    description: "Chemical discharge affecting mangrove root systems..."
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical": return "destructive";
    case "high": return "destructive";
    case "medium": return "warning";
    case "low": return "secondary";
    default: return "secondary";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "verified": return "success";
    case "investigating": return "warning";
    case "resolved": return "success";
    case "pending": return "secondary";
    default: return "secondary";
  }
};

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent Reports Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of mangrove incidents across coastal regions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-destructive mb-2">23</div>
              <div className="text-sm text-muted-foreground">Pending Reports</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-warning mb-2">8</div>
              <div className="text-sm text-muted-foreground">Under Investigation</div>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success mb-2">156</div>
              <div className="text-sm text-muted-foreground">Verified Reports</div>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success mb-2">89</div>
              <div className="text-sm text-muted-foreground">Issues Resolved</div>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Latest Incident Reports</h3>
            <Button variant="outline" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              View Map
            </Button>
          </div>

          <div className="space-y-4">
            {mockReports.map((report) => (
              <Card key={report.id} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-lg">{report.type}</CardTitle>
                        <Badge variant={getSeverityColor(report.severity) as any}>
                          {report.severity}
                        </Badge>
                        <Badge variant={getStatusColor(report.status) as any}>
                          {report.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {report.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {report.timestamp}
                        </div>
                      </div>
                    </div>
                    
                    {report.severity === "critical" && (
                      <AlertTriangle className="w-6 h-6 text-destructive animate-pulse" />
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="mb-4">
                    {report.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Reported by: <span className="font-medium">{report.reporter}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                      {report.status === "pending" && (
                        <Button size="sm" className="bg-gradient-ocean">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;