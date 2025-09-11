import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gray-50 text-gray-800 border border-gray-200 rounded-lg',
      icon: 'text-gray-600',
    },
    primary: {
      container: 'bg-blue-50 text-blue-800 border border-blue-200 rounded-lg',
      icon: 'text-blue-600',
    },
    danger: {
      container: 'bg-red-50 text-red-800 border border-red-200 rounded-lg',
      icon: 'text-red-600',
    },
    filled: {
      container: 'bg-gray-900 text-white border border-gray-900 rounded-lg',
      icon: 'text-gray-300',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-start p-4 shadow-sm transition-colors duration-200 ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-lg flex-shrink-0 mt-0.5 ${currentStyles.icon}`}>{icon}</div>}
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
};

export default Callout;
