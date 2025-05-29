import { useTranslation } from 'react-i18next'
import logoWhite from '../../assets/image/rapide_app_white.png'
import footerIllustration from '../../assets/image/footer_illustration.png'
import downApp from '../../assets/image/download_now.png'
import { MdFacebook, MdPhone } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,220,120,0.3),transparent_50%)]"></div>
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Main hero section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
                    {/* Car illustration */}
                    <div className="flex-shrink-0 lg:w-1/2">
                        <img
                            src={footerIllustration}
                            alt="illustration"
                            className="w-full max-w-md h-auto mx-auto lg:mx-0"
                        />
                    </div>

                    {/* Text content */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            ALL YOU NEED
                            <br />
                            EVERYDAY
                        </h1>
                        <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
                            Rapide App is designed to simplify your everyday
                            transportation needs. Whether you choose a quick ride on
                            a Moto, a comfortable Lite car, or the luxurious Premium
                            service, we ensure that every journey is tailored to
                            your preferences. With our dedicated drivers ready to
                            assist you, getting to your destination has never been
                            easier.
                        </p>
                        <div className="inline-block">
                            <img
                                src={downApp}
                                alt="download app now"
                                className="w-48 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16 pt-8 border-t border-white/20">
                    {/* Company info */}
                    <div className="space-y-6">
                        <img src={logoWhite} alt="logo" className="w-32 h-auto" />
                        <p className="text-white/80 leading-relaxed">
                            If you have any questions or need more information about
                            Rapide App, don't hesitate to reach out! Our team is
                            here to assist you and ensure you have all the details
                            you need to get started. We look forward to helping you
                            with your transportation needs!
                        </p>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                <MdFacebook className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                <MdPhone className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                <TbWorld className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-6">
                        <h2 className="text-white font-bold text-2xl">LINK</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="/" className="text-white/80 hover:text-white transition-colors font-medium text-lg">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors font-medium text-lg">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/80 hover:text-white transition-colors font-medium text-lg">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h2 className="text-white font-bold text-2xl">CONTACT</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <MdPhone className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white font-medium text-lg">038 22 684 15</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <MdFacebook className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white font-medium text-lg">rapideapp</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <TbWorld className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white font-medium text-lg">rapideapp.mg</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer