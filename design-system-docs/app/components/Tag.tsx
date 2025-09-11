import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger';
  size?: 'small' | 'medium';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default', size = 'medium' }) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium transition-all duration-200';
  
  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-2.5 py-1 text-sm',
  };

  const variantStyles = {
    default: 'bg-gray-800 text-gray-200 hover:bg-gray-700',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const className = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
