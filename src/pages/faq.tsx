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
        title={t('seo.faq_title')}
        description={t('seo.faq_description')}
        url="https://www.powerliftrentals.com/faq"
      />
      <JsonLdSchema
        types={['LocalBusiness', 'FAQPage']}
        faqData={t('faq.items', { returnObjects: true }) as any}
      />
      <div className="pt-12 bg-gray-soft">
        <FaqSection />
      </div>
      <ContactSection />
    </>
  );
}