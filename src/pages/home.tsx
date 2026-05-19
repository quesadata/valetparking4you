import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { JsonLdSchema } from '../components/seo/json-ld-schemas';
import { HeroSection } from '../components/sections/hero-section';
import { ServicesSection } from '../components/sections/services-section';
import { WhyChooseUsSection } from '../components/sections/why-choose-us-section';
import { ContactSection } from '../components/sections/contact-section';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SeoHead
        title={t('seo.home_title')}
        description={t('seo.home_description')}
        url="https://www.valetparking4you.com/"
      />
      <JsonLdSchema types={['Organization', 'LocalBusiness']} />
      <HeroSection />
      <ServicesSection variant="home" />
      <WhyChooseUsSection />

      <ContactSection variant="home" />
    </>
  );
}