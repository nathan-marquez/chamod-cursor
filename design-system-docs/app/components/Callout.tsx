import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const baseStyle = 'flex items-start p-5 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl';

  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-slate-800/90 to-slate-900/90 text-white border border-slate-700/50 shadow-slate-800/25',
      icon: 'text-blue-400 bg-blue-500/10 rounded-full p-2 border border-blue-500/20',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-900/90 to-red-800/90 text-white border border-red-700/50 shadow-red-800/25',
      icon: 'text-yellow-300 bg-yellow-500/10 rounded-full p-2 border border-yellow-500/20',
      iconBg: 'bg-yellow-500/10 border-yellow-500/20',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`${baseStyle} ${currentStyles.container}`}>
      {icon && (
        <div className={`mr-4 text-xl flex-shrink-0 ${currentStyles.icon}`}>
          {icon}
        </div>
      )}
      <div className="flex-1">
        <p className="leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default Callout;
