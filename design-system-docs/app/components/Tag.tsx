import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const baseStyle = 'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm border';

  const variantStyles = {
    default: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border-gray-700 shadow-gray-800/25 hover:from-gray-700 hover:to-gray-800',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500 shadow-red-600/25 hover:from-red-500 hover:to-red-600',
  };

  const className = `${baseStyle} ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
