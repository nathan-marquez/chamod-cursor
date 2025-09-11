import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary' | 'filled';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-600 rounded-lg shadow-lg',
      icon: 'text-gray-300 bg-white rounded-full p-0.5 border border-transparent',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-700 to-red-800 text-white border border-red-500 rounded-lg shadow-lg',
      icon: 'text-yellow-300',
    },
    primary: {
      container: 'bg-gradient-to-r from-blue-700 to-blue-800 text-white border border-blue-500 rounded-lg shadow-lg',
      icon: 'text-blue-200',
    },
    filled: {
      container: 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-500 rounded-lg shadow-lg',
      icon: 'text-gray-200',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-center p-4 rounded-lg shadow-sm transition-all duration-200 hover:shadow-lg ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-xl ${currentStyles.icon}`}>{icon}</div>}
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Callout;
