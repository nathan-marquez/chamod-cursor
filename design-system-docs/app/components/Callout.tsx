import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gray-800 text-white border border-gray-700 rounded-lg shadow-lg',
      icon: 'text-gray-400 bg-white rounded-full p-0.5 border border-transparent',
    },
    danger: {
      container: 'bg-red-700 text-white border border-red-500 rounded-lg shadow-lg',
      icon: 'text-yellow-300 bg-red-800 rounded-full p-1',
    },
    primary: {
      container: 'bg-blue-700 text-white border border-blue-500 rounded-lg shadow-lg',
      icon: 'text-blue-200 bg-blue-800 rounded-full p-1',
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
