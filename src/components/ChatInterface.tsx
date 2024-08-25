// src/components/ChatInterface.tsx

import React from 'react';
import ChatClient from '@/src/components/ChatClient';

const ChatInterface = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Customer Support Chat</h1>
      <ChatClient />
    </div>
  );
};

export default ChatInterface;