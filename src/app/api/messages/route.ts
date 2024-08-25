// app/api/messages/route.ts
import { NextResponse } from 'next/server'
import { Message, ApiResponse } from '@/src/types'
import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

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
  try {
    const { content } = await request.json()

    const newMessage: Message = {
      id: Date.now().toString(),
      content: content,
      sender: 'user',
      timestamp: Date.now(),
    }

    // Call OpenAI API
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: content }
      ],
    })

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: aiResponse.choices[0].message.content || "Sorry, I couldn't generate a response.",
      sender: 'ai',
      timestamp: Date.now() + 1,
    }

    initialMessages.push(newMessage, aiMessage)

    const response: ApiResponse<Message> = {
      data: aiMessage,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}