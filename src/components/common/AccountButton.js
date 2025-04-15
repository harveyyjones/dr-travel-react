import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../services/firebase';
import './AccountButton.css';

const AccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="account-button-container" ref={dropdownRef}>
      <button 
        className="account-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>

      {isOpen && (
        <div className="account-dropdown">
          {currentUser ? (
            <>
              <div className="user-info">
                <span className="user-name">{currentUser.email}</span>
              </div>
              <button 
                className="dropdown-item"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button 
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
              >
                Sign In
              </button>
              <button 
                className="dropdown-item"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/register');
                }}
              >
                Create Account
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountButton; 