import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Plus } from "lucide-react";

interface CalendarProps {
  onSectionChange: (section: string) => void;
}

export const Calendar = ({ onSectionChange }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<'month' | 'week' | 'day'>('month');

  const events = [
    {
      id: 1,
      title: "Machine Learning Lecture",
      time: "09:00 AM - 10:30 AM",
      date: "2024-12-15",
      type: "lecture",
      location: "Hall A-101",
      color: "bg-university-blue"
    },
    {
      id: 2,
      title: "Data Structures Assignment Due",
      time: "11:59 PM",
      date: "2024-12-15", 
      type: "assignment",
      location: "Online Submission",
      color: "bg-destructive"
    },
    {
      id: 3,
      title: "AI Study Group Meeting",
      time: "07:00 PM - 09:00 PM",
      date: "2024-12-15",
      type: "study-group",
      location: "Library Room 205",
      color: "bg-university-green"
    },
    {
      id: 4,
      title: "Algorithm Assessment",
      time: "02:00 PM - 04:00 PM",
      date: "2024-12-16",
      type: "exam",
      location: "Computer Lab 1",
      color: "bg-university-purple"
    },
    {
      id: 5,
      title: "System Design Workshop",
      time: "10:00 AM - 12:00 PM",
      date: "2024-12-17",
      type: "workshop",
      location: "Auditorium",
      color: "bg-university-orange"
    }
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 5);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const hasEventsOnDate = (day: number | null) => {
    if (!day) return false;
    const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    return events.some(event => event.date === dateString);
  };

  const getEventsForDate = (day: number | null) => {
    if (!day) return [];
    const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const todayEvents = getEventsForDate(new Date().getDate());

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
          Academic Calendar 📅
        </h1>
        <p className="text-xl text-muted-foreground">
          Stay organized with your study schedule and important dates
        </p>
      </div>

      {/* Calendar Controls */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">{formatDate(selectedDate)}</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant={currentView === 'month' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentView('month')}
                >
                  Month
                </Button>
                <Button
                  variant={currentView === 'week' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentView('week')}
                >
                  Week
                </Button>
                <Button
                  variant={currentView === 'day' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentView('day')}
                >
                  Day
                </Button>
              </div>
              <Button className="bg-university-blue hover:bg-university-purple">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {currentView === 'month' && (
            <div className="space-y-4">
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-3 text-center font-medium text-muted-foreground border-b">
                    {day}
                  </div>
                ))}
                {getDaysInMonth(selectedDate).map((day, index) => (
                  <div
                    key={index}
                    className={`min-h-[80px] p-2 border border-border hover:bg-muted/50 transition-colors cursor-pointer ${
                      day === new Date().getDate() && 
                      selectedDate.getMonth() === new Date().getMonth() &&
                      selectedDate.getFullYear() === new Date().getFullYear()
                        ? 'bg-university-blue/10 border-university-blue' 
                        : ''
                    }`}
                  >
                    {day && (
                      <div>
                        <div className={`text-sm font-medium mb-1 ${
                          day === new Date().getDate() && 
                          selectedDate.getMonth() === new Date().getMonth() &&
                          selectedDate.getFullYear() === new Date().getFullYear()
                            ? 'text-university-blue font-bold' 
                            : 'text-foreground'
                        }`}>
                          {day}
                        </div>
                        {hasEventsOnDate(day) && (
                          <div className="space-y-1">
                            {getEventsForDate(day).slice(0, 2).map((event, eventIndex) => (
                              <div
                                key={eventIndex}
                                className={`text-xs p-1 rounded text-white ${event.color} truncate`}
                              >
                                {event.title}
                              </div>
                            ))}
                            {getEventsForDate(day).length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{getEventsForDate(day).length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentView !== 'month' && (
            <div className="text-center py-12">
              <CalendarIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {currentView === 'week' ? 'Week' : 'Day'} view coming soon!
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Today's Schedule & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Clock className="mr-2 h-5 w-5 text-university-blue" />
              Today's Schedule
            </CardTitle>
            <p className="text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </CardHeader>
          <CardContent>
            {todayEvents.length > 0 ? (
              <div className="space-y-4">
                {todayEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-4 p-4 border border-border rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${event.color} mt-1`}></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                      <Badge variant="secondary" className="mt-2 capitalize">
                        {event.type.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <CalendarIcon className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">No events scheduled for today</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">Upcoming Events</CardTitle>
            <p className="text-muted-foreground">Next 5 scheduled items</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()} • {event.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs capitalize">
                    {event.type.replace('-', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" size="sm">View All Events</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Event Legend */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-xl">Event Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-university-blue"></div>
              <span className="text-sm text-foreground">Lectures</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-destructive"></div>
              <span className="text-sm text-foreground">Assignments</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-university-purple"></div>
              <span className="text-sm text-foreground">Exams</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-university-green"></div>
              <span className="text-sm text-foreground">Study Groups</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-university-orange"></div>
              <span className="text-sm text-foreground">Workshops</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};