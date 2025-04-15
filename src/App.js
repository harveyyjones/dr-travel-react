/**
 * App.js - The root component of the application
 * Similar to main.dart in Flutter, but handles routing instead of just being the entry point
 * 
 * Key Concepts:
 * 1. Component Composition - Similar to widget tree in Flutter
 * 2. Routing - Similar to Navigator in Flutter
 * 3. Context Provider - Similar to Provider package in Flutter
 */

import React from 'react';
// Router components - Similar to MaterialApp.router in Flutter
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Auth Provider - Similar to Provider<AuthService> in Flutter
import { AuthProvider } from './context/AuthContext';
// Page components - Similar to Screen widgets in Flutter
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// Layout components - Similar to AppBar and BottomNavigationBar in Flutter
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Global styles - Similar to ThemeData in Flutter
import './App.css';

/**
 * App Component - The root widget
 * Similar to MaterialApp in Flutter, but more focused on routing
 */
function App() {
  return (
    // AuthProvider - Wraps the entire app with authentication context
    // Similar to Provider<AuthService> in Flutter
    <AuthProvider>
      {/* Router - Handles navigation and routing
          Similar to MaterialApp.router in Flutter */}
      <Router>
        {/* App container - Similar to Scaffold in Flutter */}
        <div className="App">
          {/* Navbar - Similar to AppBar in Flutter */}
          <Navbar />
          {/* Routes - Similar to Navigator.routes in Flutter
              Defines the available routes in the app */}
          <Routes>
            {/* Route - Similar to GoRoute in Flutter
                path: URL path (similar to path in GoRoute)
                element: Component to render (similar to builder in GoRoute) */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          {/* Footer - Similar to BottomNavigationBar in Flutter */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;