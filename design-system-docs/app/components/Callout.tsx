import React from "react";

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: "default" | "danger" | "success" | "warning";
}

const Callout: React.FC<CalloutProps> = ({
  message,
  icon,
  variant = "default",
}) => {
  const baseStyle =
    "flex items-center p-4 rounded-lg shadow-sm transition-all duration-200";

  const variantStyles = {
    default: {
      container: "bg-secondary text-secondary-foreground border border-border",
      icon: "text-muted-foreground",
    },
    danger: {
      container: "bg-danger/10 text-danger border border-danger/20",
      icon: "text-danger",
    },
    success: {
      container: "bg-success/10 text-success border border-success/20",
      icon: "text-success",
    },
    warning: {
      container: "bg-warning/10 text-warning border border-warning/20",
      icon: "text-warning",
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div className={`${baseStyle} ${currentStyles.container}`}>
      {icon && (
        <div className={`mr-3 text-xl ${currentStyles.icon}`}>{icon}</div>
      )}
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default Callout;
