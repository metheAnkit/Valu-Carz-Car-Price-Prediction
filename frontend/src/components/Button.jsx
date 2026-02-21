import React from 'react';

export const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded-lg font-semibold transition-all inline-flex items-center justify-center';
  
  let variantClasses = '';
  
  if (variant === 'default' || !variant) {
    variantClasses = 'bg-primary text-white hover:bg-primary/90';
  } else if (variant === 'outline') {
    variantClasses = 'border-2 border-primary text-primary hover:bg-primary hover:text-white';
  } else if (variant === 'secondary') {
    variantClasses = 'bg-secondary text-white hover:bg-secondary/90';
  }
  
  const finalClasses = className || variantClasses;
  
  return (
    <button className={`${baseClasses} ${finalClasses}`} {...props}>
      {children}
    </button>
  );
};
