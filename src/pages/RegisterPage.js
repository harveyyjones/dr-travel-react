import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/firebase';
import AuthForm from '../components/auth/AuthForm';
import Input from '../components/common/Input';
import GradientBackground from '../components/common/GradientBackground';
import './AuthPages.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      await authService.signUp(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GradientBackground>
      <AuthForm
        title="Create Account"
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
      >
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
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