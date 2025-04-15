import React from 'react';
import './GradientBackground.css';

const GradientBackground = ({ children }) => {
  return (
    <div className="gradient-background">
      <div className="gradient-overlay" />
      {children}
    </div>
  );
};

export default GradientBackground; 