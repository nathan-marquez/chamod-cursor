import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'default' | 'filled';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    default: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 border border-gray-300',
    filled: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500',
  };

  const className = `${baseStyle} ${variantStyles[variant!]}`;

  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
