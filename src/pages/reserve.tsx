import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { ContactSection } from '../components/sections/contact-section';

export default function Reserve() {
  return (
    <>
      <SeoHead title="Reserve Now | PowerLift Rentals" />
      <div className="pt-12 bg-white">
        <ContactSection formVariant="reserve-now" />
      </div>
    </>
  );
}
