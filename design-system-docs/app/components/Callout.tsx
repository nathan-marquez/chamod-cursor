import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 rounded-lg shadow-lg',
      icon: 'text-gray-400 bg-white rounded-full p-0.5 border border-transparent',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-700 to-red-800 text-white border border-red-600 rounded-lg shadow-lg',
      icon: 'text-yellow-300',
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
