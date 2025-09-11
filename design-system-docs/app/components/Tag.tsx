import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500 shadow-red-500/25',
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 shadow-blue-500/25',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
