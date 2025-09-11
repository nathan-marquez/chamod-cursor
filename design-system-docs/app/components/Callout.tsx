import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

const Callout: React.FC<CalloutProps> = ({ 
  message, 
  icon, 
  variant = 'default',
  size = 'md' 
}) => {
  const baseStyle = 'flex items-center shadow-sm transition-all duration-200 ease-in-out';

  const sizeStyles = {
    sm: 'p-3 rounded-md text-sm',
    md: 'p-4 rounded-lg text-base',
    lg: 'p-6 rounded-xl text-lg',
  };

  const variantStyles = {
    default: {
      container: 'bg-slate-800/80 text-slate-100 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/90',
      icon: 'text-slate-400 bg-slate-700 rounded-full p-1',
    },
    primary: {
      container: 'bg-gradient-to-r from-blue-900/80 to-blue-800/80 text-blue-100 border border-blue-600/30 backdrop-blur-sm hover:from-blue-900/90 hover:to-blue-800/90',
      icon: 'text-blue-300 bg-blue-700/50 rounded-full p-1',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-900/80 to-red-800/80 text-red-100 border border-red-600/30 backdrop-blur-sm hover:from-red-900/90 hover:to-red-800/90',
      icon: 'text-red-300 bg-red-700/50 rounded-full p-1',
    },
    filled: {
      container: 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-gray-100 border border-gray-600/30 backdrop-blur-sm hover:from-gray-900 hover:to-gray-800',
      icon: 'text-gray-300 bg-gray-700/50 rounded-full p-1',
    },
  };

  const currentStyles = variantStyles[variant];
  const iconSizeClass = size === 'lg' ? 'text-2xl mr-4' : size === 'sm' ? 'text-lg mr-2' : 'text-xl mr-3';

  return (
    <div className={`${baseStyle} ${sizeStyles[size]} ${currentStyles.container}`}>
      {icon && (
        <div className={`${iconSizeClass} ${currentStyles.icon}`}>
          {icon}
        </div>
      )}
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default Callout;
