import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/firebase';
import { useAuth } from '../context/AuthContext';
import AuthForm from '../components/auth/AuthForm';
import Input from '../components/common/Input';
import GradientBackground from '../components/common/GradientBackground';
import './AuthPages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await authService.signIn(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authService.signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Failed to sign in with Google.');
    }
  };

  return (
    <GradientBackground>
      <AuthForm
        title="Welcome Back"
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
        <div className="auth-options">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
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