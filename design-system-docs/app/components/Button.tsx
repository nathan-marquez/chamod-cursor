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
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-blue-600 hover:border-blue-700',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-red-600 hover:border-red-700',
    filled: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 border border-gray-700 hover:border-gray-600',
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
