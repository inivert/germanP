'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
  children: React.ReactNode;
}

export default function ErrorBoundary({ error, reset, children }: ErrorBoundaryProps) {
  if (!error) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </motion.div>
    </div>
  );
} 