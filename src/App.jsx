
import OurTestimonials from "./sections/our-testimonials";

import LenisScroll from "./components/lenis-scroll";


import HeroSection from "./sections/hero-section";
import OurLatestCreation from "./sections/our-latest-creation";

export default function Page() {
    return (
        <>
            <LenisScroll />
       
            <main className="px-6 md:px-16 lg:px-24 xl:px-32">
                <HeroSection />
                <OurLatestCreation />
         
                <OurTestimonials />
              
            </main>
           
        </>
    );
}