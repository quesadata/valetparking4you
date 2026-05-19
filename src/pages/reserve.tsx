import React from 'react';
import { SeoHead } from '../components/seo/seo-head';
import { ContactSection } from '../components/sections/contact-section';

import { useTranslation } from 'react-i18next';

export default function Reserve() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead
        title={t('seo.reserve_title')}
        description="Book your premium valet parking or traffic management service for luxury events in Florida and Georgia."
      />
      <div className="pt-12 bg-black">
        <ContactSection formVariant="reserve-now" />
      </div>
    </>
  );
}
