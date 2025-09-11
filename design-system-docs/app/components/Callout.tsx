import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-600 rounded-lg shadow-lg backdrop-blur-sm',
      icon: 'text-slate-300 bg-white/10 rounded-full p-1 border border-slate-500',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500 rounded-lg shadow-lg shadow-red-500/25 backdrop-blur-sm',
      icon: 'text-yellow-200 bg-red-500/20 rounded-full p-1 border border-red-400',
    },
    primary: {
      container: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500 rounded-lg shadow-lg shadow-blue-500/25 backdrop-blur-sm',
      icon: 'text-blue-100 bg-blue-500/20 rounded-full p-1 border border-blue-400',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-center p-4 rounded-lg shadow-sm transition-all duration-200 hover:shadow-lg ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-xl ${currentStyles.icon}`}>{icon}</div>}
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Callout;
