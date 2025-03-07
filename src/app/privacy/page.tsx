import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mb-8 text-center">Last updated: July 1, 2023</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to Privacy</h2>
            <p>
              At GradGPT.pro, we take your privacy seriously. This Privacy Policy describes how we collect, use, 
              and protect your personal information when you use our website and services. By using GradGPT.pro, 
              you consent to the data practices described in this policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>We collect several types of information from and about users of our platform, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, educational background, and other information 
                you provide when creating an account or using our services.
              </li>
              <li>
                <strong>Application Materials:</strong> Personal statements, CVs, research proposals, and other documents 
                you upload or create using our platform.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our platform, including features used, 
                time spent, and actions taken.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device information, and cookies to improve your 
                experience and the functionality of our platform.
              </li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide and improve our AI-powered application assistance services</li>
              <li>Personalize your experience and deliver tailored recommendations</li>
              <li>Process payments and manage your account</li>
              <li>Communicate with you about your account, updates, and new features</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, 
              disclosure, alteration, and destruction. These measures include encryption, secure servers, and regular security 
              assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we 
              cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at 
              privacy@gradgpt.pro or through our Support page.
            </p>
          </section>
        </div>
        
        <div className="mt-10 text-center">
          <Button>
            <Link href="/support">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}