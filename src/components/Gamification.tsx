import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Medal, Target, Users, Award } from "lucide-react";

const mockUser = {
  name: "Ahmad Rahman",
  level: 7,
  points: 2847,
  nextLevelPoints: 3000,
  rank: 23,
  totalReports: 18,
  verifiedReports: 15,
  badges: [
    { name: "First Reporter", icon: Star, description: "Submitted your first report" },
    { name: "Photo Expert", icon: Award, description: "10 reports with high-quality photos" },
    { name: "Community Guardian", icon: Medal, description: "Verified by authorities 15 times" },
    { name: "Coast Protector", icon: Trophy, description: "Protected 5+ hectares of mangroves" }
  ]
};

const leaderboard = [
  { rank: 1, name: "Fatima Khatun", points: 4250, reports: 32 },
  { rank: 2, name: "Mohammad Ali", points: 3980, reports: 28 },
  { rank: 3, name: "Rashida Begum", points: 3756, reports: 26 },
  { rank: 4, name: "Ibrahim Hassan", points: 3245, reports: 22 },
  { rank: 5, name: "Nasreen Ahmed", points: 2987, reports: 20 },
];

const Gamification = () => {
  const progressToNext = ((mockUser.points / mockUser.nextLevelPoints) * 100);
  
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Community Impact & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your conservation contributions and compete with fellow guardians
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile & Progress */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card border-0 bg-card/95 backdrop-blur">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-ocean rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{mockUser.name}</CardTitle>
                <CardDescription>Level {mockUser.level} Guardian</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress to Level {mockUser.level + 1}</span>
                    <span>{mockUser.points}/{mockUser.nextLevelPoints}</span>
                  </div>
                  <Progress value={progressToNext} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{mockUser.totalReports}</div>
                    <div className="text-xs text-muted-foreground">Total Reports</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">{mockUser.verifiedReports}</div>
                    <div className="text-xs text-muted-foreground">Verified</div>
                  </div>
                </div>

                <div className="text-center">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Trophy className="w-3 h-3 mr-1" />
                    Rank #{mockUser.rank}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="shadow-card border-0 bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {mockUser.badges.map((badge, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-muted/50 rounded-lg text-center hover:bg-muted transition-colors"
                    >
                      <badge.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                      <div className="text-xs font-medium">{badge.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0 bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="w-6 w-6 mr-2" />
                  Community Leaderboard
                </CardTitle>
                <CardDescription>
                  Top conservation contributors this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={user.rank}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                        user.rank <= 3 
                          ? "bg-gradient-to-r from-accent/10 to-transparent border border-accent/20" 
                          : "bg-muted/30 hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                          user.rank === 1 
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900" 
                            : user.rank === 2 
                            ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700"
                            : user.rank === 3
                            ? "bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {user.rank === 1 ? "🏆" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : user.rank}
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.reports} reports verified</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{user.points.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-ocean/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Target className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-medium">Monthly Challenge</div>
                      <div className="text-sm text-muted-foreground">
                        Submit 5 verified reports to earn the "Monthly Guardian" badge
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;