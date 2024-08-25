// app/api/messages/route.ts
import { NextResponse } from 'next/server'
import { Message, ApiResponse } from '@/src/types'

// Dummy data for initial messages
const initialMessages: Message[] = [
  { id: '1', content: 'Hello! How can I assist you today?', sender: 'ai', timestamp: Date.now() },
]

export async function GET() {
  // In a real application, you would fetch messages from a database
  const response: ApiResponse<Message[]> = {
    data: initialMessages,
  }
  return NextResponse.json(response)
}

export async function POST(request: Request) {
  const { content } = await request.json()
  
  // In a real application, you would save this message to a database
  // and potentially process it through an AI model
  const newMessage: Message = {
    id: Date.now().toString(),
    content: content,
    sender: 'user',
    timestamp: Date.now(),
  }
  
  // Simulate AI response
  const aiResponse: Message = {
    id: (Date.now() + 1).toString(),
    content: `Thank you for your message: "${content}". How can I help you further?`,
    sender: 'ai',
    timestamp: Date.now() + 1,
  }
  
  initialMessages.push(newMessage, aiResponse)
  
  const response: ApiResponse<Message> = {
    data: aiResponse,
  }
  
  return NextResponse.json(response)
}