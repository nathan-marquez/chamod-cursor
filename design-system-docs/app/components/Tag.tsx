import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger' | 'primary';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-slate-800 text-slate-100 border border-slate-600 hover:bg-slate-700 transition-colors duration-200',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500 hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-sm hover:shadow-red-500/20',
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-blue-500/20',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
