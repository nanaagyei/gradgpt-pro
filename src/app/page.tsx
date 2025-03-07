import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-0">
        <div className="grid md:grid-cols-2 min-h-[650px] lg:min-h-[750px]">
          <div className="px-4 md:px-12 lg:px-16 flex flex-col justify-center py-18">
            <div className="space-y-8 max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Maximize Your Grad School Acceptance Chances
              </h1>
              <p className="text-xl text-blue-100">
                AI-powered guidance for crafting the perfect graduate school application, personalized recommendations, and document analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 text-lg py-6 px-8 h-auto font-medium"
                >
                  <Link href="/signup">Get Started Free</Link>
                </Button>
                <Button 
                  size="lg" 
                  className="text-white border-white hover:bg-blue-600 text-lg py-6 px-8 h-auto font-medium"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[450px] md:min-h-full w-full">
            <Image 
              src="/images/illustrator.jpg" 
              alt="Graduate Student Illustration"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="md:rounded-none"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How GradGPT.pro Helps You Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-driven platform provides everything you need for a successful graduate school application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">Get personalized program suggestions based on your profile, interests, and career goals.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Analysis</h3>
              <p className="text-gray-600">Upload your essays, CV, and recommendation letters for AI-powered feedback and improvement suggestions.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Application Coach</h3>
              <p className="text-gray-600">Get 24/7 guidance through our intelligent chat system specialized in graduate application processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from students who successfully navigated their graduate school applications with GradGPT.pro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/images/testimonial-1.jpg" 
                    alt="Derrick Dwamena" 
                    width={60} 
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Derrick Dwamena</h4>
                  <p className="text-sm text-gray-500">Temple University Neuroscience and Cognition, PhD</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;GradGPT.pro helped me refine my research statement and identify programs that perfectly matched my interests. I got accepted to my top choice!&quot;</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/images/testimonial-2.jpg" 
                    alt="Ferdinand Quayson" 
                    width={60} 
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Ferdinand Quayson</h4>
                  <p className="text-sm text-gray-500">Princeton University, MS</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;The document analysis feature saved me countless hours of editing. The AI suggestions improved my essays dramatically.&quot;</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/images/testimonial-3.jpg" 
                    alt="James Wilson" 
                    width={60} 
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Bernard Birikorang</h4>
                  <p className="text-sm text-gray-500">Yale Scholar, MS</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;As a first-generation college student, I had no idea how to approach law school applications. GradGPT.pro was like having a personal admissions consultant.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Graduate School Journey Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of students who have already improved their chances of acceptance with GradGPT.pro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/signup">Create Free Account</Link>
            </Button>
            <Button size="lg" className="text-white border-white hover:bg-blue-500">
              <Link href="/demo">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}