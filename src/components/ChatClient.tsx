// src/components/ChatClient.tsx
'use client'

import { useState, useEffect } from 'react'
import { MessageDisplay } from './MessageDisplay'
import { MessageInput } from './MessageInput'
import { Message, ApiResponse } from '@/src/types'

export const ChatClient = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchInitialMessages()
  }, [])

  const fetchInitialMessages = async () => {
    try {
      const res = await fetch('/api/messages')
      if (!res.ok) throw new Error('Failed to fetch messages')
      const response: ApiResponse<Message[]> = await res.json()
      setMessages(response.data)
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const sendMessage = async (content: string) => {
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })
      if (!res.ok) throw new Error('Failed to send message')
      const response: ApiResponse<Message> = await res.json()
      setMessages(prevMessages => [...prevMessages, { id: Date.now().toString(), content, sender: 'user' }, response.data])
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col h-screen">
      <MessageDisplay messages={messages} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  )
}