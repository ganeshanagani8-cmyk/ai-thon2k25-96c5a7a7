import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dashboard } from "@/components/Dashboard";
import { Documents } from "@/components/Documents";
import { Courses } from "@/components/Courses";
import { AITutor } from "@/components/AITutor";
import { Assessments } from "@/components/Assessments";
import { Analytics } from "@/components/Analytics";
import { Community } from "@/components/Community";
import { Calendar } from "@/components/Calendar";
import { LearningProcess } from "@/components/LearningProcess";
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
        return <Assessments onSectionChange={setActiveSection} />;
      case 'analytics':
        return <Analytics onSectionChange={setActiveSection} />;
      case 'community':
        return <Community onSectionChange={setActiveSection} />;
      case 'calendar':
        return <Calendar onSectionChange={setActiveSection} />;
      case 'learning-process':
        return <LearningProcess onSectionChange={setActiveSection} />;
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
