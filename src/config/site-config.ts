export const siteConfig = {
  // Basic Information
  name: 'Valet Parking 4 You',
  url: 'https://www.valetparking4you.com',

  // Localization
  locale: {
    default: 'en',
    languages: ['en', 'es'],
  },

  // Business Information (NAP)
  business: {
    name: 'Valet Parking 4 You',
    legalName: 'Valet Parking 4 You LLC',
    description: 'Professional valet parking and traffic control services in Florida and Atlanta. Specializing in commercial accounts, luxury hotels, and private events with over 22 years of experience.',
    foundingDate: '2004',
    image: '/og-image.jpg',
    logo: '/logo.png',

    // Address
    address: {
      street: '3200 NW 112th Ave',
      city: 'Miami',
      region: 'FL',
      postalCode: '33172',
      country: 'US',
      fullAddress: '3200 NW 112th Ave, Miami, FL 33172, USA',
    },

    // Contact
    phone: '+1-305-984-8687',
    email: 'info@valetparking4you.com',
    whatsapp: 'https://wa.me/13059848687',

    // Hours
    openingHours: {
      weekdays: 'Mo-Fr 09:00-21:00',
      weekend: 'Sa-Su 09:00-21:00',
    },

    // Service Areas
    areaServed: ['Florida', 'Miami', 'Fort Lauderdale', 'Atlanta, GA'],

    // Socials
    sameAs: [
      'https://www.facebook.com/valetparking4you',
      'https://www.instagram.com/valetparking4you/',
    ],

    priceRange: '$$$',
  },

  // Default SEO
  seo: {
    defaultTitle: 'Valet Parking 4 You | Professional Valet Services',
    titleTemplate: '%s | Valet Parking 4 You',
    defaultDescription: 'Premium valet parking solutions and traffic management for commercial venues and private events in South Florida and Atlanta.',
    defaultImage: '/og-image.jpg',
  },

  // Primary Services
  services: [
    {
      name: 'Commercial Valet Operations',
      description: 'Comprehensive parking solutions for hotels, restaurants, hospitals, and malls.',
      category: 'Commercial',
    },
    {
      name: 'Private Event Valet',
      description: 'Elegant and secure vehicle reception for weddings, galas, and corporate events.',
      category: 'Events',
    },
    {
      name: 'Traffic Control',
      description: 'Professional traffic direction and space optimization for high-volume access areas.',
      category: 'Logistics',
    },
    {
      name: 'Parking Management',
      description: 'Full-scale logistics and capacity management, ensuring safety and operational efficiency.',
      category: 'Management',
    },
  ],
};

export type SiteConfig = typeof siteConfig;