"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define the type for document feedback
interface DocumentFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  suggestions: string;
}

export default function DocumentsPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [documentFeedback, setDocumentFeedback] = useState<DocumentFeedback | null>(null);
  
  // Mock document analysis function
  const analyzeDocument = (documentType: string) => {
    setAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setAnalyzing(false);
      setDocumentFeedback({
        score: 85,
        strengths: [
          "Clear structure and organization",
          "Strong opening paragraph that grabs attention",
          "Good articulation of your research interests"
        ],
        improvements: [
          "Consider adding more specific examples of your past work",
          "Strengthen the connection between your background and future goals",
          "The conclusion could be more memorable and impactful"
        ],
        suggestions: "Your statement of purpose effectively communicates your academic journey, but could benefit from more concrete examples of how your past experiences have prepared you for graduate study. Consider adding a paragraph that directly connects your undergraduate research to your proposed graduate work."
      });
    }, 2000);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Document Management</h1>
        <p className="text-gray-600 mt-1">Upload and analyze your application documents</p>
      </div>
      
      <Tabs defaultValue="statement">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="statement">Statement of Purpose</TabsTrigger>
          <TabsTrigger value="cv">CV/Resume</TabsTrigger>
          <TabsTrigger value="letters">Recommendation Letters</TabsTrigger>
        </TabsList>
        
        <TabsContent value="statement" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Statement of Purpose</CardTitle>
              <CardDescription>
                Upload your Statement of Purpose for AI-powered analysis and feedback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!documentFeedback ? (
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-lg font-medium mb-2">Drag & drop your file here</p>
                    <p className="text-gray-500 mb-4">or</p>
                    <input type="file" className="hidden" id="statement-upload" accept=".pdf,.doc,.docx" />
                    <Button 
                      onClick={() => {
                        const uploadInput = document.getElementById('statement-upload');
                        uploadInput && uploadInput.click();
                      }}
                      className="mb-4"
                    >
                      Browse Files
                    </Button>
                    <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <Alert className="bg-blue-50 border-blue-200">
                    <AlertTitle className="text-blue-800">Statement of Purpose Analysis</AlertTitle>
                    <AlertDescription className="text-blue-700">
                      Overall Quality Score: <span className="font-bold">{documentFeedback.score}/100</span>
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-green-700">Strengths</h3>
                      <ul className="space-y-2 list-disc list-inside text-gray-700">
                        {documentFeedback.strengths.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-amber-700">Areas for Improvement</h3>
                      <ul className="space-y-2 list-disc list-inside text-gray-700">
                        {documentFeedback.improvements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold">Detailed Suggestions</h3>
                    <p className="text-gray-700">{documentFeedback.suggestions}</p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <input type="file" className="hidden" id="statement-reupload" accept=".pdf,.doc,.docx" />
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        const reuploadInput = document.getElementById('statement-reupload');
                        reuploadInput && reuploadInput.click();
                      }}
                    >
                      Upload Revised Version
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default">Get Expert Refinement</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>AI Document Enhancement</DialogTitle>
                          <DialogDescription>
                            Let our AI refine your statement of purpose based on the analysis
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <p>Our AI can help improve your document by:</p>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Enhancing clarity and coherence</li>
                            <li>Strengthening your narrative</li>
                            <li>Improving structure and organization</li>
                            <li>Suggesting specific examples to include</li>
                          </ul>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <p className="text-sm text-gray-600">This will create a new version of your document with suggested improvements. Your original document will be preserved.</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button>Generate Enhanced Version</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )}
              
              {!documentFeedback && (
                <div className="flex justify-end">
                  <Button 
                    disabled={analyzing} 
                    onClick={() => analyzeDocument("statement")}
                  >
                    {analyzing ? "Analyzing..." : "Analyze Document"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cv" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>CV/Resume</CardTitle>
              <CardDescription>
                Upload your CV or resume for analysis and optimization for graduate applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-lg font-medium mb-2">Drag & drop your CV/resume here</p>
                  <p className="text-gray-500 mb-4">or</p>
                  <input type="file" className="hidden" id="cv-upload" accept=".pdf,.doc,.docx" />
                  <Button 
                    onClick={() => {
                      const cvInput = document.getElementById('cv-upload');
                      cvInput && cvInput.click();
                    }}
                    className="mb-4"
                  >
                    Browse Files
                  </Button>
                  <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="letters" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommendation Letters</CardTitle>
              <CardDescription>
                Upload recommendation letters for analysis or generate guidelines for your recommenders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-lg font-medium mb-2">Drag & drop recommendation letters here</p>
                  <p className="text-gray-500 mb-4">or</p>
                  <input type="file" className="hidden" id="letter-upload" accept=".pdf,.doc,.docx" multiple />
                  <Button 
                    onClick={() => {
                      const letterInput = document.getElementById('letter-upload');
                      letterInput && letterInput.click();
                    }}
                    className="mb-4"
                  >
                    Browse Files
                  </Button>
                  <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <h3 className="font-medium text-blue-800 mb-2">Need guidance for your recommenders?</h3>
                <p className="text-sm text-blue-700 mb-4">
                  Our AI can generate personalized guidelines for your recommenders based on your profile and target programs.
                </p>
                <Button variant="outline" className="bg-white">
                  Generate Recommender Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}