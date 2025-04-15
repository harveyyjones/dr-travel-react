import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/**
 * Input Component - Reusable form input
 * Similar to TextFormField in Flutter
 * 
 * @param {Object} props
 * @param {string} props.type - Input type (text, email, password, etc.)
 * @param {string} props.label - Input label
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {boolean} props.required - Whether the input is required
 * @param {string} props.pattern - Validation pattern
 * @param {string} props.title - Validation message
 */
const Input = ({ 
  type = 'text',
  label,
  value,
  onChange,
  required,
  pattern,
  title,
  ...props 
}) => {
  return (
    <div className="input-container">
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        className="input-field"
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        title={title}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  title: PropTypes.string
};

export default Input; 