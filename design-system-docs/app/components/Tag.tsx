import type React from "react";

interface TagProps {
  label: string;
  variant?: "default" | "danger" | "primary";
  size?: "sm" | "md" | "lg";
}

const Tag: React.FC<TagProps> = ({
  label,
  variant = "default",
  size = "md",
}) => {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base",
  };

  const variantStyles = {
    default:
      "bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-600 shadow-sm",
    danger:
      "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md border border-red-500/50",
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md border border-blue-500/50",
  };

  const className = `inline-flex items-center rounded-full font-medium transition-all duration-200 hover:shadow-lg ${sizeStyles[size]} ${variantStyles[variant]}`;

  return <span className={className}>{label}</span>;
};

export default Tag;
