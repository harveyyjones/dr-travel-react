import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`input-container ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <input className="input-field" {...props} />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input; 