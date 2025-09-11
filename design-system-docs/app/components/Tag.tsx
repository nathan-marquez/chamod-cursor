import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gray-800 text-gray-200 border border-gray-600 hover:bg-gray-700',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500 hover:from-red-700 hover:to-red-800 shadow-sm',
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 hover:from-blue-700 hover:to-blue-800 shadow-sm',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
