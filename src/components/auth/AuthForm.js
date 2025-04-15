import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';

/**
 * AuthForm Component - Reusable form for authentication pages
 * Similar to Form widget in Flutter
 * 
 * @param {Object} props
 * @param {string} props.title - Form title
 * @param {Function} props.onSubmit - Form submit handler
 * @param {string} props.error - Error message to display
 * @param {boolean} props.isLoading - Loading state
 * @param {React.ReactNode} props.children - Form fields
 */
const AuthForm = ({ 
  title, 
  onSubmit, 
  isLoading, 
  error, 
  children 
}) => {
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={onSubmit}>
        <h2>{title}</h2>
        {children}
        {error && <div className="auth-error">{error}</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default AuthForm; 