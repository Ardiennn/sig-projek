// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/components/Hero.tsx
import React from 'react'
// import { aboutData } from '@/lib/siteData' // Tidak digunakan lagi secara langsung di sini

const Hero = () => {
    return (
        <div id="about" className="py-32 md:py-40 xl:py-48 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair font-bold text-lightBg mb-4">
                    The <span className="text-accentLight">Coffee</span>Map
                </h1>
                <p className="text-xl md:text-2xl text-lightBg/80 font-lora max-w-2xl mx-auto mb-8">
                    Temukan Kafe & Workspace Impianmu di <span className="font-semibold text-accentLight">Bogor</span>.
                </p>
                <a href="/#map" className="inline-block relative z-[1] group overflow-hidden bg-accent px-10 py-4 rounded-full font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-100 before:transition-all before:ease-linear before:duration-300">
                    <span className="block relative" data-text="Jelajahi Peta">Jelajahi Peta</span>
                </a>
            </div>
        </div>
    )
}

export default Hero