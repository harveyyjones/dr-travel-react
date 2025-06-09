import React from 'react';
import MapWidget from '../components/MapWidget';

function AboutPage() {
  return (
    <div className="AboutPage">
      <header className="page-header">
        <h1>About Us</h1>
        <p className="page-subtitle">Redefining luxury healthcare experiences since 2018</p>
      </header>
      
      <MapWidget />
      
      <section className="about-content">
        <div className="about-intro">
          <h2>Our Story</h2>
          <p>
            Founded in the heart of Istanbul, our company emerged from a vision to bridge the gap between 
            world-class medical care and luxury travel experiences. What began as a boutique consultancy 
            has evolved into the premier destination for discerning clients seeking exceptional healthcare 
            solutions in Turkey's most prestigious medical facilities.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            To provide an unparalleled fusion of medical excellence and luxury hospitality, ensuring every 
            client receives not just world-class treatment, but an extraordinary journey of transformation 
            and renewal. We believe that healing should be accompanied by beauty, comfort, and dignity.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
        </div>

        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We partner only with accredited facilities and board-certified specialists who represent the pinnacle of medical expertise.</p>
            </div>
            <div className="value-item">
              <h3>Discretion</h3>
              <p>Your privacy and confidentiality are paramount. We maintain the highest standards of professional discretion throughout your journey.</p>
            </div>
            <div className="value-item">
              <h3>Luxury</h3>
              <p>Every aspect of your experience is crafted to exceed expectations, from private jet transfers to five-star accommodations.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Transparent communication, honest guidance, and ethical practices form the foundation of every client relationship.</p>
            </div>
          </div>
        </div>

        <div className="about-certifications">
          <h2>Certifications & Partnerships</h2>
          <p>
            Our network includes JCI-accredited hospitals, ISO-certified facilities, and partnerships with 
            leading medical institutions across Turkey. Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non 
            provident, similique sunt in culpa qui officia deserunt mollitia animi.
          </p>
        </div>
        
        <div className="about-team">
          <h2>Our Leadership Team</h2>
          <p>
            Led by industry veterans with decades of combined experience in luxury hospitality, 
            medical tourism, and international business development.
          </p>
          
          <div className="team-members">
            <div className="team-member">
              <h3>Dr. Elena Marchetti</h3>
              <p className="role">CEO & Founder</p>
              <p className="bio">
                Former VP of Medical Tourism at Turkish Healthcare Group, Harvard Business School alumna. 
                15+ years experience in luxury healthcare consulting and international patient services.
              </p>
            </div>
            
            <div className="team-member">
              <h3>James Richardson</h3>
              <p className="role">Chief Operations Officer</p>
              <p className="bio">
                Ex-Mandarin Oriental hospitality executive specializing in ultra-high-net-worth client experiences. 
                Expert in luxury travel coordination and VIP service protocols.
              </p>
            </div>
            
            <div className="team-member">
              <h3>Dr. Ahmet Yılmaz</h3>
              <p className="role">Medical Director</p>
              <p className="bio">
                Board-certified plastic surgeon and former director of Istanbul University Medical Center. 
                Fluent in 5 languages with extensive experience in international patient care.
              </p>
            </div>
            
            <div className="team-member">
              <h3>Sofia Petrova</h3>
              <p className="role">Client Relations Director</p>
              <p className="bio">
                Former concierge manager at Four Seasons with specialization in medical tourism logistics. 
                Dedicated to ensuring seamless experiences from consultation to recovery.
              </p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>2,500+</h3>
              <p>Satisfied clients served</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Partner medical facilities</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Luxury aircraft in fleet</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client satisfaction rate</p>
            </div>
          </div>
        </div>

        <div className="about-commitment">
          <h2>Our Commitment</h2>
          <p>
            Every client's journey is unique, and we recognize that entrusting us with your health and 
            well-being is both an honor and a tremendous responsibility. From the moment you contact us 
            until your complete recovery, we're dedicated to exceeding your expectations at every step.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage; 