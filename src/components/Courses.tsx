import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

interface CoursesProps {
  onSectionChange: (section: string) => void;
}

export const Courses = ({ onSectionChange }: CoursesProps) => {
  const courses = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Comprehensive program covering AI, ML, deep learning, and neural networks.",
      price: "₹2.5L/year",
      icon: "🤖",
      gradient: "from-university-blue to-university-purple",
      duration: "4 Years",
      level: "Bachelor's",
      students: "2,847"
    },
    {
      title: "Computer Science & Engineering", 
      description: "Core computer science fundamentals, programming, algorithms, and software engineering.",
      price: "₹2.2L/year",
      icon: "💻",
      gradient: "from-university-green to-university-teal",
      duration: "4 Years", 
      level: "Bachelor's",
      students: "3,492"
    },
    {
      title: "Data Science & Analytics",
      description: "Statistical analysis, big data processing, machine learning, and business intelligence.",
      price: "₹2.3L/year",
      icon: "📊", 
      gradient: "from-university-purple to-university-pink",
      duration: "4 Years",
      level: "Bachelor's", 
      students: "1,876"
    },
    {
      title: "Cyber Security",
      description: "Advanced cybersecurity, ethical hacking, network security, and digital forensics.",
      price: "₹2.4L/year",
      icon: "🔒",
      gradient: "from-red-500 to-university-orange",
      duration: "4 Years",
      level: "Bachelor's",
      students: "987"
    },
    {
      title: "Information Technology",
      description: "Software development, database management, web technologies, and IT infrastructure.",
      price: "₹2.1L/year", 
      icon: "💾",
      gradient: "from-indigo-500 to-university-blue",
      duration: "4 Years",
      level: "Bachelor's",
      students: "2,156"
    },
    {
      title: "Electronics & Communication Engineering",
      description: "Digital electronics, communication systems, VLSI design, and embedded systems.",
      price: "₹2.0L/year",
      icon: "📡",
      gradient: "from-yellow-500 to-university-orange", 
      duration: "4 Years",
      level: "Bachelor's",
      students: "1,634"
    },
    {
      title: "Electrical & Electronics Engineering",
      description: "Power systems, control systems, renewable energy, and electrical machines.",
      price: "₹1.9L/year",
      icon: "⚡",
      gradient: "from-university-teal to-university-green",
      duration: "4 Years",
      level: "Bachelor's", 
      students: "1,289"
    },
    {
      title: "AIDS (AI & Data Science)",
      description: "Specialized program in artificial intelligence, data science, and predictive analytics.",
      price: "₹2.6L/year",
      icon: "🏥",
      gradient: "from-university-pink to-rose-600", 
      duration: "4 Years",
      level: "Bachelor's",
      students: "743"
    },
    {
      title: "Master of Business Administration",
      description: "Strategic management, finance, marketing, operations, and leadership development.",
      price: "₹3.5L/year",
      icon: "💼",
      gradient: "from-gray-600 to-gray-800",
      duration: "2 Years",
      level: "Master's",
      students: "456"
    }
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
          Mallareddy University Programs 🎓
        </h1>
        <p className="text-xl text-muted-foreground">
          Engineering programs designed for future innovators and leaders
        </p>
      </div>

      {/* University Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🏛️</div>
            <div className="text-2xl font-bold text-foreground">15+</div>
            <div className="text-sm text-muted-foreground">Programs Offered</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">👨‍🎓</div>
            <div className="text-2xl font-bold text-foreground">25,000+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-foreground">A+</div>
            <div className="text-sm text-muted-foreground">NAAC Grade</div>
          </CardContent>
        </Card>

        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-2xl font-bold text-foreground">94%</div>
            <div className="text-sm text-muted-foreground">Placement Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <Card key={index} className="card-hover overflow-hidden">
            <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative`}>
              <div className="text-6xl text-white">{course.icon}</div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  {course.level}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {course.description}
                </p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground">{course.duration}</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-sm text-muted-foreground">Students</div>
                  <div className="font-semibold text-foreground">{course.students}</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-foreground">
                  {course.price}
                </div>
                <Button 
                  className="bg-university-blue hover:bg-university-purple transition-colors"
                >
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* University Highlights */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Why Choose Mallareddy University?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-foreground mb-2">Established Excellence</h3>
              <p className="text-sm text-muted-foreground">Over 25 years of educational excellence and innovation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-foreground mb-2">Research Focus</h3>
              <p className="text-sm text-muted-foreground">State-of-the-art labs and research facilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-foreground mb-2">Industry Connect</h3>
              <p className="text-sm text-muted-foreground">Strong partnerships with leading tech companies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-foreground mb-2">Career Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated placement cell with 94% success rate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="card-hover bg-gradient-primary text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of successful graduates who started their career at Mallareddy University
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="lg">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Schedule Campus Visit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};