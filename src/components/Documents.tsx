import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, FileText, Eye, Brain } from "lucide-react";

interface DocumentsProps {
  onSectionChange: (section: string) => void;
}

export const Documents = ({ onSectionChange }: DocumentsProps) => {
  const documents = [
    {
      title: "Advanced Machine Learning.pdf",
      subtitle: "Uploaded 2 days ago • 2.4 MB",
      icon: "📄",
      concepts: 47,
      color: "from-blue-50 to-indigo-100"
    },
    {
      title: "Deep Learning Research Papers.pdf", 
      subtitle: "Uploaded 1 week ago • 5.8 MB",
      icon: "📊",
      concepts: 89,
      color: "from-purple-50 to-pink-100"
    },
    {
      title: "Data Structures & Algorithms.docx",
      subtitle: "Uploaded 3 days ago • 1.2 MB", 
      icon: "📝",
      concepts: 34,
      color: "from-green-50 to-teal-100"
    },
    {
      title: "Neural Networks Fundamentals.pptx",
      subtitle: "Uploaded 5 days ago • 3.1 MB",
      icon: "📈",
      concepts: 56,
      color: "from-orange-50 to-red-100"
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Handle file upload logic
      console.log("Files uploaded:", files);
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
          Document Processing Center 📄
        </h1>
        <p className="text-xl text-muted-foreground">
          AI-powered document analysis and knowledge extraction
        </p>
      </div>

      {/* Upload Area */}
      <Card className="card-hover">
        <CardContent className="p-8">
          <div 
            className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-university-blue transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <div className="text-6xl mb-6 floating-element">📁</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Upload Educational Content</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Drag and drop files here, or click to browse
            </p>
            <Input 
              type="file" 
              id="fileInput" 
              className="hidden" 
              accept=".pdf,.txt,.docx,.pptx" 
              multiple 
              onChange={handleFileUpload}
            />
            <div className="flex justify-center space-x-4 mt-6">
              <Badge variant="secondary">PDF</Badge>
              <Badge variant="secondary">DOCX</Badge>
              <Badge variant="secondary">PPTX</Badge>
              <Badge variant="secondary">TXT</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Library */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Document Library</CardTitle>
            <Button 
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Upload className="h-4 w-4" />
              <span>Upload New</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div 
                key={index}
                className={`border-2 border-border rounded-2xl p-6 card-hover bg-gradient-to-br ${doc.color}`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{doc.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {doc.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Badge variant="secondary" className="bg-white/80">
                    <Brain className="h-3 w-3 mr-1" />
                    {doc.concepts} concepts extracted
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center space-x-1"
                  >
                    <Eye className="h-3 w-3" />
                    <span>View Details</span>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-university-blue hover:bg-university-purple transition-colors"
                    onClick={() => onSectionChange('assessments')}
                  >
                    Generate Quiz
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for More Documents */}
          <div className="mt-8 p-8 border-2 border-dashed border-border rounded-2xl text-center">
            <div className="text-4xl mb-4 opacity-60">📚</div>
            <p className="text-muted-foreground mb-4">Upload more documents to expand your knowledge base</p>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              Upload Documents
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Processing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">📄</div>
            <div className="text-2xl font-bold text-foreground">247</div>
            <div className="text-sm text-muted-foreground">Total Documents</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">🧠</div>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <div className="text-sm text-muted-foreground">Concepts Extracted</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover text-center">
          <CardContent className="p-6">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-foreground">98.5%</div>
            <div className="text-sm text-muted-foreground">Processing Accuracy</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};