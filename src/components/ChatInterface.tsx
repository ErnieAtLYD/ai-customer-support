// src/components/ChatInterface.tsx
import { ChatClient } from './ChatClient'

export const ChatInterface = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold mb-4 p-4">AI Customer Support</h1>
      <ChatClient />
    </div>
  )
}