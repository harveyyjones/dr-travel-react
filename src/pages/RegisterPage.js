/**
 * RegisterPage.js - User Registration Page
 * Similar to RegisterScreen in Flutter
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
import AuthForm from '../components/auth/AuthForm';
import Input from '../components/common/Input';
import GradientBackground from '../components/common/GradientBackground';
import './AuthPages.css';

/**
 * RegisterPage Component
 * Similar to RegisterScreen widget in Flutter
 * 
 * Features:
 * 1. Email/Password Registration
 * 2. Password Confirmation
 * 3. Form Validation
 * 4. Error Handling
 * 5. Loading States
 */
const RegisterPage = () => {
  // State Management - Similar to StatefulWidget in Flutter
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Navigation Hook - Similar to Navigator in Flutter
  const navigate = useNavigate();

  /**
   * Handle User Registration
   * Similar to FirebaseAuth.instance.createUserWithEmailAndPassword() in Flutter
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Password validation - Similar to form validation in Flutter
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      // Attempt to create new user
      await authService.signUp(email, password);
      // Navigate to home page on success
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Gradient Background - Similar to Container with gradient in Flutter
    <GradientBackground>
      {/* Auth Form - Similar to Form widget in Flutter */}
      <AuthForm
        title="Create Account"
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
      >
        {/* Email Input - Similar to TextFormField in Flutter */}
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Password Input - Similar to TextFormField in Flutter */}
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Confirm Password Input - Similar to TextFormField in Flutter */}
        <Input
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </AuthForm>
    </GradientBackground>
  );
};

export default RegisterPage; 