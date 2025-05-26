// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/components/ScrollToTop.tsx
"use client"

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false); //

    const handleScroll = () => { //
        if (window.scrollY > 700) { //
            setShowScroll(true); //
        } else {
            setShowScroll(false); //
        }
    };

    useEffect(() => { //
        window.addEventListener('scroll', handleScroll); //
        return () => window.removeEventListener('scroll', handleScroll); //
    }, []);

    const scrollToTop = () => { //
        window.scrollTo({ //
            top: 0, //
            behavior: 'smooth', //
        });
    };

    return (
        <div onClick={scrollToTop} className={`scrolltotop fixed right-5 bottom-5 xl:right-10 invisible opacity-0 translate-y-5 backdrop-blur transition-all ease-out duration-[120ms] cursor-pointer inline-block group w-[50px] h-[50px] rounded-full bg-accent/70 hover:bg-accent text-lightBg z-[1] overflow-hidden cursor-link ${showScroll ? 'show' : ''}`}> {/* Mengubah warna */}
            <i className="bi bi-arrow-up absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
            <i className="bi bi-arrow-up absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>
        </div>
    );
};

export default ScrollToTop;