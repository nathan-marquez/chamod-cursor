import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-slate-800 text-white shadow-sm',
    primary: 'bg-blue-600 text-white shadow-sm',
    danger: 'bg-red-500 text-white shadow-sm',
  };

  const className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
