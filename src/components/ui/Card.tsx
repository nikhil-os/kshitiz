import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  const baseClasses =
    "bg-white rounded-2xl border border-gray-100 overflow-hidden";
  const hoverClasses = hover
    ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
