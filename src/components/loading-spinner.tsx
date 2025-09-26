import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-white/20 border-t-[var(--color-accent)] ${sizeClasses[size]} ${className}`} />
  );
}

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({ message = 'Loading...', className = '' }: LoadingStateProps) {
  return (
    <div className={`flex items-center justify-center gap-3 py-8 ${className}`}>
      <LoadingSpinner />
      <span className="text-sm text-white/70">{message}</span>
    </div>
  );
}

interface ExternalLinkLoadingProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  loadingMessage?: string;
}

export function ExternalLinkWithLoading({ 
  href, 
  children, 
  className = '', 
  loadingMessage = 'Opening external link...' 
}: ExternalLinkLoadingProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsLoading(true);
    // Reset loading state after a short delay
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <LoadingSpinner size="sm" />
          {loadingMessage}
        </span>
      ) : (
        children
      )}
    </a>
  );
}