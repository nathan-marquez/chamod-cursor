import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary' | 'filled';
  size?: 'small' | 'medium' | 'large';
  removable?: boolean;
  onRemove?: () => void;
}

const Tag: React.FC<TagProps> = ({ 
  label, 
  variant = 'default', 
  size = 'medium',
  removable = false,
  onRemove 
}) => {
  const baseStyle = 'inline-flex items-center font-medium transition-all duration-200';

  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs rounded-md',
    medium: 'px-2.5 py-0.5 text-xs rounded-full',
    large: 'px-3 py-1 text-sm rounded-full',
  };

  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    danger: 'bg-red-100 text-red-800 hover:bg-red-200 border border-red-200',
    primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-200',
    filled: 'bg-gray-800 text-white hover:bg-gray-700',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
      {removable && (
        <button
          type="button"
          className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-current hover:bg-black hover:bg-opacity-10 rounded-full focus:outline-none focus:bg-black focus:bg-opacity-10"
          onClick={onRemove}
          aria-label={`Remove ${label} tag`}
        >
          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
