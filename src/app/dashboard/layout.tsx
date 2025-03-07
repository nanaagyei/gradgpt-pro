import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/login");
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/dashboard" className="font-semibold text-xl text-blue-600">
            GradGPT.pro
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/dashboard/chat" className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </Link>
            <UserButton />
          </div>
        </div>
        
        <div className="container mx-auto px-4 pb-2">
          <Tabs defaultValue="dashboard">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </TabsTrigger>
              <TabsTrigger value="profile" asChild>
                <Link href="/dashboard/profile">Profile</Link>
              </TabsTrigger>
              <TabsTrigger value="documents" asChild>
                <Link href="/dashboard/documents">Documents</Link>
              </TabsTrigger>
              <TabsTrigger value="recommendations" asChild>
                <Link href="/dashboard/recommendations">Recommendations</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>
      
      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}