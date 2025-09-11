import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger';
  size?: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default', size = 'medium' }) => {
  const baseStyle = 'inline-flex items-center font-medium rounded-full transition-colors';
  
  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-2.5 py-0.5 text-xs',
  };

  const variantStyles = {
    default: 'bg-gray-800 text-gray-100 border border-gray-600',
    primary: 'bg-blue-600 text-white',
    danger: 'bg-red-600 text-white',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
