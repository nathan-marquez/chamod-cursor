import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-slate-700 text-slate-100 border border-slate-600',
    primary: 'bg-blue-600 text-white border border-blue-500',
    danger: 'bg-red-600 text-white border border-red-500',
  };

  const className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
