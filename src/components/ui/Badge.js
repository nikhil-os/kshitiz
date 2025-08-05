import React from "react";

const Badge = ({ children, variant = "primary", className = "" }) => {
  const baseClasses =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";

  const variantClasses = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
