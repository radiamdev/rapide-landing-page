import { useTranslation } from 'react-i18next'
import logoWhite from '../../assets/image/rapide_app_white.png'
import footerIllustration from '../../assets/image/footer_illustration.png'
import footerBgImage from '../../assets/image/footer_bg_image.png'
import downApp from '../../assets/image/download_now.png'
import { MdFacebook, MdMail, MdPhone } from 'react-icons/md'
import SocialMedia from './SocialMedia'

const Footer = () => {
    const { t } = useTranslation()

    const navLinks = [
        { label: t('homePage.footerSection.home'), href: '/' },
        { label: t('homePage.footerSection.aboutUs'), href: '#about-us' },
        { label: t('homePage.footerSection.howItWorks'), href: '#how-it-works' },
        { label: t('homePage.footerSection.contactUs'), href: '#contact' },
    ]
    
    const contactItems = [
        { icon: <MdPhone className="w-5 h-5 text-white" />, text: '038 22 684 15' },
        { icon: <MdFacebook className="w-5 h-5 text-white" />, text: 'rapideapp' },
        { icon: <MdMail className="w-5 h-5 text-white" />, text: 'contact@rapideapp.mg' },
    ]
    return (
        <footer className="bg-green-secondary relative overflow-hidden">
            <div className="relative z-10">
                {/* Main hero section with background image */}
                <div className="relative flex flex-col lg:flex-row items-center justify-between py-8">
                    {/* Background overlay */}
                    <div
                        className="absolute inset-0 opacity-85 z-0 bg-center bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${footerBgImage})` }}
                    />

                    {/* Foreground content */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-8">
                        {/* Illustration */}
                        <div className="flex-shrink-0 lg:w-1/2 flex items-center justify-center">
                            <img
                                src={footerIllustration}
                                alt="illustration"
                                className="w-full max-w-lg h-auto mx-auto lg:mx-0"
                            />
                        </div>

                        {/* Texte */}
                        <div className="lg:w-1/2 w-full text-center lg:text-left">
                            <h1 className="barlow-bold text-xl lg:text-5xl text-white mb-6 leading-tight">
                                ALL YOU NEED
                                <br />
                                EVERYDAY
                            </h1>
                            <p className="text-white/90 text-lg text-justify leading-relaxed mb-8 max-w-xl">
                                {t('homePage.footerSection.footerText')}
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
                </div>

                {/* Bottom section */}
                <div className="flex lg:flex-row flex-col item-center justify-between gap-8 p-8 lg:px-0 border-t border-white/20 max-w-5xl mx-auto">
                    {/* Rapide info */}
                    <div className="space-y-6 flex-2">
                        <img
                            src={logoWhite}
                            alt="logo"
                            className="w-60 h-auto"
                        />
                        <p className="text-white/80 leading-relaxed">
                            {t('homePage.footerSection.rapideInfo')}
                        </p>
                        <SocialMedia/>
                    </div>

                    {/* Links */}
                    <div className="space-y-6 flex-1 lg:pl-28">
                        <h2 className="text-white !font-bold text-xl cwf-bold">
                            {t('homePage.footerSection.links')}
                        </h2>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors font-semibold"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6 flex-1">
                        <h2 className="text-white text-xl cwf-bold">{t('homePage.footerSection.contact')}</h2>
                        <div className="space-y-3 flex-1 text-center">
                            {contactItems.map((item) => (
                                <div
                                    key={item.text}
                                    className="flex items-center gap-6"
                                >
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="text-white font-semibold">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
