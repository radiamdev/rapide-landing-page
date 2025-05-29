import AboutUs from '../components/HomePage/Sections/AboutUs'
import FooterA from '../components/HomePage/Sections/FooterA'
import Footer from '../components/HomePage/Footer'
import Hero from '../components/HomePage/Sections/Hero'
import HowItWork from '../components/HomePage/Sections/HowItWork'
import NavBar from '../components/HomePage/NavBar'
import Service from '../components/HomePage/Sections/Service'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Service />
            <AboutUs />
            <HowItWork />
            <FooterA />
            <Footer />
        </div>
    )
}
