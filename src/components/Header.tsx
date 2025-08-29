import { Button } from "@/components/ui/button";
import { MapPin, Users, Shield, TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-ocean">
            <MapPin className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">CoastWatch</h1>
            <p className="text-xs text-muted-foreground">Connect</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Users className="h-4 w-4 mr-2" />
            Community
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Shield className="h-4 w-4 mr-2" />
            Authority Portal
          </Button>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-ocean hover:shadow-glow transition-all duration-300">
            Report Incident
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;