// src/components/ErrorFallback.tsx

import React from 'react';
import { ErrorComponentProps } from '@/src/types';

const ErrorFallback: React.FC<ErrorComponentProps> = ({ error, reset }) => {
  return (
    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Oops! Something went wrong.</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;