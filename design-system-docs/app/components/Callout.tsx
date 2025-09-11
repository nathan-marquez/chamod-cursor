import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 rounded-lg shadow-lg',
      icon: 'text-gray-400 bg-white rounded-full p-1 border border-transparent',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-700 to-red-800 text-white border border-red-500 rounded-lg shadow-lg shadow-red-500/25',
      icon: 'text-yellow-300 bg-red-100 rounded-full p-1',
    },
    primary: {
      container: 'bg-gradient-to-r from-blue-700 to-blue-800 text-white border border-blue-500 rounded-lg shadow-lg shadow-blue-500/25',
      icon: 'text-blue-300 bg-blue-100 rounded-full p-1',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-center p-4 rounded-lg shadow-sm transition-all duration-200 ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-xl ${currentStyles.icon}`}>{icon}</div>}
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Callout;
