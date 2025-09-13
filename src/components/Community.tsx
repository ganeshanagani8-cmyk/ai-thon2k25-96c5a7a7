import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, MessageCircle, Calendar, Trophy } from "lucide-react";

interface CommunityProps {
  onSectionChange: (section: string) => void;
}

export const Community = ({ onSectionChange }: CommunityProps) => {
  const studyGroups = [
    {
      name: "ML Engineers Unite",
      description: "Weekly discussions on machine learning algorithms and best practices.",
      members: 247,
      activity: "Very Active",
      nextMeeting: "Today, 7:00 PM",
      category: "Machine Learning",
      color: "from-blue-50 to-indigo-100"
    },
    {
      name: "System Design Masters",
      description: "Advanced system design concepts and architecture discussions.",
      members: 189,
      activity: "Active",
      nextMeeting: "Tomorrow, 3:00 PM", 
      category: "System Design",
      color: "from-purple-50 to-pink-100"
    },
    {
      name: "Data Structures Study Circle",
      description: "Collaborative problem solving and concept clarification.",
      members: 156,
      activity: "Moderate",
      nextMeeting: "Wed, 6:00 PM",
      category: "Data Structures",
      color: "from-green-50 to-teal-100"
    },
    {
      name: "Algorithm Practice Group",
      description: "Daily coding challenges and algorithmic thinking sessions.",
      members: 203,
      activity: "Very Active",
      nextMeeting: "Daily, 5:00 PM",
      category: "Algorithms", 
      color: "from-orange-50 to-red-100"
    }
  ];

  const discussions = [
    {
      title: "Best practices for neural network optimization?",
      author: "Sarah Chen",
      replies: 23,
      time: "2 hours ago",
      tags: ["ML", "Neural Networks"],
      solved: true
    },
    {
      title: "Help with binary tree traversal implementation",
      author: "Mike Johnson", 
      replies: 15,
      time: "4 hours ago",
      tags: ["Data Structures", "Trees"],
      solved: false
    },
    {
      title: "System design interview preparation tips",
      author: "Alex Kumar",
      replies: 31,
      time: "6 hours ago", 
      tags: ["System Design", "Interview"],
      solved: true
    }
  ];

  const achievements = [
    {
      title: "Top Contributor",
      description: "Helped 50+ students this month",
      icon: "🏆",
      earned: true
    },
    {
      title: "Knowledge Sharer", 
      description: "Posted 10 helpful solutions",
      icon: "📚",
      earned: true
    },
    {
      title: "Community Leader",
      description: "Led 5 study sessions",
      icon: "👥",
      earned: false
    }
  ];

  const events = [
    {
      title: "AI/ML Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM - 4:00 PM",
      attendees: 156,
      type: "Workshop"
    },
    {
      title: "Coding Competition",
      date: "Dec 18, 2024", 
      time: "10:00 AM - 2:00 PM",
      attendees: 89,
      type: "Competition"
    },
    {
      title: "System Design Masterclass",
      date: "Dec 20, 2024",
      time: "6:00 PM - 8:00 PM", 
      attendees: 234,
      type: "Masterclass"
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
          Learning Community 👥
        </h1>
        <p className="text-xl text-muted-foreground">
          Connect, collaborate, and learn together with fellow students
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-foreground">2,847</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-2xl font-bold text-foreground">156</div>
            <div className="text-sm text-muted-foreground">Daily Discussions</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-foreground">89%</div>
            <div className="text-sm text-muted-foreground">Problem Solved</div>
          </CardContent>
        </Card>

        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-foreground">4.9</div>
            <div className="text-sm text-muted-foreground">Community Rating</div>
          </CardContent>
        </Card>
      </div>

      {/* Active Study Groups */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Users className="mr-2 h-6 w-6 text-university-blue" />
            Active Study Groups
          </CardTitle>
          <p className="text-muted-foreground">Join collaborative learning sessions</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studyGroups.map((group, index) => (
              <div 
                key={index}
                className={`border-2 border-border rounded-xl p-6 card-hover bg-gradient-to-r ${group.color}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-foreground text-lg">{group.name}</h3>
                  <Badge variant="secondary">{group.activity}</Badge>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{group.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Members:</span>
                    <span className="font-medium text-foreground">{group.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next Meeting:</span>
                    <span className="font-medium text-foreground">{group.nextMeeting}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="outline">{group.category}</Badge>
                  </div>
                </div>

                <Button className="w-full bg-university-blue hover:bg-university-purple transition-colors">
                  Join Group
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Discussions */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <MessageCircle className="mr-2 h-6 w-6 text-university-green" />
            Recent Discussions
          </CardTitle>
          <p className="text-muted-foreground">Join the conversation</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{discussion.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.time}</span>
                    </div>
                  </div>
                  {discussion.solved && (
                    <Badge className="bg-university-green text-white">Solved</Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {discussion.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">View All Discussions</Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events & Community Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-university-purple" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="border-l-4 border-university-blue pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground">{event.title}</h4>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>📅 {event.date}</div>
                    <div>🕐 {event.time}</div>
                    <div>👥 {event.attendees} attending</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-university-orange" />
              Community Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-lg ${achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-muted/50 border border-border'}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl ${achievement.earned ? '' : 'opacity-40'}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <Badge className="bg-university-orange text-white">Earned</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Discussion */}
      <Card className="card-hover bg-gradient-primary text-white">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Start a Discussion</h3>
          <p className="mb-4 opacity-90">Share your knowledge or get help from the community</p>
          <Button variant="secondary">
            Create New Post
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};