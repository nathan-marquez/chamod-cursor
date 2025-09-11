import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-slate-700 text-white border border-slate-600 rounded-lg shadow-sm',
      icon: 'text-slate-400 bg-white rounded-full p-0.5 border border-transparent',
    },
    danger: {
      container: 'bg-red-600 text-white border border-red-500 rounded-lg shadow-sm',
      icon: 'text-yellow-200',
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
