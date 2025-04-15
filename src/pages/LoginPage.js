/**
 * LoginPage.js - User Authentication Page
 * Similar to LoginScreen in Flutter
 * 
 * Key Concepts:
 * 1. Form Handling - Similar to Form widget in Flutter
 * 2. State Management - Similar to StatefulWidget in Flutter
 * 3. Navigation - Similar to Navigator in Flutter
 * 4. Authentication - Similar to FirebaseAuth in Flutter
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/firebase';
import { useAuth } from '../context/AuthContext';
import AuthForm from '../components/auth/AuthForm';
import Input from '../components/common/Input';
import GradientBackground from '../components/common/GradientBackground';
import './AuthPages.css';

/**
 * LoginPage Component
 * Similar to LoginScreen widget in Flutter
 * 
 * Features:
 * 1. Email/Password Login
 * 2. Google Sign In
 * 3. Form Validation
 * 4. Error Handling
 * 5. Loading States
 */
const LoginPage = () => {
  // State Management - Similar to StatefulWidget in Flutter
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  
  // Navigation Hook - Similar to Navigator in Flutter
  const navigate = useNavigate();
  
  // Auth Context - Similar to Provider.of<AuthService>(context) in Flutter
  const { currentUser } = useAuth();

  /**
   * Handle Email/Password Login
   * Similar to FirebaseAuth.instance.signInWithEmailAndPassword() in Flutter
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Attempt to sign in
      await authService.signIn(email, password);
      // Navigate to home page on success
      navigate('/');
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle Google Sign In
   * Similar to FirebaseAuth.instance.signInWithPopup() in Flutter
   */
  const handleGoogleSignIn = async () => {
    try {
      await authService.signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Failed to sign in with Google.');
    }
  };

  /**
   * Handle Email Input Change and Validation
   * 
   * @param {Event} e - The event object passed by the browser when the input changes
   * 
   * The event object (e) contains:
   * 1. target: The HTML input element that triggered the event
   * 2. currentTarget: The element the event listener is attached to
   * 3. type: The type of event ("change" in this case)
   * 4. timeStamp: When the event occurred
   * 
   * The function:
   * 1. Gets the input element from the event
   * 2. Updates the email state with the new value
   * 3. Checks the browser's built-in validation
   * 4. Sets appropriate validation messages
   * 
   * Validation checks:
   * - validity.valid: Overall validity of the input
   * - validity.typeMismatch: If the input doesn't match the expected type (email)
   * - validity.valueMissing: If the required field is empty
   */
  const handleEmailChange = (e) => {
    // Get the input element that triggered the event
    const input = e.target;
    
    // Update the email state with the new value
    setEmail(input.value);
    
    // Check if the input is valid according to browser validation
    if (input.validity.valid) {
      // If valid, clear any validation messages
      setValidationMessage('');
    } else {
      // If invalid, check the specific type of validation error
      if (input.validity.typeMismatch) {
        // Show message if the email format is incorrect
        setValidationMessage('Please enter a valid email address');
      } else if (input.validity.valueMissing) {
        // Show message if the field is empty
        setValidationMessage('Email is required');
      }
    }
  };

  return (
    // Gradient Background - Similar to Container with gradient in Flutter
    <GradientBackground>
      {/* Auth Form - Similar to Form widget in Flutter */}
      <AuthForm
        title="Welcome Back"
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
      >
        {/* Email Input - Similar to TextFormField in Flutter */}
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
        />
        {validationMessage && (
          <div className="validation-message" style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem' }}>
            {validationMessage}
          </div>
        )}
        {/* Password Input - Similar to TextFormField in Flutter */}
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Auth Options - Similar to Row widget in Flutter */}
        <div className="auth-options">
          {/* Remember Me Checkbox - Similar to Checkbox in Flutter */}
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          {/* Google Sign In Button - Similar to ElevatedButton in Flutter */}
          <button 
            type="button" 
            className="google-sign-in"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>
      </AuthForm>
    </GradientBackground>
  );
};

export default LoginPage; 