import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Camera, Award, Users } from "lucide-react";
import mangroveHero from "@/assets/mangrove-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${mangroveHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Protect Our
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Mangrove Forests
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of coastal communities, researchers, and authorities in monitoring and protecting vital mangrove ecosystems through participatory conservation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-ocean hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="h-5 w-5 mr-2" />
              Report Incident Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-card/80 backdrop-blur"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Explore Map
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <Card className="p-6 bg-card/90 backdrop-blur border-0 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-ocean">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">12,500+</p>
                <p className="text-sm text-muted-foreground">Active Reporters</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/90 backdrop-blur border-0 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-mangrove">
                <MapPin className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">3,847</p>
                <p className="text-sm text-muted-foreground">Reports Submitted</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/90 backdrop-blur border-0 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-accent to-warning">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">856</p>
                <p className="text-sm text-muted-foreground">Hectares Protected</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;