import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
  size?: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default', size = 'medium' }) => {
  const baseStyle = 'inline-flex items-center font-medium rounded-full border transition-colors duration-200';
  
  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-2.5 py-1 text-sm',
  };

  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200',
    primary: 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
    danger: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200',
    filled: 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
