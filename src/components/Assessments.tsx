import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Clock, Flag, Lightbulb, ArrowRight } from "lucide-react";

interface AssessmentsProps {
  onSectionChange: (section: string) => void;
}

export const Assessments = ({ onSectionChange }: AssessmentsProps) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const assessmentHistory = [
    {
      title: "Advanced Neural Networks",
      score: 96,
      status: "Perfect Score!",
      date: "2 hours ago",
      difficulty: "Advanced",
      color: "from-green-50 to-green-100"
    },
    {
      title: "Data Structures Fundamentals", 
      score: 87,
      status: "Excellent",
      date: "1 day ago",
      difficulty: "Intermediate",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Machine Learning Basics",
      score: 92,
      status: "Outstanding", 
      date: "3 days ago",
      difficulty: "Beginner",
      color: "from-purple-50 to-purple-100"
    }
  ];

  const quickQuizzes = [
    { topic: "Machine Learning", questions: 10, time: "15 min", difficulty: "Intermediate" },
    { topic: "Data Structures", questions: 15, time: "20 min", difficulty: "Advanced" },
    { topic: "Algorithms", questions: 8, time: "12 min", difficulty: "Beginner" },
    { topic: "System Design", questions: 12, time: "18 min", difficulty: "Advanced" }
  ];

  const sampleQuestion = {
    question: "What is the time complexity of inserting an element at the beginning of a dynamic array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Inserting at the beginning requires shifting all existing elements by one position."
  };

  const generateAssessment = () => {
    if (!selectedTopic || !selectedDifficulty || !selectedQuestions || !selectedType) {
      alert("Please select all options to generate assessment");
      return;
    }
    setIsQuizMode(true);
  };

  const startQuickQuiz = (topic: string) => {
    setSelectedTopic(topic);
    setIsQuizMode(true);
  };

  if (isQuizMode) {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* Quiz Header */}
        <div className="flex justify-between items-center bg-gradient-primary text-white p-6 rounded-2xl">
          <div>
            <h1 className="text-2xl font-bold">Assessment in Progress</h1>
            <p className="opacity-90">{selectedTopic || "Machine Learning"} • Question {currentQuestion} of 10</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">12:34</span>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsQuizMode(false)}
              className="border-white text-white hover:bg-white/10"
            >
              Exit Quiz
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 card-hover">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">Progress</span>
            <span className="text-sm font-medium text-foreground">{currentQuestion}/10</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(currentQuestion / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <Card className="card-hover">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">Question {currentQuestion}</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Flag className="h-4 w-4 mr-1" />
                  Flag
                </Button>
                <Button variant="outline" size="sm">
                  <Lightbulb className="h-4 w-4 mr-1" />
                  Hint
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">{sampleQuestion.question}</p>
            <div className="space-y-3">
              {sampleQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4 hover:bg-university-blue/10"
                >
                  <span className="mr-3 w-6 h-6 rounded-full border-2 border-university-blue flex items-center justify-center text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            disabled={currentQuestion === 1}
            onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
          >
            Previous
          </Button>
          <Button 
            className="bg-gradient-primary"
            onClick={() => setCurrentQuestion(Math.min(10, currentQuestion + 1))}
          >
            {currentQuestion === 10 ? "Submit" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

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
          Smart Assessment Engine 🧠
        </h1>
        <p className="text-xl text-muted-foreground">
          AI-powered adaptive testing with real-time difficulty adjustment
        </p>
      </div>

      {/* Quick Quizzes */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Quizzes</CardTitle>
          <p className="text-muted-foreground">Jump into a quick assessment</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickQuizzes.map((quiz, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-foreground">{quiz.topic}</h3>
                  <Badge variant="secondary">{quiz.difficulty}</Badge>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <span>{quiz.questions} questions</span>
                  <span>{quiz.time}</span>
                </div>
                <Button 
                  onClick={() => startQuickQuiz(quiz.topic)}
                  className="w-full bg-university-blue hover:bg-university-purple"
                >
                  Start Quiz
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assessment Generator */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">Create Custom Assessment</CardTitle>
          <p className="text-muted-foreground">Generate personalized tests based on your preferences</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="machine-learning">Machine Learning</SelectItem>
                <SelectItem value="data-structures">Data Structures</SelectItem>
                <SelectItem value="algorithms">Algorithms</SelectItem>
                <SelectItem value="statistics">Statistics</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Select Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedQuestions} onValueChange={setSelectedQuestions}>
              <SelectTrigger>
                <SelectValue placeholder="Number of Questions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Questions</SelectItem>
                <SelectItem value="10">10 Questions</SelectItem>
                <SelectItem value="15">15 Questions</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                <SelectItem value="mixed">Mixed Format</SelectItem>
                <SelectItem value="coding">Coding Challenge</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={generateAssessment}
            className="bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-bold"
          >
            <Brain className="mr-2 h-5 w-5" />
            Generate Assessment
          </Button>
        </CardContent>
      </Card>

      {/* Recent Assessment History */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl">Recent Assessments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessmentHistory.map((assessment, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl bg-gradient-to-r ${assessment.color}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-university-blue rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-medium text-foreground">{assessment.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {assessment.difficulty} • {assessment.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{assessment.score}%</div>
                  <div className="text-sm text-muted-foreground">{assessment.status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assessment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-2xl font-bold text-foreground">1,847</div>
            <div className="text-sm text-muted-foreground">Total Assessments</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-foreground">94.7%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-foreground">12</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};