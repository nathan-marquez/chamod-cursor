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
  const baseStyle = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm rounded-md',
    medium: 'px-4 py-2 text-base rounded-lg',
    large: 'px-6 py-3 text-lg rounded-xl',
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800 shadow-lg hover:shadow-xl',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800 shadow-lg hover:shadow-xl',
    filled: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-900 shadow-lg hover:shadow-xl',
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <button 
      className={className}
      disabled={disabled}
      onClick={onClick}
      type="button"
      role="button"
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
