import { footerData } from '@/lib/siteData';
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-center px-5 py-9 xl:py-10 border-t border-white/10 mt-14">
            <p className="text-white/70">&copy; {currentYear} {footerData.copyWriteText}</p>
        </div>
    );
};