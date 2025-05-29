import AboutUs from '../components/HomePage/Sections/AboutUs'
import Footer from '../components/HomePage/Footer'
import Hero from '../components/HomePage/Sections/Hero'
import HowItWork from '../components/HomePage/Sections/HowItWork'
import NavBar from '../components/HomePage/NavBar'
import Service from '../components/HomePage/Sections/Service'
import ContactUs from '../components/HomePage/Sections/ContactUs'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Service />
            <AboutUs />
            <HowItWork />
            <ContactUs />
            <Footer />
        </div>
    )
}
