import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger';
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Callout: React.FC<CalloutProps> = ({ 
  message, 
  icon, 
  variant = 'default',
  dismissible = false,
  onDismiss 
}) => {
  const variantStyles = {
    default: {
      container: 'bg-slate-50 text-slate-800 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow',
      icon: 'text-slate-500 bg-slate-100 rounded-full p-1 border border-slate-200',
    },
    danger: {
      container: 'bg-red-50 text-red-800 border border-red-200 rounded-lg shadow-sm hover:shadow-md transition-shadow',
      icon: 'text-red-500 bg-red-100 rounded-full p-1 border border-red-200',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-start p-4 ${currentStyles.container}`}>
      {icon && <div className={`mr-3 text-xl flex-shrink-0 ${currentStyles.icon}`}>{icon}</div>}
      <div className="flex-1">
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="ml-3 flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
          aria-label="Dismiss callout"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Callout;
