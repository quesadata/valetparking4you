import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { ContactSection } from '../components/sections/contact-section';

export default function Reserve() {
  return (
    <>
      <SeoHead
        title="Reserve Your Elite Valet Service | Valet Parking 4 You"
        description="Book your premium valet parking or traffic management service for luxury events in Florida and Georgia."
      />
      <div className="pt-12 bg-black">
        <ContactSection formVariant="reserve-now" />
      </div>
    </>
  );
}
