import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { JsonLdSchema } from '../components/seo/json-ld-schemas';
import { FaqSection } from '../components/sections/faq-section';
import { ContactSection } from '../components/sections/contact-section';

import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();

  return (
    <>
      <SeoHead
        title="Frequently Asked Questions | Valet Parking 4 You"
        description="Find answers to common questions about our valet parking insurance, logistics, and private event services in Florida and Atlanta."
        url="https://www.valetparking4you.com/faq"
      />
      <JsonLdSchema
        types={['LocalBusiness', 'FAQPage']}
        faqData={t('faq.items', { returnObjects: true }) as any}
      />
      <div className="pt-12 bg-black">
        <FaqSection />
      </div>
      <ContactSection />
    </>
  );
}