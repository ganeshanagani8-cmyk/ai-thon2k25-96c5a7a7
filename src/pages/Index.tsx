import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dashboard } from "@/components/Dashboard";
import { Documents } from "@/components/Documents";
import { Courses } from "@/components/Courses";
import { AITutor } from "@/components/AITutor";
import universityHero from "@/assets/university-hero.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onSectionChange={setActiveSection} />;
      case 'documents':
        return <Documents onSectionChange={setActiveSection} />;
      case 'courses':
        return <Courses onSectionChange={setActiveSection} />;
      case 'ai-tutor':
        return <AITutor onSectionChange={setActiveSection} />;
      case 'assessments':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Smart Assessment Engine 🧠</h1>
              <p className="text-xl text-muted-foreground">AI-powered adaptive testing coming soon!</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-muted-foreground">Advanced assessment features in development</p>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Advanced Learning Analytics 📊</h1>
              <p className="text-xl text-muted-foreground">Deep insights coming soon!</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-muted-foreground">Comprehensive analytics dashboard in development</p>
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Learning Community 👥</h1>
              <p className="text-xl text-muted-foreground">Connect and collaborate with fellow students!</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🎓</div>
              <p className="text-muted-foreground">Community features launching soon</p>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Academic Calendar 📅</h1>
              <p className="text-xl text-muted-foreground">Stay organized with your schedule!</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">📅</div>
              <p className="text-muted-foreground">Interactive calendar coming soon</p>
            </div>
          </div>
        );
      case 'learning-process':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">AI-Powered Learning Process 🎯</h1>
              <p className="text-xl text-muted-foreground">Your personalized learning journey!</p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-muted-foreground">Advanced learning path features in development</p>
            </div>
          </div>
        );
      default:
        return <Dashboard onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-university-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-university-purple/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
