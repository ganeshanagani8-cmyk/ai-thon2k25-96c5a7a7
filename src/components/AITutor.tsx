import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Bot, User } from "lucide-react";

interface AITutorProps {
  onSectionChange: (section: string) => void;
}

interface ChatMessage {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

export const AITutor = ({ onSectionChange }: AITutorProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I've analyzed your recent performance and I have some personalized recommendations for you. Would you like to see your priority learning areas?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const aiSuggestions = [
    {
      title: "Focus on System Design",
      description: "Your algorithm skills are strong, but system design needs attention",
      priority: "High",
      color: "destructive"
    },
    {
      title: "Practice More ML Algorithms", 
      description: "Strengthen your understanding of gradient descent and optimization",
      priority: "Medium",
      color: "warning"
    },
    {
      title: "Review Data Structures",
      description: "Quick refresher on tree traversal algorithms would be beneficial",
      priority: "Low", 
      color: "secondary"
    }
  ];

  const quickQuestions = [
    "What topics should I focus on this week?",
    "How can I improve my assessment scores?", 
    "Recommend study materials for machine learning",
    "Create a study plan for next month"
  ];

  const learningInsights = [
    {
      metric: "Learning Velocity",
      value: "23% faster",
      description: "than average student",
      icon: "⚡",
      trend: "up"
    },
    {
      metric: "Knowledge Retention", 
      value: "89%",
      description: "after 30 days",
      icon: "🧠",
      trend: "stable"
    },
    {
      metric: "Weak Areas",
      value: "3 topics",
      description: "need immediate attention",
      icon: "🎯", 
      trend: "down"
    }
  ];

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai', 
        content: "I understand your question. Based on your learning patterns, here's my recommendation...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
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
          AI Learning Tutor 🤖
        </h1>
        <p className="text-xl text-muted-foreground">
          Personalized recommendations powered by advanced machine learning
        </p>
      </div>

      {/* Learning Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {learningInsights.map((insight, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">{insight.icon}</div>
              <div className="text-2xl font-bold text-foreground mb-1">{insight.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{insight.metric}</div>
              <div className="text-xs text-muted-foreground">{insight.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Recommendations */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Bot className="mr-2 h-6 w-6 text-university-blue" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{suggestion.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{suggestion.description}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant={suggestion.color as any}
                    className="ml-3"
                  >
                    {suggestion.priority}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Start Learning
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Chat Interface */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl mr-4">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl">AI Learning Assistant</CardTitle>
              <p className="text-muted-foreground">Ask me anything about your learning journey!</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Chat Messages */}
          <div className="bg-muted/30 rounded-xl p-6 mb-6 max-h-96 overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 ${
                    message.type === 'ai' ? 'bg-gradient-primary' : 'bg-university-teal'
                  }`}>
                    {message.type === 'ai' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`rounded-lg p-4 shadow-sm max-w-md ${
                    message.type === 'ai' ? 'bg-background' : 'bg-university-blue/10'
                  }`}>
                    <p className="text-foreground">{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Questions */}
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-3">Quick Questions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion(question)}
                  className="text-left justify-start h-auto p-3 text-wrap"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex space-x-4">
            <Input
              type="text"
              placeholder="Ask your AI tutor anything..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={sendMessage}
              className="bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              Personalized Study Plans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              AI creates custom study schedules based on your learning pace and goals.
            </p>
            <Button variant="outline" className="w-full">
              Generate Study Plan
            </Button>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">📊</span>
              Progress Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Real-time insights into your learning patterns and improvement areas.
            </p>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};