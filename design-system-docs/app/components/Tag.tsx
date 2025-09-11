import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary' | 'filled';
  size?: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default', size = 'medium' }) => {
  const baseStyle = 'inline-flex items-center font-medium rounded-full border';
  
  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-2.5 py-1 text-sm',
  };

  const variantStyles = {
    default: 'bg-gray-800 text-white border-gray-700',
    danger: 'bg-red-600 text-white border-red-600',
    primary: 'bg-blue-600 text-white border-blue-600',
    filled: 'bg-gray-700 text-white border-gray-600',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
