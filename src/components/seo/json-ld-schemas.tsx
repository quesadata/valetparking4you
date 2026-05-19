import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as schemas from './schemas';
import type { FaqItem, ServiceSchema, BreadcrumbItem, SchemaType, ProductSchema } from './types';

interface JsonLdSchemaProps {
    types?: SchemaType[];
    serviceData?: ServiceSchema;
    productData?: ProductSchema;
    faqData?: FaqItem[];
    breadcrumbData?: BreadcrumbItem[];
    pageData?: {
        title: string;
        description: string;
        url: string;
    };
}

export function JsonLdSchema({
    types = ['Organization', 'LocalBusiness'],
    serviceData,
    faqData,
    breadcrumbData,
    productData,
    pageData,
}: JsonLdSchemaProps) {
    const schemaObjects: any[] = [];

    if (types.includes('Organization')) {
        schemaObjects.push(schemas.generateOrganizationSchema());
    }

    if (types.includes('LocalBusiness')) {
        schemaObjects.push(schemas.generateLocalBusinessSchema());
    }

    if (types.includes('Product') && productData) {
        schemaObjects.push(schemas.generateProductSchema(productData));
    }

    if (types.includes('Service') && serviceData) {
        schemaObjects.push(schemas.generateServiceSchema(serviceData));
    }

    if (types.includes('FAQPage') && faqData) {
        schemaObjects.push(schemas.generateFaqSchema(faqData));
    }

    if (types.includes('BreadcrumbList') && breadcrumbData) {
        schemaObjects.push(schemas.generateBreadcrumbSchema(breadcrumbData));
    }

    if (types.includes('WebPage') && pageData) {
        schemaObjects.push(schemas.generateWebPageSchema(pageData.title, pageData.description, pageData.url));
    }

    return (
        <Helmet>
            {schemaObjects.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}
