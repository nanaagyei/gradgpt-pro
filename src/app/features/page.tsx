import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Writing Assistant",
      description: "Get personalized guidance for crafting compelling personal statements, research proposals, and other written materials. Our AI provides real-time feedback, suggestions for improvement, and helps you tailor your writing to specific programs.",
      icon: "📝"
    },
    {
      title: "Application Strategy",
      description: "Develop a winning application strategy with program-specific insights. GradGPT.pro helps you identify the right mix of programs, highlight your strengths, and address potential weaknesses in your application profile.",
      icon: "🎯"
    },
    {
      title: "CV & Resume Optimization",
      description: "Transform your CV or resume into a compelling showcase of your qualifications. Our platform helps you highlight relevant experiences, use appropriate academic formatting, and tailor your document to different program requirements.",
      icon: "📄"
    },
    {
      title: "Interview Preparation",
      description: "Prepare for admissions interviews with confidence using our AI-powered interview simulator. Practice answering common questions, receive feedback on your responses, and develop strategies for making a strong impression.",
      icon: "🎤"
    },
    {
      title: "Program Matching",
      description: "Find the right graduate programs based on your background, interests, and career goals. Our matching algorithm considers factors like research alignment, admission statistics, and funding opportunities to suggest programs where you'll thrive.",
      icon: "🔍"
    },
    {
      title: "Progress Tracking",
      description: "Stay organized with comprehensive application tracking. Monitor deadlines, document requirements, and application status for multiple programs in one convenient dashboard.",
      icon: "📊"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">GradGPT.pro Features</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Powerful tools to maximize your graduate school application success
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to transform your application journey?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Join thousands of students who have improved their chances of admission with GradGPT.pro
          </p>
          <div className="flex justify-center space-x-4">
            <Button>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline">
              <Link href="/demo">Try for Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}