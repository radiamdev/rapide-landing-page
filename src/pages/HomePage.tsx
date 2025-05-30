import Footer from '../components/HomePage/Footer'
import Hero from '../components/HomePage/Sections/Hero'
import HowItWorks from '../components/HomePage/Sections/HowItWorks'
import NavBar from '../components/HomePage/NavBar'
import Service from '../components/HomePage/Sections/Service'
import ContactUs from '../components/HomePage/Sections/ContactUs'
import AboutUsA from '../components/HomePage/Sections/AboutUsA'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Service />
            <AboutUsA />
            <HowItWorks />
            <ContactUs />
            <Footer />
        </div>
    )
}
