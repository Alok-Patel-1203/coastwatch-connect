import { Button } from "@/components/ui/button";
import { MapPin, Users, Shield, TrendingUp, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
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
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('gamification')}
          >
            <Users className="h-4 w-4 mr-2" />
            Community
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('dashboard')}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('dashboard')}
          >
            <Shield className="h-4 w-4 mr-2" />
            Authority Portal
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-ocean hover:shadow-glow transition-all duration-300"
            onClick={() => scrollToSection('report-form')}
          >
            Report Incident
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('gamification')}
            >
              <Users className="h-4 w-4 mr-2" />
              Community
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('dashboard')}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('dashboard')}
            >
              <Shield className="h-4 w-4 mr-2" />
              Authority Portal
            </Button>
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-ocean hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('report-form')}
              >
                Report Incident
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;