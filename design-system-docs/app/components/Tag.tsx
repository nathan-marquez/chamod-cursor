import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gradient-to-r from-slate-800 to-slate-900 text-white border border-slate-700 shadow-sm',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white border border-red-400 shadow-sm shadow-red-500/25',
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 shadow-sm shadow-blue-500/25',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 ease-in-out hover:scale-105 ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
