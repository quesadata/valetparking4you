import { siteConfig } from '../../config/site-config';
import type { FaqItem, ServiceSchema, BreadcrumbItem } from './types';

// Schema Organization para Home
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.business.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.business.logo}`,
    description: siteConfig.business.description,
    foundingDate: siteConfig.business.foundingDate,
    image: `${siteConfig.url}${siteConfig.business.image}`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: siteConfig.business.phone,
      email: siteConfig.business.email,
      availableLanguage: ['English', 'Spanish'],
    },
    sameAs: siteConfig.business.sameAs,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.region,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.country,
    },
  };
}

// Schema LocalBusiness para Home/Contact
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.business.name,
    alternateName: 'PowerLift Rentals',
    description: siteConfig.business.description,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    image: `${siteConfig.url}${siteConfig.business.image}`,
    logo: `${siteConfig.url}${siteConfig.business.logo}`,
    priceRange: siteConfig.business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.region,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.5604',
      longitude: '-80.4999',
    },
    areaServed: siteConfig.business.areaServed.map((area) => ({
      '@type': 'GeoCircle',
      name: area,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: siteConfig.business.sameAs,
  };
}

// Schema Service para páginas de servicios
export function generateServiceSchema(service: ServiceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.business.name,
      url: siteConfig.url,
      telephone: siteConfig.business.phone,
    },
    areaServed: service.areaServed || siteConfig.business.areaServed,
    serviceType: service.category || 'Equipment Rental',
    image: service.image ? `${siteConfig.url}${service.image}` : undefined,
  };
}

// Schema FAQPage para páginas con FAQs
export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Schema BreadcrumbList
export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// Schema Product para equipos específicos o ventas
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  sku?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image ? `${siteConfig.url}${product.image}` : undefined,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'PowerLift',
    },
    sku: product.sku,
    offers: product.offers ? {
      '@type': 'Offer',
      price: product.offers.price,
      priceCurrency: product.offers.priceCurrency,
      availability: `https://schema.org/${product.offers.availability}`,
      url: siteConfig.url,
    } : undefined,
  };
}

// Schema WebPage (genérico)
export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${siteConfig.url}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}