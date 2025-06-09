import React from 'react';
import Services from '../components/Services';
import HeroBanner from '../components/HeroBanner';
import EmailSubscribe from '../components/ts/EmailSubscribe.tsx';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';

function HomePage() {
  return (
    <div className="HomePage">
      <HeroBanner />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <EmailSubscribe />
    </div>
  );
}

export default HomePage; 