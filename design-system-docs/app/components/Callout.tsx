import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'danger' | 'filled';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'primary' }) => {
  const variantStyles = {
    primary: {
      container: 'bg-blue-600 text-white border border-blue-500 rounded-lg',
      icon: 'text-blue-200',
    },
    danger: {
      container: 'bg-[#C62B2B] text-white border border-[#F25555] rounded-lg',
      icon: 'text-yellow-300',
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
