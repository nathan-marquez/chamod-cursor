import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-slate-700 text-slate-100 border border-slate-600 rounded-lg',
      icon: 'text-slate-300',
    },
    primary: {
      container: 'bg-blue-600 text-white border border-blue-500 rounded-lg',
      icon: 'text-blue-200',
    },
    danger: {
      container: 'bg-red-600 text-white border border-red-500 rounded-lg',
      icon: 'text-red-200',
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
