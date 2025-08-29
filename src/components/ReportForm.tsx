import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Camera, Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
    severity: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Report Submitted Successfully!",
      description: "Your incident report has been received and will be reviewed by authorities.",
    });

    // Reset form
    setFormData({ type: "", location: "", description: "", severity: "" });
    setFiles(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card border-0 bg-card/95 backdrop-blur">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                Report an Incident
              </CardTitle>
              <CardDescription className="text-base">
                Help protect our mangrove forests by reporting threats, damage, or suspicious activities
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Incident Type */}
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-sm font-medium">
                    Incident Type *
                  </Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cutting">Illegal Cutting/Logging</SelectItem>
                      <SelectItem value="dumping">Waste Dumping</SelectItem>
                      <SelectItem value="construction">Unauthorized Construction</SelectItem>
                      <SelectItem value="pollution">Water Pollution</SelectItem>
                      <SelectItem value="fishing">Destructive Fishing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium">
                    Location *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Enter location or coordinates"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    className="w-full text-xs"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Use Current Location
                  </Button>
                </div>

                {/* Severity */}
                <div className="space-y-2">
                  <Label htmlFor="severity" className="text-sm font-medium">
                    Severity Level *
                  </Label>
                  <Select value={formData.severity} onValueChange={(value) => handleInputChange("severity", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Minor concern</SelectItem>
                      <SelectItem value="medium">Medium - Moderate threat</SelectItem>
                      <SelectItem value="high">High - Significant damage</SelectItem>
                      <SelectItem value="critical">Critical - Immediate action needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="photos" className="text-sm font-medium">
                    Photos *
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <Input
                      id="photos"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => setFiles(e.target.files)}
                      className="hidden"
                      required
                    />
                    <Label htmlFor="photos" className="cursor-pointer">
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload photos or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG up to 10MB each
                      </p>
                    </Label>
                    {files && files.length > 0 && (
                      <p className="text-sm text-success mt-2">
                        {files.length} file(s) selected
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed description of the incident..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-ocean hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Report
                </Button>
              </form>

              <div className="text-center text-xs text-muted-foreground">
                Your report will be reviewed by local authorities within 24 hours
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportForm;