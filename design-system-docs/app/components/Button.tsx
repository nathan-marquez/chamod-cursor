import type React from "react";

interface ButtonProps {
  label?: string;
  variant?: "primary" | "danger" | "filled";
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary" }) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-400 shadow-blue-500/25",
    danger:
      "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-400 shadow-red-500/25",
    filled:
      "bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700 focus:ring-slate-400 shadow-slate-500/25",
  };

  const className = `${baseStyle} ${variantStyles[variant]}`;

  return <button type="button" className={className}>{label || "Button"}</button>;
};

export default Button;
