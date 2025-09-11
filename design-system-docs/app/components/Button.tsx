import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'filled';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  const baseStyle = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transform hover:scale-105 active:scale-95 shadow-lg';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 shadow-blue-200/50',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-500 shadow-red-200/50',
    filled: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-800 hover:to-slate-900 focus:ring-slate-500 shadow-slate-200/50',
  };

  const className = `${baseStyle} ${variantStyles[variant!]}`;

  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
