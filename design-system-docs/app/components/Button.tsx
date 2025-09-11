import React from 'react';

/**
 * Button Component - Updated from Figma Design System
 * Figma Component Keys:
 * - Primary: 361792417486066fd0ea12bbcec92487e0dbb41b
 * - Danger: 291fb2a90eb1fcedfe57ea65baa3135f81c56518
 * - Filled: 984591f1eec68eb2b8edfa981b24871b0084edb8
 */

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'filled';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  const baseStyle = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75 shadow-sm hover:shadow-md active:transform active:scale-95';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 border border-blue-500/20',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500 border border-red-500/20',
    filled: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-800 hover:to-slate-900 focus:ring-slate-500 border border-slate-600/20',
  };

  const className = `${baseStyle} ${variantStyles[variant!]}`;

  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
