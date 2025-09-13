import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-black text-white hover:bg-gray-800 transition-colors duration-200',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 transition-colors duration-200',
    filled: 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 transition-colors duration-200',
  };

  const className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
