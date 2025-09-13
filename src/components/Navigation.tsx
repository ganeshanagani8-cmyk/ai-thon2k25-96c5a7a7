import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [notificationCount] = useState(3);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'documents', label: 'Documents', icon: '📚' },
    { id: 'assessments', label: 'Assessments', icon: '🧠' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'ai-tutor', label: 'AI Tutor', icon: '🤖' },
    { id: 'courses', label: 'Courses', icon: '🎓' },
    { id: 'community', label: 'Community', icon: '👥' },
    { id: 'calendar', label: 'Calendar', icon: '📅' },
    { id: 'learning-process', label: 'Learning Process', icon: '🎯' },
  ];

  return (
    <nav className="gradient-bg text-white shadow-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-shadow flex items-center">
              <span className="floating-element text-3xl">🧠</span>
              <div className="ml-3">
                <div className="text-lg leading-tight">Mallareddy Deemed to be University</div>
                <div className="text-xs opacity-80">Student Portal</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id ? 'bg-white/20' : ''
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <span className="text-xl">🔔</span>
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center p-0">
                  {notificationCount}
                </Badge>
              )}
            </Button>
            
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarFallback className="bg-university-blue text-white font-bold">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">Alex Johnson</div>
                <div className="text-xs opacity-75">Premium Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};