import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target } from "lucide-react";

interface LearningProcessProps {
  onSectionChange: (section: string) => void;
}

export const LearningProcess = ({ onSectionChange }: LearningProcessProps) => {
  const learningSteps = [
    {
      id: 1,
      title: "Document Upload & Analysis",
      description: "Upload your study materials and let AI extract key concepts",
      status: "completed",
      stats: "247 documents processed",
      icon: "📚",
      color: "green"
    },
    {
      id: 2,
      title: "AI Knowledge Mapping",
      description: "AI creates personalized knowledge graphs from your content",
      status: "completed", 
      stats: "1,247 concepts mapped",
      icon: "🧠",
      color: "blue"
    },
    {
      id: 3,
      title: "Adaptive Assessment Generation",
      description: "AI generates personalized quizzes based on your learning gaps",
      status: "current",
      stats: "847 assessments completed",
      icon: "📝",
      color: "yellow"
    },
    {
      id: 4,
      title: "Performance Analytics",
      description: "Deep analysis of your learning patterns and progress tracking",
      status: "upcoming",
      stats: "94.7% average score",
      icon: "📊",
      color: "purple"
    },
    {
      id: 5,
      title: "Personalized Recommendations",
      description: "AI tutor provides customized study plans and improvement suggestions",
      status: "upcoming",
      stats: "Coming soon",
      icon: "🎯",
      color: "orange"
    }
  ];

  const processingStats = [
    {
      title: "Processing Speed",
      value: "23% faster",
      subtitle: "than average learning",
      icon: "⚡"
    },
    {
      title: "Accuracy Rate",
      value: "98.5%",
      subtitle: "AI concept extraction",
      icon: "🎯"
    },
    {
      title: "Knowledge Retention",
      value: "89%",
      subtitle: "after 30 days",
      icon: "🧠"
    },
    {
      title: "Improvement Rate",
      value: "+23%",
      subtitle: "this month",
      icon: "📈"
    }
  ];

  const aiCapabilities = [
    {
      title: "Natural Language Processing",
      description: "Extracts key concepts, definitions, and relationships from your documents",
      icon: "🔍",
      features: ["Concept Extraction", "Summarization", "Key Term Identification"]
    },
    {
      title: "Adaptive Learning Engine",
      description: "Adjusts difficulty and content based on your performance and learning style",
      icon: "🎲",
      features: ["Dynamic Difficulty", "Learning Style Analysis", "Progress Tracking"]
    },
    {
      title: "Intelligent Assessment",
      description: "Creates personalized quizzes targeting your specific knowledge gaps",
      icon: "🧪",
      features: ["Gap Analysis", "Custom Questions", "Real-time Feedback"]
    },
    {
      title: "Performance Analytics",
      description: "Provides detailed insights into your learning patterns and progress",
      icon: "📊",
      features: ["Learning Analytics", "Progress Visualization", "Predictive Insights"]
    }
  ];

  const getStepClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-l-university-green bg-green-50';
      case 'current':
        return 'border-l-university-orange bg-yellow-50';
      default:
        return 'border-l-muted-foreground/30 bg-muted/30';
    }
  };

  const getIconClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-university-green';
      case 'current':
        return 'bg-university-orange animate-pulse';
      default:
        return 'bg-muted-foreground/30';
    }
  };

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
          AI-Powered Learning Process 🎯
        </h1>
        <p className="text-xl text-muted-foreground">
          Your personalized learning journey with adaptive AI guidance
        </p>
      </div>

      {/* Process Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {processingStats.map((stat, index) => (
          <Card key={index} className="card-hover text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm font-medium text-foreground">{stat.title}</div>
              <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Journey */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">Your Learning Journey</CardTitle>
          <p className="text-muted-foreground">AI-guided step-by-step learning process</p>
        </CardHeader>
        <CardContent>
          <div className="learning-path pl-12 space-y-8">
            {learningSteps.map((step, index) => (
              <div key={step.id} className={`path-node ${step.status}-node`}>
                <div className={`border-l-4 p-6 rounded-r-xl ${getStepClasses(step.status)}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{step.icon}</span>
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                        {step.status === 'completed' && (
                          <CheckCircle className="h-5 w-5 text-university-green" />
                        )}
                        {step.status === 'current' && (
                          <Clock className="h-5 w-5 text-university-orange" />
                        )}
                        {step.status === 'upcoming' && (
                          <Target className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <div className="text-sm font-medium">
                        {step.status === 'completed' && (
                          <Badge className="bg-university-green text-white">
                            ✅ Completed - {step.stats}
                          </Badge>
                        )}
                        {step.status === 'current' && (
                          <Badge className="bg-university-orange text-white">
                            🔄 In Progress - {step.stats}
                          </Badge>
                        )}
                        {step.status === 'upcoming' && (
                          <Badge variant="secondary">
                            ⏳ Upcoming - {step.stats}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-3xl">
                      {step.status === 'completed' && '✅'}
                      {step.status === 'current' && '🔄'}
                      {step.status === 'upcoming' && '⏳'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Capabilities */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">AI Learning Capabilities</CardTitle>
          <p className="text-muted-foreground">Advanced AI technologies powering your learning experience</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{capability.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{capability.description}</p>
                    <div className="space-y-2">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-university-blue rounded-full"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Optimization */}
      <Card className="card-hover bg-gradient-primary text-white">
        <CardContent className="p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Optimization in Progress</h2>
            <p className="text-lg mb-6 opacity-90">
              AI is continuously analyzing your learning patterns to optimize your educational experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">Real-time</div>
                <div className="text-sm opacity-80">Content Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Adaptive</div>
                <div className="text-sm opacity-80">Difficulty Adjustment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Personalized</div>
                <div className="text-sm opacity-80">Learning Paths</div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" onClick={() => onSectionChange('ai-tutor')}>
                Talk to AI Tutor
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Analytics
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};