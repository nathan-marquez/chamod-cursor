import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger';
  size?: 'small' | 'medium';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default', size = 'medium' }) => {
  const baseStyles = 'flex items-center rounded-lg shadow-sm transition-all duration-200';
  
  const sizeStyles = {
    small: 'p-3 text-sm',
    medium: 'p-4 text-base',
  };

  const variantStyles = {
    default: {
      container: 'bg-gray-800 text-gray-100 border border-gray-600',
      icon: 'text-gray-400',
    },
    primary: {
      container: 'bg-blue-900 text-blue-100 border border-blue-600',
      icon: 'text-blue-300',
    },
    danger: {
      container: 'bg-red-900 text-red-100 border border-red-600',
      icon: 'text-red-300',
    },
  };

  const currentStyles = variantStyles[variant];
  const className = `${baseStyles} ${sizeStyles[size]} ${currentStyles.container}`;

  return (
    <div className={className}>
      {icon && <div className={`mr-3 text-xl ${currentStyles.icon}`}>{icon}</div>}
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default Callout;
