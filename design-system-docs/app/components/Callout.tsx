import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-slate-800 to-slate-700 text-white border border-slate-600 rounded-lg shadow-lg hover:shadow-slate-500/10 transition-all duration-200',
      icon: 'text-slate-300 bg-slate-600 rounded-full p-1 border border-slate-500',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-800 to-red-700 text-white border border-red-600 rounded-lg shadow-lg hover:shadow-red-500/20 transition-all duration-200',
      icon: 'text-red-200 bg-red-600 rounded-full p-1 border border-red-500',
    },
    primary: {
      container: 'bg-gradient-to-r from-blue-800 to-blue-700 text-white border border-blue-600 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-200',
      icon: 'text-blue-200 bg-blue-600 rounded-full p-1 border border-blue-500',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-center p-4 rounded-lg shadow-sm ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-xl ${currentStyles.icon}`}>{icon}</div>}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default Callout;
