// /src/api/api/messages/route.ts

import { NextResponse } from 'next/server';
import { Message, ApiResponse } from '@/src/types';
import openai from '@/src/lib/openai';

export async function GET() {
  const response: ApiResponse<Message[]> = {
    success: true,
    data: [
      {
        id: '1',
        content: 'Hello! How can I help you today?',
        sender: 'ai',
        timestamp: new Date(),
      },
    ],
  };
  return NextResponse.json(response);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json({
        success: false,
        error: 'Message content is required',
      } as ApiResponse, { status: 400 });
    }

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": content}],
    });

    const aiMessage: Message = {
      id: Date.now().toString(),
      content: chatCompletion.choices[0].message.content || 'Sorry, I couldn\'t generate a response.',
      sender: 'ai',
      timestamp: new Date(),
    };

    const response: ApiResponse<Message> = {
      success: true,
      data: aiMessage,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in POST /api/messages:', error);
    return NextResponse.json({
      success: false,
      error: 'An error occurred while processing your request.',
    } as ApiResponse, { status: 500 });
  }
}