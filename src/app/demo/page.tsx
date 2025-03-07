import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Experience GradGPT.pro</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">
          See how our AI-powered platform can transform your graduate school application process
        </p>
        
        <div className="bg-gray-50 border rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-6">Interactive Demo</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl font-medium mb-3">Personal Statement Assistant</h3>
              <p className="text-gray-700 mb-4">
                Experience how GradGPT.pro helps you craft a compelling personal statement tailored to your 
                background and target programs.
              </p>
              <div className="bg-white p-4 rounded border">
                <p className="text-gray-500 italic">
                  Demo input: "I'm applying for a Master's in Computer Science with a background in software development..."
                </p>
                <div className="mt-4 border-t pt-4">
                  <p className="font-medium">GradGPT.pro would help you:</p>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Structure your statement effectively</li>
                    <li>Highlight relevant experience</li>
                    <li>Connect your background to your goals</li>
                    <li>Tailor content to specific programs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Application Strategy Insights</h3>
              <p className="text-gray-700 mb-4">
                See how our platform provides strategic advice for your program selection and application approach.
              </p>
              <Button className="w-full">
                Try This Feature
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-lg">
            Ready to experience the full power of GradGPT.pro?
          </p>
          <div className="flex justify-center space-x-4">
            <Button>
              <Link href="/signup">Sign Up Now</Link>
            </Button>
            <Button variant="outline">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}