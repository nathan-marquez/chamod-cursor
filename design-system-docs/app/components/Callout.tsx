import React from 'react';

interface CalloutProps {
  message: string;
  title?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'primary' | 'filled' | 'success' | 'warning';
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Callout: React.FC<CalloutProps> = ({ 
  message, 
  title,
  icon, 
  variant = 'default',
  dismissible = false,
  onDismiss 
}) => {
  const variantStyles = {
    default: {
      container: 'bg-gray-50 text-gray-800 border border-gray-200 rounded-lg',
      icon: 'text-gray-400',
      title: 'text-gray-900',
    },
    danger: {
      container: 'bg-red-50 text-red-800 border border-red-200 rounded-lg',
      icon: 'text-red-400',
      title: 'text-red-900',
    },
    primary: {
      container: 'bg-blue-50 text-blue-800 border border-blue-200 rounded-lg',
      icon: 'text-blue-400',
      title: 'text-blue-900',
    },
    filled: {
      container: 'bg-gray-800 text-white border border-gray-700 rounded-lg',
      icon: 'text-gray-300',
      title: 'text-white',
    },
    success: {
      container: 'bg-green-50 text-green-800 border border-green-200 rounded-lg',
      icon: 'text-green-400',
      title: 'text-green-900',
    },
    warning: {
      container: 'bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-lg',
      icon: 'text-yellow-400',
      title: 'text-yellow-900',
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`flex items-start p-4 shadow-sm ${currentStyles.container}`}>
      {icon && (
        <div className={`flex-shrink-0 mr-3 text-xl ${currentStyles.icon}`}>
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <h3 className={`text-sm font-semibold mb-1 ${currentStyles.title}`}>
            {title}
          </h3>
        )}
        <p className="text-sm">{message}</p>
      </div>
      {dismissible && (
        <button
          type="button"
          className={`flex-shrink-0 ml-3 text-current hover:opacity-75 focus:outline-none focus:opacity-75`}
          onClick={onDismiss}
          aria-label="Dismiss callout"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Callout;
