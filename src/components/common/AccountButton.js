import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AccountButton.css';

const AccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="account-button">
      <button 
        className="account-icon" 
        onClick={toggleDropdown}
        aria-label="Account menu"
      >
        {currentUser ? (
          <span className="user-name">{currentUser.email}</span>
        ) : (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        )}
      </button>
      
      {isOpen && (
        <div className="account-dropdown">
          {currentUser ? (
            <>
              <Link to="/profile" className="dropdown-item">Profile</Link>
              <Link to="/settings" className="dropdown-item">Settings</Link>
              <button className="dropdown-item sign-out">Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="dropdown-item">Sign In</Link>
              <Link to="/register" className="dropdown-item">Create Account</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountButton; 