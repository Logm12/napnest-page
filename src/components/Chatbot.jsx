"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, HelpCircle, Loader2 } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am your 24/7 NapNest AI Assistant. How can I help you today? (Ask about pricing, location, or how to book a cozy oak sleep cabin...)"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  const suggestions = [
    "Hourly rates?",
    "Where is the hub?",
    "How to book a pod?",
    "Highlight features?"
  ];

  const renderMessageContent = (text, isUser) => {
    if (!text) return null;
    const parts = text.split(/\*\*([^*]+)\*\*/g);
    if (parts.length === 1) {
      return <p className="whitespace-pre-line">{text}</p>;
    }
    return (
      <p className="whitespace-pre-line">
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return (
              <strong key={index} className={`font-bold ${isUser ? "text-amber-250" : "text-[#00754A]"}`}>
                {part}
              </strong>
            );
          }
          return part;
        })}
      </p>
    );
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) throw new Error("API Network error");
      
      const data = await response.json();
      const assistantReply = data.choices?.[0]?.message?.content || "Sorry, the network is a bit busy. Please try again in a moment!";
      
      setMessages(prev => [...prev, { role: "assistant", content: assistantReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, I'm experiencing some connectivity issues. Do you have questions about our rates (69k/2h) or Xuan Thuy location?"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Chat Bubble Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#00754A] hover:bg-[#006241] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer relative group"
          aria-label="Open Chatbot"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cba258] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#cba258]"></span>
          </span>
          {/* Tooltip */}
          <div className="absolute right-16 bg-[#1E3932] text-white text-xs py-1.5 px-3 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-medium border border-emerald-800">
            24/7 AI Chat Help
          </div>
        </button>
      )}

      {/* Messenger Chat Window */}
      {isOpen && (
        <div className="w-[360px] h-[500px] bg-white border border-[#edebe9] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="bg-[#1E3932] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-white/20 relative shrink-0">
                <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#1E3932] z-10"></span>
                <img src="/images/logo.png" alt="NapNest Logo" className="w-10 h-10 rounded-full object-contain bg-white" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold tracking-tight">NapNest AI Assistant</h4>
                <p className="text-[10px] text-emerald-400 font-mono">24/7 Auto Responder</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f9f8f6]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed text-left ${
                    msg.role === "user"
                      ? "bg-[#00754A] text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-[#edebe9] rounded-bl-none shadow-sm font-sans"
                  }`}
                >
                  {renderMessageContent(msg.content, msg.role === "user")}
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-500 border border-[#edebe9] rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#00754A]" />
                  <span className="text-[10px] font-mono">NapNest is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && !isLoading && (
            <div className="p-3 bg-[#edebe9]/40 border-t border-[#edebe9] overflow-x-auto flex gap-2 no-scrollbar">
              {suggestions.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(sug)}
                  className="bg-white hover:bg-[#f2f0eb] text-slate-700 border border-[#edebe9] rounded-full px-3 py-1.5 text-[10px] font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-[#edebe9] bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask NapNest anything..."
              className="flex-1 bg-[#f9f8f6] border border-[#edebe9] rounded-full px-4 py-2 text-xs outline-none focus:border-[#00754A] transition-colors text-slate-800"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-8 h-8 rounded-full bg-[#00754A] hover:bg-[#006241] disabled:bg-slate-200 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
