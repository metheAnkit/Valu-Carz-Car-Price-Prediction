import React from 'react';

export const Card = ({ children, className = '' }) => {
  const baseClasses = 'bg-card border border-border rounded-lg overflow-hidden';
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  const baseClasses = 'p-6';
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};
