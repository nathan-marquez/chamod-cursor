import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'danger';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-gradient-to-r from-slate-800 to-slate-900 text-white border border-slate-700/50 shadow-sm',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500/30 shadow-sm shadow-red-500/20',
  };

  const className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:shadow-md ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
