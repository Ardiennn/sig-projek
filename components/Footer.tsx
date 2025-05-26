// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/components/Footer.tsx
import { footerData } from '@/lib/siteData'; //
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear(); //

    return (
        <div className="container text-center px-5 py-8 border-t border-white/10 mt-20">
            <p className="text-lightBg/60 text-sm">&copy; {currentYear} {footerData.copyWriteText}</p>
        </div>
    );
};