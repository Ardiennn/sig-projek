interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://localhost:3000';

export const seoData: PageSEO = {
    home: {
        title: 'The CoffeMap - Peta Interaktif',
        description: 'Personal Portfolio Template',
        keywords: ['The CoffeMap', 'portfolio', 'personal portfolio'],
        canonicalUrl: siteUrl,
    },
};