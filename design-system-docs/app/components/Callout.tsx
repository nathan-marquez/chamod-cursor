import type React from "react";

interface CalloutProps {
  message: string;
  icon?: React.ReactNode;
  variant?: "default" | "danger" | "primary" | "success";
  size?: "sm" | "md" | "lg";
}

const Callout: React.FC<CalloutProps> = ({
  message,
  icon,
  variant = "default",
  size = "md",
}) => {
  const sizeStyles = {
    sm: "p-3 text-sm",
    md: "p-4 text-base",
    lg: "p-6 text-lg",
  };

  const variantStyles = {
    default: {
      container:
        "bg-gradient-to-r from-slate-800 to-slate-900 text-white border border-slate-600 shadow-lg",
      icon: "text-slate-400 bg-white/10 rounded-full p-1 border border-slate-500",
    },
    danger: {
      container:
        "bg-gradient-to-r from-red-700 to-red-800 text-white border border-red-500 shadow-lg",
      icon: "text-yellow-200 bg-red-600/30 rounded-full p-1 border border-red-400",
    },
    primary: {
      container:
        "bg-gradient-to-r from-blue-700 to-blue-800 text-white border border-blue-500 shadow-lg",
      icon: "text-blue-200 bg-blue-600/30 rounded-full p-1 border border-blue-400",
    },
    success: {
      container:
        "bg-gradient-to-r from-green-700 to-green-800 text-white border border-green-500 shadow-lg",
      icon: "text-green-200 bg-green-600/30 rounded-full p-1 border border-green-400",
    },
  };

  const currentStyles = variantStyles[variant];

  return (
    <div
      className={`flex items-center rounded-xl transition-all duration-200 hover:shadow-xl ${sizeStyles[size]} ${currentStyles.container}`}
    >
      {icon && (
        <div className={`mr-3 text-xl flex-shrink-0 ${currentStyles.icon}`}>
          {icon}
        </div>
      )}
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default Callout;
