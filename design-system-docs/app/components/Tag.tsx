import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary' | 'filled';
  size?: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default', size = 'medium' }) => {
  const baseStyle = 'inline-flex items-center font-medium transition-colors duration-200';
  
  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs rounded-full',
    medium: 'px-2.5 py-1 text-sm rounded-full',
  };

  const variantStyles = {
    default: 'bg-gray-800 text-gray-200 border border-gray-600',
    danger: 'bg-red-600 text-white border border-red-500',
    primary: 'bg-blue-600 text-white border border-blue-500',
    filled: 'bg-gray-700 text-white border border-gray-600',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
