import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 transition-colors duration-200',
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500 hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-sm',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
