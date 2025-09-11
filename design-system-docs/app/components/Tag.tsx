import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary' | 'filled';
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
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  const variantStyles = {
    default: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 hover:from-gray-700 hover:to-gray-800',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-500/20',
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/20',
    filled: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white border border-gray-500 hover:from-gray-500 hover:to-gray-600 shadow-lg shadow-gray-500/20',
  };

  const className = `inline-flex items-center rounded-full font-medium transition-all duration-200 ease-in-out ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
      {removable && onRemove && (
        <button
          onClick={onRemove}
          className="ml-1.5 -mr-1 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-white/20 transition-colors duration-150"
          aria-label={`Remove ${label} tag`}
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
