"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Hello! I'm your GradGPT.pro AI assistant. I'm here to help with your graduate school applications. How can I assist you today?"
    }
  ]);
  
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      // Mock AI response based on user input
      let responseContent = "";
      
      if (input.toLowerCase().includes("statement of purpose") || input.toLowerCase().includes("sop")) {
        responseContent = "A strong Statement of Purpose should outline your academic background, research interests, and career goals. Here are some tips:\n\n1. Be specific about why you're interested in this program\n2. Connect your past experiences to your future goals\n3. Mention specific faculty members you'd like to work with\n4. Explain how this program fits into your career plan\n\nWould you like me to review your draft statement of purpose?";
      } else if (input.toLowerCase().includes("recommendation") || input.toLowerCase().includes("letter")) {
        responseContent = "Recommendation letters are crucial for your application. Here's how to approach them:\n\n1. Ask professors or supervisors who know you well\n2. Provide them with your CV, statement of purpose, and specific talking points\n3. Give them at least 4-6 weeks notice\n4. Follow up politely\n\nI can help you draft a request email to potential recommenders if you'd like.";
      } else if (input.toLowerCase().includes("gre") || input.toLowerCase().includes("test")) {
        responseContent = "The GRE is required by many graduate programs, though requirements vary. A competitive score depends on your field and target schools.\n\nFor top computer science programs, aim for:\n- Verbal: 155+\n- Quantitative: 165+\n- Analytical Writing: 4.0+\n\nWould you like specific prep resources or tips for studying?";
      } else {
        responseContent = "Thanks for your question. To provide the most helpful response, could you tell me more about:\n\n1. What specific graduate programs you're interested in\n2. Your current academic background\n3. Any particular concerns or challenges you're facing with your applications\n\nThe more details you provide, the better I can assist you!";
      }
      
      const aiMessage = { role: "system", content: responseContent };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Chat with GradGPT Assistant</h1>
        <Button variant="outline" size="sm" onClick={() => setMessages([messages[0]])}>
          New Conversation
        </Button>
      </div>
      
      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "system" && (
                <Avatar className="h-8 w-8 bg-blue-600 flex items-center justify-center text-white">
                  <span className="text-xs">AI</span>
                </Avatar>
              )}
              <div 
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.role === "user" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
              {message.role === "user" && (
                <Avatar className="h-8 w-8 bg-gray-300 flex items-center justify-center text-gray-800">
                  <span className="text-xs">You</span>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 bg-blue-600 flex items-center justify-center text-white">
                <span className="text-xs">AI</span>
              </Avatar>
              <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about graduate applications, documents, or programs..."
              className="min-h-[60px]"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <Button className="self-end" onClick={sendMessage} disabled={isLoading}>
              Send
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Press Enter to send, Shift+Enter for a new line
          </p>
        </div>
      </Card>
    </div>
  );
}