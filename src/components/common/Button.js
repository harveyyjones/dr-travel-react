import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  isLoading, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`button ${isLoading ? 'loading' : ''} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="button-loader" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button; 