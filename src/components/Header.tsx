import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.svg" 
              alt="GradGPT.pro Logo" 
              width={40} 
              height={40} 
            />
            <span className="ml-2 text-xl font-bold text-gray-900">GradGPT.pro</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
            Blog
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
              Log in
            </Link>
          <Button size="sm">
            <Link href="/signup">Sign up</Link>
          </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}