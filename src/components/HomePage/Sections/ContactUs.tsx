import contactBgImage from '../../../assets/image/contact_bg_image.png'
import contactIllustration from '../../../assets/image/rapide_car_face.png'
import ContactForm from '../ContactForm'
import ContactInfo from '../ContactInfo'

const ContactUs = () => {
    return (
        <section className="relative flex flex-col items-center justify-between py-16">
            {/* Background overlay */}
            <div
                className="absolute inset-0 opacity-85 z-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${contactBgImage})` }}
            />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-8">
                {/* Illustration */}
                <div className="flex-shrink-0 lg:w-1/2 flex items-center justify-center">
                    <img
                        src={contactIllustration}
                        alt="illustration"
                        className="w-full max-w-lg h-auto mx-auto lg:mx-0"
                    />
                </div>

                {/* Form */}
                <div className="lg:w-1/2 w-full text-center lg:text-left">
                    <ContactForm />
                </div>
            </div>

            {/* Contact Info */}
            <div className="w-full max-w-3xl mx-auto mt-16">
                <ContactInfo />
            </div>
        </section>
    )
}

export default ContactUs
