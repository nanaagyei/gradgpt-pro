import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  // In a real app, you would fetch this data from your database
  const profileCompletionPercentage = 30;
  const documentsCompletionPercentage = 0;
  const overallProgress = Math.floor((profileCompletionPercentage + documentsCompletionPercentage) / 2);
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome to GradGPT.pro</h1>
          <p className="text-gray-600 mt-1">Your AI-powered graduate school application assistant</p>
        </div>
        
        <Button size="lg">
          <Link href="/dashboard/chat">Chat with AI Assistant</Link>
        </Button>
      </div>
      
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Application Progress</CardTitle>
          <CardDescription>
            Complete all steps to maximize your grad school acceptance chances
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Overall Progress</span>
                <span>{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Completion */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Completion</span>
                    <span className="text-sm font-medium">{profileCompletionPercentage}%</span>
                  </div>
                  <Progress value={profileCompletionPercentage} className="h-2 mb-4" />
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/profile">Complete Profile</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Documents */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Completion</span>
                    <span className="text-sm font-medium">{documentsCompletionPercentage}%</span>
                  </div>
                  <Progress value={documentsCompletionPercentage} className="h-2 mb-4" />
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/documents">Upload Documents</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Recommendations */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Get personalized program recommendations after completing your profile</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/recommendations">View Recommendations</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Activity or Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tips for Success</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc list-inside text-gray-600">
              <li>Complete your profile to get personalized recommendations</li>
              <li>Upload your documents for AI analysis and feedback</li>
              <li>Chat with our AI assistant for specific questions</li>
              <li>Review program recommendations based on your profile</li>
              <li>Update your documents based on AI feedback</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Application Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium">Complete Your Profile</h4>
                  <p className="text-sm text-gray-600">Add your academic background, interests, and goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium">Upload Your Documents</h4>
                  <p className="text-sm text-gray-600">Get AI analysis on your statement of purpose, CV, and more</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium">Review Recommendations</h4>
                  <p className="text-sm text-gray-600">Explore programs that match your profile and interests</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium">Refine Your Applications</h4>
                  <p className="text-sm text-gray-600">Use AI feedback to improve your application materials</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}