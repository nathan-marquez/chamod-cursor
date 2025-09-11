import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'filled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick 
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed border';

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm rounded-md',
    medium: 'px-4 py-2 text-base rounded-lg',
    large: 'px-6 py-3 text-lg rounded-xl',
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
    danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
    filled: 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800 hover:border-gray-800 focus:ring-gray-500 shadow-sm hover:shadow-md',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <button 
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
