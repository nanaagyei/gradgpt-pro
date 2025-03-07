import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$19.99",
      period: "per month",
      description: "Essential tools for getting started with your applications",
      features: [
        "AI Personal Statement Assistant",
        "Basic CV Optimization",
        "3 Document Reviews per Month",
        "Program Matching",
        "Email Support"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Standard",
      price: "$34.99",
      period: "per month",
      description: "Comprehensive tools for a complete application strategy",
      features: [
        "Everything in Basic",
        "Unlimited Document Reviews",
        "Advanced Writing Assistance",
        "Interview Preparation",
        "Application Tracker",
        "Priority Support"
      ],
      cta: "Choose Standard",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$49.99",
      period: "per month",
      description: "The ultimate package for serious applicants",
      features: [
        "Everything in Standard",
        "Personalized Application Strategy",
        "School-Specific Insights",
        "Research Proposal Assistance",
        "1-on-1 Expert Chat Support",
        "Advanced Analytics"
      ],
      cta: "Choose Premium",
      highlighted: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Pricing Plans</h1>
      <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        Affordable options designed for students at every stage of the application process.
        All plans include a 7-day free trial.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`border rounded-xl p-6 flex flex-col ${
              plan.highlighted 
                ? 'border-blue-500 shadow-md' 
                : 'shadow-sm'
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-600"> {plan.period}</span>
            </div>
            <p className="text-gray-700 mb-6">{plan.description}</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
            >
              <Link href="/signup">{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-3">Need a custom solution?</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We offer special rates for university partnerships, writing centers, and student organizations.
          Contact us to learn more about our group plans.
        </p>
        <Button variant="outline">
          <Link href="/support">Contact Sales</Link>
        </Button>
      </div>
    </div>
  );
}