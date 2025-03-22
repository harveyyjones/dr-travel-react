import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';

function HomePage() {
  return (
    <div className="HomePage">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </div>
  );
}

export default HomePage; 