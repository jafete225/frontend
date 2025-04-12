/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { activeTab, setActiveTab })
  );
};

export const TabsList = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => {
  const isActive = value === activeTab;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded-md border ${
        isActive ? "bg-blue-600 text-white" : "bg-white text-gray-700"
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, activeTab, children }) => {
  return value === activeTab ? <div className="mt-4">{children}</div> : null;
};
