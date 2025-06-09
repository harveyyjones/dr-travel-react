import React from 'react';
import './HeroBanner.css';

const HeroBanner: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Your Journey to Excellence in Health & Luxury</h1>
        <p>Experience world-class medical treatments in Turkey's most prestigious facilities, 
        combined with luxury travel and five-star accommodations. Where your health meets 
        the beauty of the Mediterranean.</p>
        <button className="hero-button">Start Your Journey</button>
      </div>
    </div>
  );
};

export default HeroBanner; 