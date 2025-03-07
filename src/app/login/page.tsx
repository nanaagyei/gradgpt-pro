import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] py-12">
      <SignIn appearance={{
        elements: {
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
          card: 'shadow-xl border border-gray-200'
        }
      }} />
    </div>
  );
}