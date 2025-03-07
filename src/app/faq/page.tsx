import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "How does GradGPT.pro's AI improve my application?",
      answer: "GradGPT.pro analyzes successful application materials and admissions criteria to provide personalized guidance. Our AI helps you craft compelling narratives, highlight your strengths effectively, and align your materials with program expectations, all while maintaining your authentic voice."
    },
    {
      question: "Is my application data secure?",
      answer: "Absolutely. We employ enterprise-level encryption and strict access controls to protect your data. Your application materials and personal information are never shared with third parties without your explicit consent. For more details, please review our Privacy Policy."
    },
    {
      question: "Can GradGPT.pro help with any graduate program?",
      answer: "Yes! Our AI has been trained on successful applications across a wide range of disciplines, from STEM and business to humanities and arts. We provide specialized guidance for master's programs, doctoral programs, professional schools (law, medicine, etc.), and specialized graduate certificates."
    },
    {
      question: "How much does GradGPT.pro cost?",
      answer: "We offer several flexible pricing tiers designed to accommodate different needs and budgets. Our basic plan starts at $19.99/month, while our comprehensive Premium plan is $49.99/month. We also offer student discounts and occasional promotions. Visit our Pricing page for complete details."
    },
    {
      question: "Will admissions committees know I used AI assistance?",
      answer: "GradGPT.pro is designed to enhance your authentic voice, not replace it. Our AI helps you organize your thoughts, develop your narrative, and present your qualifications effectively—all while maintaining your unique perspective and writing style. The final content always reflects your experiences and goals."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We don't lock you into long-term contracts. If you cancel, you'll continue to have access until the end of your current billing period."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Find answers to common questions about using GradGPT.pro
        </p>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg">Still have questions?</p>
          <Button className="mr-4">
            <Link href="/support">Contact Support</Link>
          </Button>
          <Button variant="outline">
            <Link href="/demo">Try GradGPT.pro</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}