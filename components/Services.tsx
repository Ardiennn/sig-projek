// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/components/Services.tsx
import { servicesData } from '@/lib/siteData' //
import React from 'react'

const Services = () => {
    return (
        <div id="services" className="w-full lg:flex py-24 xl:py-28 space-y-10 lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/3">
                <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-lightBg/50 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-accentLight/50">{servicesData.mainData.title}</h6>
                <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-lightBg mt-2">{servicesData.mainData.title2} <span className="text-accentLight">{servicesData.mainData.title2Span}</span></h2>
                <p className='mt-4 text-lightBg/70'>Jelajahi fitur-fitur yang kami sediakan untuk membantumu menemukan tempat kerja yang sempurna.</p>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData.services.slice(0, 7).map((item, index) => ( // Hanya menampilkan 6 layanan
                    <div key={index} className="z-[1] p-8 space-y-4 bg-darkBg/60 rounded-xl relative overflow-hidden border border-white/10 transition-all duration-300 ease-custom hover:border-accentLight/50 hover:shadow-2xl hover:scale-[1.02]">
                        <div className="flex items-center space-x-4">
                            <i className={`${item.bootstrapIcon} text-3xl text-accentLight`}></i>
                            <h3 className="font-playfair font-semibold text-xl xl:text-2xl text-lightBg">{item.title}</h3>
                        </div>
                        <div>
                            <p className="text-lightBg/70">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services