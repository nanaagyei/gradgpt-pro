import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Terms of Service</h1>
        <p className="text-gray-600 mb-8 text-center">Last updated: March 5, 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using GradGPT.pro, you agree to be bound by these Terms of Service and all applicable 
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or 
              accessing this site.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>
              GradGPT.pro grants you a limited, non-exclusive, non-transferable, and revocable license to access 
              and use our platform for personal, non-commercial use. This license is subject to these Terms of 
              Service and does not include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Modifying or copying our platform's materials</li>
              <li>Using the platform for any commercial purpose</li>
              <li>Attempting to decompile or reverse engineer any software contained on the platform</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p>
              To access certain features of the platform, you must register for an account. You are responsible for 
              maintaining the confidentiality of your account credentials and for all activities that occur under 
              your account. You agree to provide accurate and complete information when creating an account and to 
              update your information to keep it accurate and current.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Subscription and Billing</h2>
            <p>
              GradGPT.pro offers various subscription plans. By selecting a subscription plan and providing payment 
              information, you agree to pay the fees associated with your chosen plan. Subscriptions automatically 
              renew unless canceled before the renewal date. You can cancel your subscription at any time through 
              your account settings.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
            <p>
              You retain ownership of any content you upload to GradGPT.pro, including personal statements, resumes, 
              and other application materials. By uploading content, you grant GradGPT.pro a limited license to use, 
              store, and process your content solely for the purpose of providing and improving our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Academic Integrity</h2>
            <p>
              GradGPT.pro is designed to assist you in developing your application materials, not to create them for you. 
              You are responsible for ensuring that your use of our platform complies with the academic integrity policies 
              of the institutions to which you are applying. Misrepresentation of assistance received may violate these 
              policies and result in serious consequences.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              GradGPT.pro shall not be liable for any direct, indirect, incidental, special, consequential, or punitive 
              damages resulting from your access to or use of, or inability to access or use, the platform or any content 
              thereon. This includes damages for loss of profits, goodwill, use, data, or other intangible losses.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@gradgpt.pro or through 
              our Support page.
            </p>
          </section>
        </div>
        
        <div className="mt-10 text-center">
          <Button>
            <Link href="/privacy">View Privacy Policy</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}