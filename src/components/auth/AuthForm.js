import React from 'react';
import { Button, Input } from '../common';
import './AuthForm.css';

const AuthForm = ({ 
  title, 
  onSubmit, 
  isLoading, 
  error, 
  children 
}) => {
  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h2 className="auth-title">{title}</h2>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={onSubmit}>
          {children}
          <Button 
            type="submit" 
            className="auth-submit"
            isLoading={isLoading}
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm; 