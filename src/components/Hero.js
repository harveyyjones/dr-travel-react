import React, { useState } from 'react';

function Hero() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <header className="App-header">
      <h1>Welcome to Our SaaS Product</h1>
      <p>Your solution for [problem your SaaS solves].</p>
      <button className="primary-button" onClick={handleButtonClick}>
        Clicked {count} times
      </button>
    </header>
  );
}

export default Hero; 