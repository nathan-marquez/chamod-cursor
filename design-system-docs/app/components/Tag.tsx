import React from "react";

interface TagProps {
  label: string;
  variant?: "default" | "danger" | "primary" | "success" | "warning";
  size?: "sm" | "md" | "lg";
}

const Tag: React.FC<TagProps> = ({
  label,
  variant = "default",
  size = "md",
}) => {
  const baseStyle =
    "inline-flex items-center font-medium rounded-full transition-all duration-200";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base",
  };

  const variantStyles = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary text-primary-foreground",
    danger: "bg-danger text-danger-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
  };

  const className = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return <span className={className}>{label}</span>;
};

export default Tag;
