import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gray-800 text-gray-100 border border-gray-600 rounded-lg shadow-lg',
      icon: 'text-gray-400 bg-gray-700 rounded-full p-1',
    },
    primary: {
      container: 'bg-blue-900 text-blue-100 border border-blue-600 rounded-lg shadow-lg',
      icon: 'text-blue-400 bg-blue-800 rounded-full p-1',
    },
    primary: {
      container: 'bg-blue-600 text-white border border-blue-500 rounded-lg',
      icon: 'text-blue-200',
    },
    danger: {
      container: 'bg-red-900 text-red-100 border border-red-600 rounded-lg shadow-lg',
      icon: 'text-red-400 bg-red-800 rounded-full p-1',
    },
    filled: {
      container: 'bg-gray-700 text-white border border-gray-500 rounded-lg shadow-lg',
      icon: 'text-gray-300 bg-gray-600 rounded-full p-1',
    },
    filled: {
      container: 'bg-gray-700 text-white border border-gray-600 rounded-lg',
      icon: 'text-gray-300',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-center p-4 rounded-md shadow-sm ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-xl ${currentStyles.icon}`}>{icon}</div>}
      <p>{message}</p>
    </div>
  );
};

export default Callout;
