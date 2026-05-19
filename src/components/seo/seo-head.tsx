import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  noindex?: boolean;
}

export function SeoHead({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url = 'https://valetparking4you.com',
  noindex = false,
}: SeoHeadProps) {
  const { t, i18n } = useTranslation();

  const finalTitle = title || t('seo.default_title');
  const finalDescription = description || t('seo.default_description');
  const finalKeywords = keywords || t('seo.default_keywords', 'valet parking, Miami, event parking, private parking, professional valet services');
  const currentLang = i18n.language;
  const canonicalUrl = url.endsWith('/') ? url : `${url}/`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <html lang={currentLang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Valet Parking 4 You" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Indexing Control */}
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      {/* i18n / Hreflang */}
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}?lng=en`} />
      <link rel="alternate" hrefLang="es" href={`${canonicalUrl}?lng=es`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={currentLang === 'es' ? 'es_US' : 'en_US'} />
      <meta property="og:site_name" content="Valet Parking 4 You" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
