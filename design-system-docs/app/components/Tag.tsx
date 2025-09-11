import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary';
  size?: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default', size = 'medium' }) => {
  const baseStyle = 'inline-flex items-center font-medium transition-all duration-200 ease-in-out';
  
  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs rounded-md',
    medium: 'px-2.5 py-0.5 text-xs rounded-full',
  };

  const variantStyles = {
    default: 'bg-gray-900 text-white border border-gray-900',
    danger: 'bg-red-600 text-white border border-red-600',
    primary: 'bg-blue-600 text-white border border-blue-600',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
