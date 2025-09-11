import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary' | 'success' | 'warning';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Callout: React.FC<CalloutProps> = ({ 
  message, 
  icon, 
  variant = 'default', 
  title,
  dismissible = false,
  onDismiss 
}) => {
  const variantStyles = {
    default: {
      container: 'bg-gradient-to-r from-slate-800 to-slate-900 text-white border border-slate-600 shadow-lg',
      icon: 'text-slate-400',
      title: 'text-slate-200',
    },
    danger: {
      container: 'bg-gradient-to-r from-red-900 to-red-800 text-white border border-red-600 shadow-lg shadow-red-500/20',
      icon: 'text-red-300',
      title: 'text-red-200',
    },
    primary: {
      container: 'bg-gradient-to-r from-blue-900 to-blue-800 text-white border border-blue-600 shadow-lg shadow-blue-500/20',
      icon: 'text-blue-300',
      title: 'text-blue-200',
    },
    success: {
      container: 'bg-gradient-to-r from-green-900 to-green-800 text-white border border-green-600 shadow-lg shadow-green-500/20',
      icon: 'text-green-300',
      title: 'text-green-200',
    },
    warning: {
      container: 'bg-gradient-to-r from-yellow-900 to-yellow-800 text-white border border-yellow-600 shadow-lg shadow-yellow-500/20',
      icon: 'text-yellow-300',
      title: 'text-yellow-200',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-start p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${currentStyles.container}`}>
      {icon && (
        <div className={`mr-3 mt-0.5 text-xl flex-shrink-0 ${currentStyles.icon}`}>
          {icon}
        </div>
      )}
      <div className="flex-grow">
        {title && (
          <h4 className={`font-semibold mb-1 ${currentStyles.title}`}>
            {title}
          </h4>
        )}
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-3 flex-shrink-0 text-white/60 hover:text-white transition-colors duration-200"
          aria-label="Dismiss notification"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Callout;
