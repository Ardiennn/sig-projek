// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/lib/seoData.ts
interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://localhost:3000'; // Ganti dengan URL produksi Anda

export const seoData: PageSEO = { //
    home: { //
        title: 'The CoffeeMap - Temukan Kafe & Workspace di Bogor',
        description: 'Peta interaktif untuk mencari co-working space dan kafe terbaik di Kota Bogor untuk bekerja dan bersantai.',
        keywords: ['The CoffeeMap', 'Bogor', 'kafe', 'workspace', 'co-working', 'peta interaktif', 'QGIS'],
        canonicalUrl: siteUrl, //
    },
};