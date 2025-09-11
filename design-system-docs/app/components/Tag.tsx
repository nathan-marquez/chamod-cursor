import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  removable?: boolean;
  onRemove?: () => void;
}

const Tag: React.FC<TagProps> = ({ 
  label, 
  variant = 'default', 
  size = 'md',
  removable = false,
  onRemove 
}) => {
  const baseStyle = 'inline-flex items-center font-medium rounded-full transition-all duration-200 hover:scale-105';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  const variantStyles = {
    default: 'bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200',
    danger: 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
          aria-label={`Remove ${label} tag`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
