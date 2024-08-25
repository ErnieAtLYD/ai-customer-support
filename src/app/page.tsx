// app/page.tsx

import React from 'react';
import { Metadata } from 'next';
import ChatInterface from '@/src/components/ChatInterface';

export const metadata: Metadata = {
  title: 'AI Customer Support Chat',
  description: 'An AI-powered customer support chat interface',
};

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <ChatInterface />
    </main>
  );
};

export default Home;