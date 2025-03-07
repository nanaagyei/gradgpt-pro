import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  description: string;
  returnLink?: string;
  returnText?: string;
}

export default function PlaceholderPage({
  title,
  description,
  returnLink = "/",
  returnText = "Return to Home",
}: PlaceholderPageProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
      <Button>
        <Link href={returnLink}>{returnText}</Link>
      </Button>
    </div>
  );
}