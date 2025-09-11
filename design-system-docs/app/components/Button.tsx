import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "danger" | "filled";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-6 py-3 text-lg rounded-lg",
  };

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50 shadow-lg hover:shadow-xl",
    danger:
      "bg-danger text-danger-foreground hover:bg-danger/90 focus:ring-danger/50 shadow-lg hover:shadow-xl",
    filled:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/50 border border-border shadow-md hover:shadow-lg",
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
