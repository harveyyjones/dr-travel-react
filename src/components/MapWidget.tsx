import React from 'react';
import './MapWidget.css';

interface Location {
  name: string;
  address: string;
  description: string;
  coordinates: { lat: number; lng: number };
}

const MapWidget: React.FC = () => {
  const locations: Location[] = [
    {
      name: "Istanbul Headquarters",
      address: "Levent Business District, Beşiktaş, Istanbul, Turkey",
      description: "Our flagship office and medical coordination center",
      coordinates: { lat: 41.0842, lng: 29.0042 }
    },
    {
      name: "Antalya Medical Hub",
      address: "Lara District, Antalya, Turkey", 
      description: "Mediterranean coastal facility and recovery center",
      coordinates: { lat: 36.8969, lng: 30.7133 }
    },
    {
      name: "Ankara Partner Office",
      address: "Çankaya District, Ankara, Turkey",
      description: "Government relations and certification office",
      coordinates: { lat: 39.9208, lng: 32.8541 }
    }
  ];

  return (
    <section className="map-widget">
      <div className="map-container">
        <div className="map-header">
          <h2>Our Global Presence</h2>
          <p>Strategically located across Turkey's premier medical destinations</p>
        </div>
        
        <div className="map-content">
          {/* Interactive Map Placeholder - In production, this would be Google Maps or similar */}
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8174321842744!2d28.97677431544915!3d41.08422437928842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab980e5c5de8d%3A0x3d44e8832aec8df!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2FIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1647983234567!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Locations"
            ></iframe>
            <div className="map-overlay">
              <div className="luxury-branding">
                <span>Luxury Medical Tourism Excellence</span>
              </div>
            </div>
          </div>
          
          <div className="locations-sidebar">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-header">
                  <h3>{location.name}</h3>
                  <div className="location-marker">📍</div>
                </div>
                <p className="location-address">{location.address}</p>
                <p className="location-description">{location.description}</p>
                <div className="location-contact">
                  <button className="contact-btn">Get Directions</button>
                </div>
              </div>
            ))}
            
            <div className="map-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Key Locations</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Partner Clinics</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapWidget; 