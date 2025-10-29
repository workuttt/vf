import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import FloatingRegisterButton from './components/FloatingRegisterButton';
import { Message } from './types';
import { MENU_OPTIONS, BOT_RESPONSES } from './constants';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Initial welcome message from the bot
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Hello 👋 and welcome to LG MEA AC Academy — your hub for HVAC expertise.

I can help you with:
📘 Training Programs
⚙️ Certification Paths
💡 Technical Resources
📞 Contact & Registration

What would you like to do first?`
      },
      {
        id: Date.now() + 1,
        sender: 'options',
        options: MENU_OPTIONS
      }
    ]);
  }, []);

  const handleOptionSelect = (optionId: string, optionLabel: string) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: optionLabel
    };
    
    setMessages(prevMessages => [...prevMessages.filter(m => m.sender !== 'options'), userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = BOT_RESPONSES[optionId] || "I'm sorry, I don't have information about that.";
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponseText,
      };
      
      const menuMessage: Message = {
        id: Date.now() + 2,
        sender: 'options',
        options: MENU_OPTIONS
      };
      
      setIsTyping(false);
      setMessages(prevMessages => [...prevMessages, botMessage, menuMessage]);
    }, 1500);
  };

  return (
    <div className="w-full max-w-sm mx-auto h-[90vh] max-h-[700px] bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex flex-col font-sans relative overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <ChatWindow messages={messages} onOptionSelect={handleOptionSelect} isTyping={isTyping} />
      </main>
      <FloatingRegisterButton />
    </div>
  );
}