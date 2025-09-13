import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface DashboardProps {
  onSectionChange: (section: string) => void;
}

export const Dashboard = ({ onSectionChange }: DashboardProps) => {
  const stats = [
    {
      title: "Documents",
      value: "247",
      icon: "📚",
      progress: 78,
      subtitle: "+23 this month",
      gradient: "from-university-blue to-university-purple"
    },
    {
      title: "Assessments", 
      value: "1,847",
      icon: "✅",
      progress: 92,
      subtitle: "94% completion rate",
      gradient: "from-university-green to-university-teal"
    },
    {
      title: "Avg Score",
      value: "94.7%", 
      icon: "📈",
      progress: 95,
      subtitle: "+2.3% improvement",
      gradient: "from-university-purple to-university-pink"
    },
    {
      title: "Study Hours",
      value: "847",
      icon: "🎯", 
      progress: 67,
      subtitle: "3.2 hrs/day average",
      gradient: "from-university-orange to-university-pink"
    }
  ];

  const recentActivities = [
    {
      title: 'Completed "Advanced Neural Networks" assessment',
      subtitle: 'Score: 96% • Perfect score! • 2 hours ago',
      icon: '🏆',
      type: 'success'
    },
    {
      title: 'Uploaded "Deep Learning Research Papers.pdf"',
      subtitle: 'AI extracted 47 key concepts • 4 hours ago', 
      icon: '📄',
      type: 'info'
    },
    {
      title: 'Achieved "Data Science Master" badge',
      subtitle: 'Completed 50 data science assessments • 6 hours ago',
      icon: '🎖️',
      type: 'achievement'
    }
  ];

  const skills = [
    { name: "Machine Learning", level: 97, status: "Expert", color: "university-green" },
    { name: "Data Structures", level: 89, status: "Advanced", color: "university-blue" },
    { name: "Algorithms", level: 74, status: "Intermediate", color: "university-orange" },
    { name: "System Design", level: 45, status: "Beginner", color: "university-purple" }
  ];

  const achievements = [
    { name: "Top Performer", icon: "🏆", gradient: "from-yellow-400 to-orange-500" },
    { name: "ML Master", icon: "🎖️", gradient: "from-university-purple to-university-pink" },
    { name: "Speed Learner", icon: "⚡", gradient: "from-university-green to-university-teal" },
    { name: "Bookworm", icon: "📚", gradient: "from-university-blue to-indigo-500" },
    { name: "Streak Master", icon: "🔥", gradient: "from-red-500 to-university-pink" },
    { name: "Goal Crusher", icon: "🎯", gradient: "from-indigo-500 to-university-purple" }
  ];

  const quickActions = [
    { label: "Take Quiz", icon: "🧠", action: () => onSectionChange('assessments'), gradient: "from-university-blue to-university-purple" },
    { label: "Upload Doc", icon: "📚", action: () => onSectionChange('documents'), gradient: "from-university-green to-university-teal" },
    { label: "Browse Courses", icon: "🎓", action: () => onSectionChange('courses'), gradient: "from-university-orange to-red-600" },
    { label: "Join Discussion", icon: "👥", action: () => onSectionChange('community'), gradient: "from-university-purple to-university-pink" }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-foreground mb-4 text-shadow">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Your AI-powered learning companion is ready to help you excel
        </p>
        <div className="flex justify-center">
          <Badge className="study-streak px-6 py-3 text-lg font-bold text-white">
            🔥 12-day study streak!
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="card-hover achievement-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-4 rounded-full bg-gradient-to-r ${stat.gradient} text-white text-2xl`}>
                  {stat.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </div>
              <Progress value={stat.progress} className="mb-2" />
              <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Progress and Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 card-hover">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">Learning Progress</CardTitle>
              <select className="border border-border rounded-lg px-3 py-2 text-sm bg-background">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last year</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <p className="text-muted-foreground">Interactive charts coming soon!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl">Skill Mastery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <Badge variant="secondary" className={`text-${skill.color}`}>
                      {skill.status} ({skill.level}%)
                    </Badge>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {recentActivities.map((activity, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-4 rounded-xl ${
                    activity.type === 'success' ? 'bg-gradient-to-r from-green-50 to-green-100' :
                    activity.type === 'info' ? 'bg-gradient-to-r from-blue-50 to-blue-100' :
                    'bg-gradient-to-r from-purple-50 to-purple-100'
                  }`}
                >
                  <div className="w-3 h-3 bg-university-blue rounded-full mr-4 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                  </div>
                  <div className="text-2xl">{activity.icon}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl">Achievements & Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 bg-gradient-to-br ${achievement.gradient} rounded-xl text-white achievement-glow cursor-pointer hover:scale-105 transition-transform`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-xs font-bold">{achievement.name}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Next Achievement: "Algorithm Expert"</p>
              <Progress value={73} className="mb-2" />
              <p className="text-xs text-muted-foreground">Complete 3 more algorithm assessments</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                onClick={action.action}
                className={`p-6 h-auto bg-gradient-to-br ${action.gradient} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center space-y-2`}
              >
                <div className="text-3xl">{action.icon}</div>
                <div className="font-bold">{action.label}</div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};