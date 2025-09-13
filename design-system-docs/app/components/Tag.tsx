import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-black text-white',
    primary: 'bg-blue-600 text-white',
    danger: 'bg-red-600 text-white',
    filled: 'bg-gray-700 text-white',
  };

  const className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
