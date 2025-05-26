// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/components/Header.tsx
"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { headerData } from '@/lib/siteData'; //

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); //
    const menuRef = useRef<HTMLDivElement | null>(null); //
    const [isScrolled, setIsScrolled] = useState(false); // State untuk efek scroll

    const toggleMenu = () => { //
        setIsMenuOpen(!isMenuOpen); //
    };

    const closeMenu = () => { //
        setIsMenuOpen(false); //
    };

    // Efek scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => { //
        const handleClickOutside = (event: MouseEvent) => { //
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) { //
                closeMenu(); //
            }
        };

        document.addEventListener("mousedown", handleClickOutside); //

        return () => { //
            document.removeEventListener("mousedown", handleClickOutside); //
        };
    }, []);

    return (
        <div className={`z-20 fixed top-0 left-0 w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-darkBg/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="flex justify-between items-center relative">
                    {/* Header Logo */}
                    <div className="text-3xl font-playfair font-bold text-lightBg">
                        <Link href="/">{headerData.logo}</Link>
                    </div>
                    {/* Header Nav */}
                    <div>
                        <ul className="flex space-x-3 items-center">
                            {/* Desktop Nav Links */}
                            <li className="list-none hidden md:inline-block">
                                <Link className="inline-block px-4 py-2 text-lightBg/80 hover:text-lightBg transition-colors duration-200 font-outfit" href="/#about">About</Link>
                            </li>
                             <li className="list-none hidden md:inline-block">
                                <Link className="inline-block px-4 py-2 text-lightBg/80 hover:text-lightBg transition-colors duration-200 font-outfit" href="/#services">Services</Link>
                            </li>
                            {/* Map Button */}
                            <li className="list-none inline-block">
                                <Link className="inline-block relative z-[1] overflow-hidden group px-6 py-2.5 backdrop-blur bg-accent/80 hover:bg-accent text-white font-outfit rounded-full uppercase text-xs font-medium tracking-wider transition-all duration-300" href="/#map">
                                   Workspace Map
                                </Link>
                            </li>
                            {/* Mobile Menu Button */}
                            <li className="list-none inline-block md:hidden">
                                <button type="button" onClick={toggleMenu} className="inline-flex justify-center items-center w-10 h-10 bg-lightBg/10 hover:bg-lightBg/20 text-lightBg rounded-full cursor-link">
                                    <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Nav Menu Box (Mobile) */}
                    <nav ref={menuRef} className={`nav-box md:hidden absolute overflow-hidden invisible opacity-0 translate-y-[5px] top-[60px] right-0 bg-darkBg/90 backdrop-blur-lg px-7 py-6 min-w-[250px] rounded-lg font-outfit text-xl shadow-2xl border border-white/10 transition-all ease-linear duration-200 ${isMenuOpen ? 'show' : ''}`}>
                        <ul className="space-y-[10px]">
                            {headerData.navlinks.map((item, idx) => ( //
                                <li key={idx} className="list-none">
                                    <Link
                                        href={item.url} //
                                        onClick={closeMenu} // Menutup menu saat diklik
                                        className="text-lightBg block relative hover:pl-[26px] transition-all ease-out duration-300 group"
                                    >
                                        <i className="bi bi-arrow-right absolute top-1/2 left-0 -translate-y-1/2 opacity-0 invisible transition-all ease-linear duration-100 group-hover:opacity-100 group-hover:visible text-accentLight"></i>
                                        {item.title}  //
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;