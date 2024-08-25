// app/page.tsx
import { ChatInterface } from '@/src/components/ChatInterface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Customer Support',
  description: 'Chat with our AI-powered customer support assistant',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChatInterface />
    </main>
  )
}