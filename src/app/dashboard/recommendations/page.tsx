import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function RecommendationsPage() {
  // Mock data for university recommendations
  const recommendedPrograms = [
    {
      university: "Stanford University",
      program: "M.S. in Computer Science",
      focus: "AI and Machine Learning",
      match: 95,
      details: {
        location: "Stanford, CA",
        deadline: "December 5, 2023",
        gre: "Required",
        acceptance: "5%",
        avgGpa: "3.9+"
      }
    },
    {
      university: "UC Berkeley",
      program: "M.S. in Electrical Engineering & Computer Science",
      focus: "Intelligent Systems",
      match: 92,
      details: {
        location: "Berkeley, CA",
        deadline: "December 15, 2023",
        gre: "Required",
        acceptance: "8%",
        avgGpa: "3.8+"
      }
    },
    {
      university: "Carnegie Mellon University",
      program: "M.S. in Computer Science",
      focus: "Machine Learning",
      match: 88,
      details: {
        location: "Pittsburgh, PA",
        deadline: "December 10, 2023",
        gre: "Required",
        acceptance: "7%",
        avgGpa: "3.85+"
      }
    },
    {
      university: "Massachusetts Institute of Technology",
      program: "M.S. in Electrical Engineering & Computer Science",
      focus: "Artificial Intelligence",
      match: 86,
      details: {
        location: "Cambridge, MA",
        deadline: "December 15, 2023",
        gre: "Required",
        acceptance: "4%",
        avgGpa: "3.95+"
      }
    },
    {
      university: "University of Washington",
      program: "M.S. in Computer Science & Engineering",
      focus: "Machine Learning and AI",
      match: 84,
      details: {
        location: "Seattle, WA",
        deadline: "December 15, 2023",
        gre: "Required",
        acceptance: "15%",
        avgGpa: "3.7+"
      }
    },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Program Recommendations</h1>
        <p className="text-gray-600 mt-1">Personalized graduate program suggestions based on your profile</p>
      </div>
      
      <Alert className="bg-blue-50 border-blue-200">
        <AlertTitle className="text-blue-800">Complete your profile for better recommendations</AlertTitle>
        <AlertDescription className="text-blue-700">
          These recommendations are based on your current profile. Complete all sections for more accurate matches.
        </AlertDescription>
      </Alert>
      
      <div className="space-y-6">
        {recommendedPrograms.map((program, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="flex h-2 bg-gray-100">
              <div 
                className="bg-green-500" 
                style={{ width: `${program.match}%` }}
                title={`${program.match}% match`}
              ></div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                <CardTitle className="text-xl">{program.university}</CardTitle>
                  <CardDescription className="text-base font-medium text-gray-700 mt-1">
                    {program.program}
                  </CardDescription>
                  <p className="text-sm text-gray-600">Focus: {program.focus}</p>
                </div>
                <div className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {program.match}% Match
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{program.details.location}</p>
                </div>
                <div>
                  <p className="text-gray-500">Deadline</p>
                  <p className="font-medium">{program.details.deadline}</p>
                </div>
                <div>
                  <p className="text-gray-500">GRE</p>
                  <p className="font-medium">{program.details.gre}</p>
                </div>
                <div>
                  <p className="text-gray-500">Acceptance</p>
                  <p className="font-medium">{program.details.acceptance}</p>
                </div>
                <div>
                  <p className="text-gray-500">Avg. GPA</p>
                  <p className="font-medium">{program.details.avgGpa}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline" size="sm">View Program Details</Button>
              <Button variant="outline" size="sm">Check Compatibility</Button>
              <Button size="sm">Add to My List</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button variant="outline">Load More Programs</Button>
      </div>
    </div>
  );
}