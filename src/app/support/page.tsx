import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, FileText, Phone } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Customer Support</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">
          We&apos;re here to help you succeed with your graduate school applications
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border rounded-lg p-6 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-3">Live Chat</h2>
            <p className="text-gray-700 mb-6">
              Get immediate assistance from our support team through live chat, available Monday-Friday, 9am-6pm EST.
            </p>
            <Button>
              Start Chat
            </Button>
          </div>
          
          <div className="border rounded-lg p-6 text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-3">Email Support</h2>
            <p className="text-gray-700 mb-6">
              Send us an email anytime. We typically respond within 24 hours during business days.
            </p>
            <Button variant="outline">
              <Link href="mailto:support@gradgpt.pro">support@gradgpt.pro</Link>
            </Button>
          </div>
          
          <div className="border rounded-lg p-6 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-3">Knowledge Base</h2>
            <p className="text-gray-700 mb-6">
              Browse our comprehensive help articles, tutorials, and guides for self-service support.
            </p>
            <Button variant="outline">
              <Link href="/resources">Browse Articles</Link>
            </Button>
          </div>
          
          <div className="border rounded-lg p-6 text-center">
            <Phone className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-3">Phone Support</h2>
            <p className="text-gray-700 mb-6">
              Premium and Enterprise plan members can schedule phone consultations with our specialists.
            </p>
            <Button variant="outline">
              <Link href="/schedule">Schedule a Call</Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">How do I reset my password?</h3>
              <p className="text-gray-700">
                You can reset your password by clicking &quot;Forgot Password&quot; on the login page or visiting your account settings.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">How do I cancel my subscription?</h3>
              <p className="text-gray-700">
                Go to Account Settings &gt; Billing &gt; Cancel Subscription. Your access will continue until the end of your current billing period.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Can I get a refund?</h3>
              <p className="text-gray-700">
                We offer a 7-day money-back guarantee for new subscriptions. Contact our support team within 7 days of your purchase.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}