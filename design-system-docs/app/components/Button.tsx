import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'danger' | 'filled';
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75';

  const variantStyles = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-blue-700 focus:ring-[var(--color-primary)]',
    danger: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)] hover:bg-red-700 focus:ring-[var(--color-danger)]',
    filled: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-muted)] focus:ring-[var(--color-ring)]',
  };

  const className = `${baseStyle} ${variantStyles[variant!]}`;

  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
