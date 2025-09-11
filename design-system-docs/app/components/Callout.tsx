import React from 'react';

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'danger' | 'filled';
}

const Callout: React.FC<CalloutProps> = ({ message, icon, variant = 'default' }) => {
  const variantStyles = {
    default: {
      container: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] border border-[var(--color-border)] rounded-lg',
      icon: 'text-[var(--color-muted-foreground)] bg-white rounded-full p-0.5 border border-transparent',
    },
    primary: {
      container: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border border-[var(--color-primary)] rounded-lg',
      icon: 'text-[var(--color-primary-foreground)]',
    },
    danger: {
      container: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)] border border-[var(--color-danger)] rounded-lg',
      icon: 'text-yellow-300',
    },
    filled: {
      container: 'bg-[var(--color-accent)] text-[var(--color-accent-foreground)] border border-[var(--color-accent)] rounded-lg',
      icon: 'text-[var(--color-accent-foreground)]',
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
