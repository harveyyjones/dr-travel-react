import React from 'react';

function AboutPage() {
  return (
    <div className="AboutPage">
      <header className="page-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
        
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <h3>Bob Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage; 