import About from "@/components/About";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Services from "@/components/Services";

export default function Home() {
    return (
        <>
            <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5">
                {/* Hero */}
                <Hero />

                {/* About */}
                <About />

                {/* Services */}
                <Services />
            </div>

            {/* Map */}
            <Map />
        </>
    );
}
