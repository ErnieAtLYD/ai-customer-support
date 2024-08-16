"use client"

import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  timestamp: string;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      text: message,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-4 overflow-auto">
        {messages.map((msg) => (
          <div key={msg.id}>
            <span>{msg.text}</span>
            <span>{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;