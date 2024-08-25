// src/components/ChatClient.tsx

'use client';

import React, { useState, useEffect } from 'react';
import MessageDisplay from '@/src/components/MessageDisplay';
import MessageInput from '@/src/components/MessageInput';
import { Message, SendMessageFunction } from '@/src/types';

const ChatClient = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchInitialMessages();
  }, []);

  const fetchInitialMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Received data:', data);
      if (Array.isArray(data.data)) {
        setMessages(data.data);
      } else {
        throw new Error('Unexpected data format received from server');
      }
    } catch (error) {
      console.error('Error fetching initial messages:', error instanceof Error ? error.message : String(error));
      // Optionally set an error state here if you want to display it in the UI
      // setError('Failed to load messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const sendMessage: SendMessageFunction = async (content) => {
    try {
      setLoading(true);
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
      const data = await response.json();
      if (data.success) {
        setMessages((prevMessages) => [...prevMessages, data.data]);
      } else {
        console.error('Failed to send message:', data.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-gray-100 rounded-lg shadow-md">
      <MessageDisplay messages={messages} />
      <MessageInput onSendMessage={sendMessage} disabled={loading} />
    </div>
  );
};

export default ChatClient;