import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReportForm from "@/components/ReportForm";
import Dashboard from "@/components/Dashboard";
import Gamification from "@/components/Gamification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ReportForm />
        <Dashboard />
        <Gamification />
      </main>
    </div>
  );
};

export default Index;