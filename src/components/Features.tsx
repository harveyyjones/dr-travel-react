import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Concierge Medical Coordination",
      description: "Personal medical consultants guide you through every step, from initial consultation to post-treatment follow-up. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ensuring seamless communication with world-class specialists."
    },
    {
      title: "Luxury Transportation Fleet",
      description: "Private jet service with 15+ aircraft, luxury ground transportation, and yacht transfers. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Travel in absolute comfort and privacy throughout your journey."
    },
    {
      title: "Premium Accommodation Network",
      description: "Exclusive partnerships with 5-star hotels and private villas near medical facilities. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ensuring your recovery environment is both luxurious and peaceful."
    },
    {
      title: "24/7 Multilingual Support",
      description: "Round-the-clock assistance in over 15 languages with dedicated case managers. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore, providing peace of mind throughout your medical journey."
    },
    {
      title: "JCI-Accredited Medical Network",
      description: "Partnerships with Turkey's most prestigious hospitals and internationally certified specialists. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitia ensuring world-class medical standards."
    },
    {
      title: "Bespoke Recovery Programs",
      description: "Tailored wellness and recovery experiences including spa treatments, therapeutic excursions, and nutritional planning. Lorem ipsum dolor sit amet, consectetur adipiscing elit, combining healing with rejuvenation in stunning Turkish settings."
    }
  ];

  return (
    <section className="Features">
      <h2 className="section-title">Why Choose Our Luxury Medical Experience</h2>
      <p className="section-subtitle">
        Combining world-class healthcare with unparalleled luxury service, 
        we transform medical treatment into an extraordinary journey of healing and renewal.
      </p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features; 