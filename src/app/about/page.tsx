import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About GradGPT.pro</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At GradGPT.pro, we're dedicated to democratizing access to high-quality graduate school application guidance. 
            We believe that everyone deserves a fair chance at pursuing advanced education, regardless of their background 
            or access to resources.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <p className="text-lg text-gray-700">
            We harness the power of advanced AI to provide personalized guidance for every aspect of your graduate school 
            application. From crafting compelling personal statements to optimizing your CV and preparing for interviews, 
            GradGPT.pro offers expert assistance at a fraction of the cost of traditional consulting services.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-lg text-gray-700">
            GradGPT.pro was founded by a team of graduate education experts, admissions professionals, and AI specialists 
            who recognized the need for more accessible, affordable application guidance. Our diverse team brings together 
            expertise from top universities and cutting-edge AI research to create a platform that truly understands the 
            nuances of graduate admissions.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Commitment</h2>
          <p className="text-lg text-gray-700">
            We're committed to continuous improvement, ethical AI use, and student success. Every feature of GradGPT.pro 
            is designed with your goals in mind, and we measure our success by your acceptance letters.
          </p>
        </section>
        
        <div className="flex justify-center pt-6">
          <Button className="mr-4">
            <Link href="/features">Explore Our Features</Link>
          </Button>
          <Button variant="outline">
            <Link href="/demo">Try GradGPT.pro</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}