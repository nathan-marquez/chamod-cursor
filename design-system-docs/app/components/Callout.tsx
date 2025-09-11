import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gray-800 text-gray-100 border border-gray-600 rounded-lg',
      icon: 'text-gray-400',
    },
    primary: {
      container: 'bg-blue-900 text-blue-100 border border-blue-600 rounded-lg',
      icon: 'text-blue-400',
    },
    danger: {
      container: 'bg-red-900 text-red-100 border border-red-600 rounded-lg',
      icon: 'text-red-400',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-start p-4 rounded-lg shadow-sm transition-colors ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-lg mt-0.5 flex-shrink-0 ${currentStyles.icon}`}>{icon}</div>}
      <div className="text-sm leading-relaxed">{message}</div>
    </div>
  );
};

export default Callout;
