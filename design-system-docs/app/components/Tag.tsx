import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default', size = 'md' }) => {
  const baseStyle = 'inline-flex items-center font-medium transition-all duration-200 ease-in-out';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs rounded-full',
    md: 'px-2.5 py-0.5 text-xs rounded-full',
    lg: 'px-3 py-1 text-sm rounded-full',
  };

  const variantStyles = {
    default: 'bg-gray-900 text-gray-100 border border-gray-700 hover:bg-gray-800',
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-sm hover:from-blue-700 hover:to-blue-800',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-sm hover:from-red-700 hover:to-red-800',
    filled: 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-sm hover:from-gray-600 hover:to-gray-700',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
