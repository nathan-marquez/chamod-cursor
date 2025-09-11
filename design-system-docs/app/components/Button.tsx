import type React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "danger" | "filled";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    danger:
      "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    filled:
      "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-gray-600",
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <button type="button" className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
