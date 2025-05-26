// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/components/Cursor.tsx
"use client"

import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null); //

    useEffect(() => { //
        const cursor = cursorRef.current; //
        const mouseElements = document.querySelectorAll("a, button, input, textarea, .cursor-link"); //

        // Ensure that cursor is not null
        const handleMouseMove = (e: MouseEvent) => { //
            if (cursor) { //
                cursor.style.left = e.pageX + 'px'; //
                cursor.style.top = e.pageY + 'px'; //
            }
        };

        const handleMouseEnter = () => { //
            if (cursor) { //
                cursor.classList.add("scale-[5]","opacity-30"); // Increased opacity slightly
            }
        };

        const handleMouseLeave = () => { //
            if (cursor) { //
                cursor.classList.remove("scale-[5]","opacity-30");
            }
        };

        document.addEventListener('mousemove', handleMouseMove); //

        mouseElements.forEach((mouseElm) => { //
            mouseElm.addEventListener("mouseenter", handleMouseEnter); //
            mouseElm.addEventListener("mouseleave", handleMouseLeave); //
        });

        return () => { //
            document.removeEventListener('mousemove', handleMouseMove); //

            mouseElements.forEach((mouseElm) => { //
                mouseElm.removeEventListener("mouseenter", handleMouseEnter); //
                mouseElm.removeEventListener("mouseleave", handleMouseLeave); //
            });
        };
    }, []);

    return <div id="cursor" ref={cursorRef} className="hidden lg:inline-block z-[11] absolute -translate-x-1/2 -translate-y-1/2 bg-accent w-[10px] h-[10px] rounded-full mix-blend-difference pointer-events-none transition-all ease-linear duration-[80ms]"></div>; // Mengubah bg-white menjadi bg-accent
};

export default Cursor;