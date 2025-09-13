import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, Brain, Clock } from "lucide-react";

interface AnalyticsProps {
  onSectionChange: (section: string) => void;
}

export const Analytics = ({ onSectionChange }: AnalyticsProps) => {
  const performanceMetrics = [
    {
      title: "Learning Velocity",
      value: "23% faster",
      subtitle: "than average student",
      icon: "⚡",
      trend: "+5.2%",
      color: "university-blue"
    },
    {
      title: "Knowledge Retention",
      value: "89%",
      subtitle: "after 30 days",
      icon: "🧠",
      trend: "+2.1%", 
      color: "university-green"
    },
    {
      title: "Study Efficiency",
      value: "94.7%",
      subtitle: "optimal learning",
      icon: "🎯",
      trend: "+7.3%",
      color: "university-purple"
    },
    {
      title: "Focus Score",
      value: "87%",
      subtitle: "attention span",
      icon: "🔍",
      trend: "+1.8%",
      color: "university-orange"
    }
  ];

  const weeklyStats = [
    { day: "Mon", study: 4.2, assessments: 3, score: 92 },
    { day: "Tue", study: 3.8, assessments: 2, score: 88 },
    { day: "Wed", study: 5.1, assessments: 4, score: 95 },
    { day: "Thu", study: 3.5, assessments: 2, score: 91 },
    { day: "Fri", study: 4.7, assessments: 3, score: 96 },
    { day: "Sat", study: 2.8, assessments: 1, score: 89 },
    { day: "Sun", study: 1.5, assessments: 0, score: 0 }
  ];

  const topicMastery = [
    { topic: "Machine Learning", mastery: 97, sessions: 45, improvement: "+12%" },
    { topic: "Data Structures", mastery: 89, sessions: 38, improvement: "+8%" },
    { topic: "Algorithms", mastery: 74, sessions: 29, improvement: "+15%" },
    { topic: "System Design", mastery: 45, sessions: 12, improvement: "+23%" },
    { topic: "Statistics", mastery: 82, sessions: 31, improvement: "+6%" }
  ];

  const learningPatterns = [
    { time: "6:00 AM", activity: "Morning Review", efficiency: 95 },
    { time: "10:00 AM", activity: "New Concepts", efficiency: 88 },
    { time: "2:00 PM", activity: "Practice Problems", efficiency: 92 },
    { time: "6:00 PM", activity: "Assessment", efficiency: 85 },
    { time: "9:00 PM", activity: "Revision", efficiency: 78 }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => onSectionChange('dashboard')}
        className="flex items-center text-university-blue hover:text-university-purple transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Advanced Learning Analytics 📊
        </h1>
        <p className="text-xl text-muted-foreground">
          Deep insights into your learning patterns and performance metrics
        </p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{metric.icon}</div>
                <div className="flex items-center text-sm text-university-green">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {metric.trend}
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{metric.title}</div>
              <div className="text-xs text-muted-foreground">{metric.subtitle}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Activity Overview */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">Weekly Activity Overview</CardTitle>
          <p className="text-muted-foreground">Your learning activity patterns</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-4">
            {weeklyStats.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-medium text-muted-foreground mb-2">{day.day}</div>
                <div className="bg-muted rounded-lg p-3 space-y-2">
                  <div className="text-lg font-bold text-foreground">{day.study}h</div>
                  <div className="text-xs text-muted-foreground">Study Time</div>
                  <div className="text-sm font-medium text-university-blue">{day.assessments}</div>
                  <div className="text-xs text-muted-foreground">Assessments</div>
                  {day.score > 0 && (
                    <>
                      <div className="text-sm font-medium text-university-green">{day.score}%</div>
                      <div className="text-xs text-muted-foreground">Avg Score</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Topic Mastery Analysis */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">Topic Mastery Analysis</CardTitle>
          <p className="text-muted-foreground">Your progress across different subjects</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {topicMastery.map((topic, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{topic.topic}</span>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-muted-foreground">{topic.sessions} sessions</span>
                    <span className="text-university-green font-medium">{topic.improvement}</span>
                    <span className="font-bold text-foreground">{topic.mastery}%</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-3 rounded-full bg-gradient-primary transition-all duration-500"
                    style={{ width: `${topic.mastery}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">Optimal Learning Times</CardTitle>
            <p className="text-muted-foreground">When you perform best</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {learningPatterns.map((pattern, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-university-blue" />
                    <div>
                      <div className="font-medium text-foreground">{pattern.time}</div>
                      <div className="text-sm text-muted-foreground">{pattern.activity}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{pattern.efficiency}%</div>
                    <div className="text-xs text-muted-foreground">Efficiency</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">AI Insights</CardTitle>
            <p className="text-muted-foreground">Personalized recommendations</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-university-blue">
                <div className="flex items-start space-x-2">
                  <Brain className="h-5 w-5 text-university-blue mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Peak Performance</div>
                    <div className="text-sm text-muted-foreground">
                      Your best learning happens between 6-10 AM. Schedule complex topics during this time.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-university-orange">
                <div className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-university-orange mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Focus Area</div>
                    <div className="text-sm text-muted-foreground">
                      System Design needs attention. Dedicate 30 mins daily to improve mastery by 20%.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-university-green">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="h-5 w-5 text-university-green mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Improvement Trend</div>
                    <div className="text-sm text-muted-foreground">
                      23% faster learning rate this month. Keep up the excellent progress!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Data */}
      <Card className="card-hover bg-gradient-primary text-white">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Export Analytics</h3>
          <p className="mb-4 opacity-90">Download detailed reports of your learning progress</p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary">
              Download PDF Report
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Export CSV Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};