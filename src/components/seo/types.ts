export type RobotsDirective =
  | 'index, follow'
  | 'noindex, follow'
  | 'index, nofollow'
  | 'noindex, nofollow';

export type SchemaType =
  | 'Organization'
  | 'LocalBusiness'
  | 'Service'
  | 'FAQPage'
  | 'Product'
  | 'BreadcrumbList'
  | 'WebPage';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductSchema {
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
}

export interface ServiceSchema {
  name: string;
  description: string;
  category?: string;
  areaServed?: string[];
  image?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoProps {
  // Básicos
  title?: string;
  description?: string;
  image?: string;
  url?: string;

  // Canonical y robots
  canonical?: string;
  robots?: RobotsDirective;

  // Open Graph
  ogType?: 'website' | 'article' | 'product';

  // Twitter
  twitterCard?: 'summary' | 'summary_large_image';

  // i18n
  alternateLanguages?: { lang: string; url: string }[];

  // Schema JSON-LD
  schema?: SchemaType | SchemaType[];
  serviceData?: ServiceSchema;
  faqData?: FaqItem[];

  // Breadcrumbs
  breadcrumbs?: BreadcrumbItem[];

  // Article/Blog
  articleData?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
  };
}