// app/page.tsx
import type { Metadata } from 'next'
import { ChatInterface } from '@/src/components/ChatInterface'

export const metadata: Metadata = {
  title: 'AI Customer Support',
  description: 'Chat with our AI-powered customer support assistant',
}

const ChatPage = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold mb-4 p-4">AI Customer Support</h1>
      <ChatInterface />
    </div>
  )
}

export default ChatPage