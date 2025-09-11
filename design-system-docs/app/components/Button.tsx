import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'filled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  size = 'medium',
  disabled = false 
}) => {
  const baseStyle = 'font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-200 ease-in-out rounded-lg border';

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-blue-500 active:bg-blue-800',
    danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700 focus:ring-red-500 active:bg-red-800',
    filled: 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800 hover:border-gray-800 focus:ring-gray-500 active:bg-gray-700',
  };

  const disabledStyle = 'opacity-50 cursor-not-allowed hover:bg-current hover:border-current';

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? disabledStyle : ''}`;

  return (
    <button className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
