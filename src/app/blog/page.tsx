import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export default function BlogPage() {
  // This would typically come from a database or CMS
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "5 Tips for Writing a Compelling Statement of Purpose",
      excerpt: "Learn how to make your statement of purpose stand out with these expert-approved strategies...",
      date: "June 15, 2023",
      category: "Application Tips"
    },
    {
      id: "2",
      title: "How to Request Strong Letters of Recommendation",
      excerpt: "Securing powerful recommendation letters is crucial for your graduate application. Here's how to approach...",
      date: "May 28, 2023",
      category: "Application Tips"
    },
    {
      id: "3",
      title: "Success Story: From Rejection to Top Program Acceptance",
      excerpt: "Read how Sarah transformed her applications after initial rejections and secured spots at three top-tier programs...",
      date: "April 10, 2023",
      category: "Success Stories"
    },
    {
      id: "4",
      title: "Graduate Admissions Timeline: When to Start Each Step",
      excerpt: "Planning is essential for successful graduate applications. Our month-by-month guide helps you stay on track...",
      date: "March 22, 2023",
      category: "Planning"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">GradGPT.pro Blog</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Expert advice and insights for your graduate school journey
        </p>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm text-blue-600 font-medium">{post.category}</span>
              <h2 className="text-2xl font-semibold mt-1 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Button variant="outline" size="sm">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button>
            <Link href="/demo">Try GradGPT.pro for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}