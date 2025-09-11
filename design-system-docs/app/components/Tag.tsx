import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'danger';
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]',
    primary: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]',
    danger: 'bg-[var(--color-danger)] text-[var(--color-danger-foreground)]',
  };

  const className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant!]}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
};

export default Tag;
