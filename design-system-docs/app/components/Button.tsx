import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'filled';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200',
    filled: 'bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200',
  };

  const className = `${baseStyle} ${variantStyles[variant!]}`;

  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
