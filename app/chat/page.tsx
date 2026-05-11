import MathChatbot from "@/components/MathChatbot";

export const metadata = {
  title: "Math AI Tutor",
  description: "Get help with your math questions from our AI tutor.",
};

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Welcome to Your Math AI Tutor
        </h1>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Stuck on a problem? Ask below and get step-by-step guidance.
        </p>
      </div>
      <MathChatbot />
    </div>
  );
}
