import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const LoadingSpinner = ({ size = 'md', className, label = 'Carregando...' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div 
      className={cn('flex items-center justify-center', className)}
      role="status"
      aria-label={label}
    >
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-primary border-t-transparent',
          sizeClasses[size]
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
};

export default LoadingSpinner;
