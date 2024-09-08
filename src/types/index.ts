// src/types/index.ts

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date; // Changed from number to Date
}
  
export interface User {
  id: string;
  name: string;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  user: User;
}
  
export interface ApiResponse<T = any> { // Made generic with a default type
  success: boolean;
  data?: T;
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