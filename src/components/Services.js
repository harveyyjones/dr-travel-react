import React, { useRef, useEffect } from 'react';
import './Services.css';
import HeroBanner from './HeroBanner';

const Services = () => {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  const services = [
    {
      title: "Premium Medical Treatments",
      description: "Expert dental procedures, hair transplants, and aesthetic surgeries at world-renowned clinics in Turkey. Experience top-quality healthcare at competitive prices.",
      image: "https://i.pinimg.com/736x/6c/ed/3e/6ced3ef9f96dc96ab51344242f24be5b.jpg"
    },
    {
      title: "Private Jet Transportation",
      description: "Travel in ultimate comfort with our fleet of 10+ luxury private jets. Direct flights from your location to Turkey, complete with VIP airport services.",
      image: "https://i.pinimg.com/736x/c3/b2/9f/c3b29f45194eb622d542bb340ed0b07c.jpg"
    },
    {
      title: "Luxury Ground Service",
      description: "Door-to-door luxury car service with professional chauffeurs. Seamless transfers between airport, clinic, hotel, and tourist destinations.",
      image: "https://i.pinimg.com/736x/c5/62/8d/c5628d3aab332e1e35efb5ad32310e30.jpg"
    },
    {
      title: "Luxury Yacht & Vacation",
      description: "Combine your treatment with a luxury vacation. Enjoy private yacht tours along the Turkish Riviera, 5-star accommodations, and personalized sightseeing.",
      image: "https://i.pinimg.com/736x/5c/bb/95/5cbb951450d8d7377f6f0ae9280b150b.jpg"
    },
    {
      title: "VIP Concierge Support",
      description: "24/7 multilingual assistance throughout your journey. From medical coordination to legal support, our team ensures a worry-free experience.",
      image: "https://i.pinimg.com/736x/ef/71/f9/ef71f97dafae1896ecf9d80ac2197d32.jpg"
    }
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      if (scrollRef.current) {
        const scrollAmount = scrollRef.current.scrollLeft + scrollRef.current.offsetWidth;
        if (scrollAmount >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      autoScrollRef.current = setInterval(startAutoScroll, 10000);

      scrollContainer.addEventListener('mouseenter', () => clearInterval(autoScrollRef.current));
      scrollContainer.addEventListener('touchstart', () => clearInterval(autoScrollRef.current));
      
      scrollContainer.addEventListener('mouseleave', () => {
        autoScrollRef.current = setInterval(startAutoScroll, 10000);
      });
      scrollContainer.addEventListener('touchend', () => {
        autoScrollRef.current = setInterval(startAutoScroll, 10000);
      });
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  return (
    <section className="services">
      <HeroBanner />
      
      <div className="services-grid" ref={scrollRef}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.image && (
              <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} />
            )}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 