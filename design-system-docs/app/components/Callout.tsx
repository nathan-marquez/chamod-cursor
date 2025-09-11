import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-slate-800/80 to-slate-900/80 text-white border border-slate-700/60 rounded-xl backdrop-blur-sm shadow-lg',
      icon: 'text-slate-400 bg-slate-700/50 rounded-full p-1 border border-slate-600/30',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-900/80 to-red-800/80 text-white border border-red-600/60 rounded-xl backdrop-blur-sm shadow-lg shadow-red-500/10',
      icon: 'text-red-300 bg-red-800/50 rounded-full p-1 border border-red-600/30',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-center p-5 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md ${currentStyles.container}`}>
      {icon && <div className={`mr-4 text-xl ${currentStyles.icon}`}>{icon}</div>}
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
};

export default Callout;
