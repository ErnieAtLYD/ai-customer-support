// src/types/index.ts

export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp?: number;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export interface ChatSession {
    id: string;
    userId: string;
    messages: Message[];
    createdAt: number;
    updatedAt: number;
  }
  
  export interface ApiResponse<T> {
    data: T;
    error?: string;
  }
  
  export type SendMessageFunction = (content: string) => Promise<void>;
  
  export interface ChatContextType {
    messages: Message[];
    sendMessage: SendMessageFunction;
    isLoading: boolean;
  }
  
  export interface MessageInputProps {
    onSendMessage: SendMessageFunction;
    disabled?: boolean;
  }
  
  export interface MessageDisplayProps {
    messages: Message[];
  }
  
  export interface ErrorComponentProps {
    error: Error & { digest?: string };
    reset: () => void;
  }