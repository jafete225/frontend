/* eslint-disable react/prop-types */
import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-4 ${className || ""}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
