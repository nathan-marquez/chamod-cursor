import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gray-800 text-gray-100 border border-gray-600',
    primary: 'bg-blue-600 text-white border border-blue-500',
    danger: 'bg-red-600 text-white border border-red-500',
    filled: 'bg-gray-700 text-white border border-gray-500',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
