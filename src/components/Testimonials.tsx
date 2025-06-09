import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  treatment: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "The level of care and luxury exceeded all expectations. From the private jet pickup to the world-class medical treatment, every detail was perfectly orchestrated. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. The recovery yacht cruise was the perfect way to heal in absolute comfort.",
      author: "Victoria Hamilton-Ross",
      location: "London, UK",
      treatment: "Aesthetic Surgery Package"
    },
    {
      quote: "Exceptional medical expertise combined with genuine Turkish hospitality. The concierge service anticipated every need, and the 5-star accommodation made recovery feel like a luxury vacation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Dr. Friedrich Weber",
      location: "Munich, Germany", 
      treatment: "Hair Transplant & Wellness Retreat"
    },
    {
      quote: "I've never experienced such professional and discreet medical tourism service. The multilingual support team was available 24/7, and the private clinic access ensured complete privacy. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Simply outstanding.",
      author: "Isabella Montenegro",
      location: "São Paulo, Brazil",
      treatment: "Comprehensive Dental Reconstruction"
    },
    {
      quote: "From consultation to complete recovery, the journey was seamless. The medical team's expertise was world-class, and the luxury amenities made the entire experience remarkable. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitia animi. Highly recommended for discerning clients.",
      author: "Sheikh Abdullah Al-Rashid",
      location: "Dubai, UAE",
      treatment: "Orthopedic Surgery & Recovery Program"
    },
    {
      quote: "The attention to detail and personalized care transformed what could have been stressful into an extraordinary experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. The private chef, spa treatments, and cultural excursions during recovery were absolutely perfect touches.",
      author: "Margaret Thornton-Clarke",
      location: "New York, USA",
      treatment: "Cosmetic Surgery & Wellness Package"
    }
  ];

  return (
    <section className="Testimonials">
      <h2 className="section-title">What Our Distinguished Clients Say</h2>
      <p className="section-subtitle">
        Read testimonials from our satisfied clients who have experienced the perfect fusion 
        of world-class medical care and luxury hospitality.
      </p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <blockquote>"{testimonial.quote}"</blockquote>
            <div className="testimonial-author">
              <cite className="author-name">{testimonial.author}</cite>
              <span className="author-location">{testimonial.location}</span>
              <span className="treatment-type">{testimonial.treatment}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 