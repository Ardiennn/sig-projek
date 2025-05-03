import React from 'react'
import { aboutData } from '@/lib/siteData';

const About = () => {
    return (
        <div className="lg:flex space-y-8 lg:space-y-0">

            <div className="w-full">
                <div>
                    <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">About</h6>
                    <p className="text-white/70 leading-[1.75]">{aboutData.mainData.about}</p>
                </div>
            </div>
        </div>
    )
}

export default About