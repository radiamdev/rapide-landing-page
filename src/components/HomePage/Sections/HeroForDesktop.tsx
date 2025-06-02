import { useTranslation } from 'react-i18next'
import logo from '../../../assets/image/rapide_app_white.png'
import playStore from '../../../assets/icons/play_store.png'
import appleStore from '../../../assets/icons/apple_store.png'
import car from '../../../assets/image/hero-imgs/car-image.png'
import SocialMedia from '../SocialMedia'
import DownloadButton from '../../../assets/icons/DownloadButton'
import { LanguageSwitcher } from '../../common/LanguageSwitcher'
import { Link as ScrollLink } from 'react-scroll'
// import { useDisclosure } from '@mantine/hooks'

const HeroForDesktop = () => {
    //    const [opened, { open, close }] = useDisclosure(false)

    const { t } = useTranslation()

    const headerLinkData = [
        { name: t('homePage.header.home'), href: 'home' },
        { name: t('homePage.header.aboutUs'), href: 'about' },
        {
            name: t('homePage.header.termsAndConditions'),
            href: 'https://privacy.rapideapp.mg/',
            external: true,
        },
        {
            name: t('homePage.header.deleteAccount'),
            href: '/delete-account',
            external: true,
        },
        { name: t('homePage.header.contactUs'), href: 'contact' },
    ]
    return (
        <div className="h-screen bg-green-quadritary text-white flex items-start justify-between">
            {/* Left side */}
            <div className="w-[25%] h-full flex flex-col items-center justify-between pt-4 pb-16 px-8">
                <img src={logo} alt="logo rapide" className="w-60 h-auto" />
                <p className="text-justify">
                    {t('homePage.hero.description1')}
                </p>
                <div className="flex flex-col gap-4">
                    <a
                        href="https://android.rapideapp.mg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={playStore}
                            alt="play store"
                            className="w-40 h-auto"
                        />
                    </a>
                    <a
                        href="https://apple.rapideapp.mg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={appleStore}
                            alt="apple store"
                            className="w-40 h-auto"
                        />
                    </a>
                </div>
            </div>

            {/* Centered */}
            <div className="bg-gradient-to-b from-gradient-one to-gradient-two h-full w-[50%]">
                <div className="h-full flex flex-col items-center justify-between">
                    <header className="flex items-center justify-center gap-6 pt-8 px-8 relative z-10 flex-nowrap">
                        {headerLinkData.map((link) =>
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center hover:!font-bold text-white hover:text-black transition-all"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <ScrollLink
                                    key={link.name}
                                    to={link.href}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    spy={true}
                                    activeClass="text-green-primary"
                                    className="cursor-pointer text-center hover:!font-bold text-white hover:text-black transition-all"
                                >
                                    {link.name}
                                </ScrollLink>
                            )
                        )}
                    </header>
                    <h1 className="racing-sans-one-regular text-black text-6xl">
                        Your all needs <br /> everyday app
                    </h1>
                    <img alt="rapide car" src={car} className="w-full h-auto" />
                    <DownloadButton className="hover:cursor-pointer " />
                </div>
            </div>

            {/* Right side */}
            <div className="w-[25%] h-full flex flex-col items-center justify-between pt-4 pb-16 px-8">
                {/* Lang Switcher */}
                <div className="w-60">
                    <LanguageSwitcher />
                </div>
                <p className="text-justify">
                    {t('homePage.hero.description2')}
                </p>

                <SocialMedia />
            </div>
        </div>
    )
}

export default HeroForDesktop
