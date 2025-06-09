import React from 'react';

interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  features?: string[];
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Essential Care",
      price: "€15,000",
      duration: "Per Treatment Package",
      features: [
        "Premium medical consultation",
        "Business class flights",
        "4-star hotel accommodation",
        "Airport transfers",
        "Basic medical coordination",
        "24/7 emergency support",
        "Post-treatment follow-up (30 days)"
      ]
    },
    {
      name: "Luxury Experience",
      price: "€35,000",
      duration: "Per Treatment Package",
      popular: true,
      features: [
        "All Essential Care features",
        "Private jet transportation",
        "5-star luxury hotel suite",
        "Personal medical concierge",
        "VIP hospital services",
        "Luxury ground transportation",
        "Spa & wellness treatments",
        "Tourism excursions",
        "Extended follow-up (90 days)",
        "Companion accommodation"
      ]
    },
    {
      name: "Royal Treatment",
      price: "€75,000+",
      duration: "Per Treatment Package",
      features: [
        "All Luxury Experience features",
        "Private yacht recovery cruise",
        "Presidential suite accommodation",
        "Dedicated medical team",
        "Private chef services",
        "Helicopter transfers",
        "Exclusive access to private clinics",
        "Personal shopping assistant",
        "Lifetime medical support network",
        "Multiple companion accommodations",
        "Bespoke cultural experiences",
        "Private security detail"
      ]
    }
  ];

  const handlePlanSelect = (planName: string): void => {
    console.log(`Selected plan: ${planName}`);
    // Add your plan selection logic here
  };

  return (
    <section className="Pricing">
      <h2 className="section-title">Luxury Medical Tourism Packages</h2>
      <p className="section-subtitle">
        Choose from our carefully curated packages, each designed to provide exceptional medical care 
        combined with unparalleled luxury experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="Pricing-options">
        {plans.map((plan, index) => (
          <div key={index} className={`Pricing-option ${plan.popular ? 'featured' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h3>{plan.name}</h3>
            <div className="price-display">
              <span className="price">{plan.price}</span>
              <span className="duration">{plan.duration}</span>
            </div>
            {plan.features && (
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            )}
            <button 
              className={plan.popular ? "primary-button" : "secondary-button"}
              onClick={() => handlePlanSelect(plan.name)}
            >
              {plan.name === "Royal Treatment" ? "Contact Us" : "Select Package"}
            </button>
            <p className="package-note">
              *Prices vary based on specific medical procedures and length of stay. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing; 