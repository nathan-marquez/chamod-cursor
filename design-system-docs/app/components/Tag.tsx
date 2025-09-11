import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gray-800 text-white hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
