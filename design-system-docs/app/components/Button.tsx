import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'filled';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  const baseStyle = 'px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl',
    filled: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl border border-gray-600',
  };

  const className = `${baseStyle} ${variantStyles[variant!]}`;

  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
