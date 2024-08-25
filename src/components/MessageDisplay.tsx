// app/components/MessageDisplay.tsx
'use client'

import { MessageDisplayProps, Message } from '@/src/types'

export const MessageDisplay = ({ messages }: MessageDisplayProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message: Message) => (
        <div
          key={message.id}
          className={`${
            message.sender === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <div
            className={`inline-block p-2 rounded-lg ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  )
}