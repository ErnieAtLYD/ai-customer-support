// src/components/MessageDisplay.tsx

'use client';

import React from 'react';
import { MessageDisplayProps } from '@/src/types';

const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-800'
            }`}
          >
            <p>{message.content}</p>
            <span className="text-xs opacity-75">
              {message.timestamp ? new Date(message.timestamp).toLocaleTimeString() : ''}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;