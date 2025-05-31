import HeroForDesktop from '../components/homepage/sections/HeroForDesktop'
import HeroForMobile from '../components/homepage/sections/HeroForMobile'
import Service from '../components/homepage/sections/Service'
import AboutUs from '../components/homepage/sections/AboutUs'
import ContactUs from '../components/homepage/sections/ContactUs'
import Footer from '../components/homepage/Footer'
import HowItWorks from '../components/homepage/sections/HowItWorks'

export default function HomePage() {
    return (
        <main>
            {/* Conditionnal rendering for header and hero between desktop and mobile screns */}
            <div className="lg:hidden block">
                <HeroForMobile />
            </div>
            <div className="hidden lg:block">
                <HeroForDesktop />
            </div>

            {/* All home page screens */}
            <Service />
            <AboutUs />
            <HowItWorks />
            <ContactUs />
            <Footer />
        </main>
    )
}
