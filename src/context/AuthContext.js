/**
 * AuthContext.js - Authentication State Management
 * Similar to AuthService + Provider in Flutter
 * 
 * Key Concepts:
 * 1. Context API - Similar to Provider package in Flutter
 *    - Provides a way to share data between components without prop drilling
 *    - Similar to Provider.of<AuthService>(context) in Flutter
 * 
 * 2. Hooks - Similar to StatefulWidget + setState in Flutter
 *    - useState: Manages local component state
 *    - useEffect: Handles side effects (like auth state changes)
 *    - useContext: Accesses context values
 * 
 * 3. Firebase Auth - Similar to Firebase Auth in Flutter
 *    - Handles user authentication
 *    - Manages auth state changes
 *    - Provides user information
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../services/firebase';

/**
 * AuthContext - Creates a context for authentication
 * Similar to creating a Provider in Flutter
 * 
 * Structure:
 * {
 *   currentUser: Firebase User | null,  // Similar to User? in Flutter
 *   loading: boolean                    // Similar to isLoading in Flutter
 * }
 * 
 * This context will be available throughout the app
 * Similar to Provider<AuthService> in Flutter
 */
const AuthContext = createContext({
  currentUser: null,
  loading: true
});

/**
 * useAuth Hook - Custom hook to access auth context
 * Similar to Provider.of<AuthService>(context) in Flutter
 * 
 * Usage:
 * const { currentUser, loading } = useAuth();
 * 
 * This hook:
 * 1. Gets the current auth context
 * 2. Throws an error if used outside AuthProvider
 * 3. Returns the current user and loading state
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

/**
 * AuthProvider Component - Provides auth context to children
 * Similar to Provider<AuthService> in Flutter
 * 
 * Props:
 * children: ReactNode - Child components to receive auth context
 * 
 * This component:
 * 1. Manages authentication state
 * 2. Listens to Firebase auth changes
 * 3. Provides auth context to all children
 */
export function AuthProvider({ children }) {
  // State management - Similar to StatefulWidget in Flutter
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * useEffect Hook - Handles side effects
   * Similar to initState + dispose in Flutter
   * 
   * This effect:
   * 1. Subscribes to auth state changes
   * 2. Updates currentUser state
   * 3. Cleans up subscription on unmount
   * 
   * The empty dependency array [] means this effect runs once on mount
   * Similar to initState in Flutter
   */
  useEffect(() => {
    // Subscribe to auth state changes
    // Similar to FirebaseAuth.instance.authStateChanges() in Flutter
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup function - Similar to dispose() in Flutter
    return unsubscribe;
  }, []);

  // Context value - Similar to the value provided by Provider in Flutter
  const value = {
    currentUser,
    loading
  };

  // Render children with auth context
  // Similar to Provider.value in Flutter
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 