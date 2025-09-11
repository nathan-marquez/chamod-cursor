import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-[#3C3C4C] text-white border border-[#4E4E5B] rounded-lg',
      icon: 'text-[#8C8C96] bg-white rounded-full p-0.5 border border-transparent',
    },
    danger: {
      container: 'bg-[#C62B2B] text-white border border-[#F25555] rounded-lg',
      icon: 'text-yellow-300',
    },
    primary: {
      container: 'bg-blue-600 text-white border border-blue-700 rounded-lg',
      icon: 'text-blue-200',
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
