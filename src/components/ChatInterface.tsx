// app/components/ChatInterface.tsx
import { Suspense } from 'react'
import { MessageDisplay } from './MessageDisplay'
import { MessageInput } from './MessageInput'
import { Loading } from './Loading'
import { Message, ChatSession, ApiResponse } from '@/src/types'

export const ChatInterface = async () => {
  const messages = await getInitialMessages()

  return (
    <div className="flex flex-col h-screen">
      <Suspense fallback={<Loading />}>
        <MessageDisplay messages={messages} />
      </Suspense>
      <MessageInput onSendMessage={sendMessage} />
    </div>
  )
}

async function getInitialMessages(): Promise<Message[]> {
  const res = await fetch('/api/messages', { next: { revalidate: 0 } })
  if (!res.ok) throw new Error('Failed to fetch messages')
  const response: ApiResponse<Message[]> = await res.json()
  return response.data
}

async function sendMessage(content: string): Promise<void> {
  const res = await fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  })
  if (!res.ok) throw new Error('Failed to send message')
}