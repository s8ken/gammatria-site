'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="card-surface mx-auto max-w-md p-6 text-center">
      <div className="mb-4">
        <div className="mx-auto h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">Something went wrong</h3>
      <p className="text-sm text-white/70 mb-4">
        We encountered an unexpected error. Please try again or contact support if the problem persists.
      </p>
      
      {error && (
        <details className="mb-4 text-left">
          <summary className="cursor-pointer text-sm text-white/60 hover:text-white/80">
            Technical details
          </summary>
          <pre className="mt-2 text-xs text-white/50 bg-black/20 p-2 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
      
      <button
        onClick={resetError}
        className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorBoundary;