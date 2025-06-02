import logo from '../../../assets/image/rapide_app_white.png'
import { PiDotsNineBold } from 'react-icons/pi'
import { Link as ScrollLink } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { useDisclosure } from '@mantine/hooks'
import { LanguageSwitcher } from '../../common/LanguageSwitcher'
import { Modal } from '@mantine/core'
import playStore from '../../../assets/icons/play_store.png'
import appleStore from '../../../assets/icons/apple_store.png'
import SocialMedia from '../SocialMedia'
import DownloadButton from '../../../assets/icons/DownloadButton'

const HeroForMobile = () => {
    const [opened, { open, close }] = useDisclosure(false)

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
        <div className="h-screen bg-green-quadritary text-white">
            <header className="flex items-center justify-between p-4">
                {/* Logo */}
                <div className="w-60">
                    <img
                        src={logo}
                        alt="logo rapide"
                        className="w-full h-auto"
                    />
                </div>
                {/* Mobile Menu */}
                <div className="cursor-pointer block lg:hidden">
                    <PiDotsNineBold size={32} onClick={open} />
                    <Modal
                        opened={opened}
                        onClose={close}
                        transitionProps={{ transition: 'fade', duration: 200 }}
                    >
                        <div className="flex flex-col gap-3 text-center">
                            {headerLinkData.map((link) =>
                                link.external ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:text-[#0c0] font-bold transition-all"
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
                                        activeClass="text-[#0c0]"
                                        className="cursor-pointer text-black hover:text-[#0c0] font-bold transition-all"
                                        onClick={close}
                                    >
                                        {link.name}
                                    </ScrollLink>
                                )
                            )}
                            <LanguageSwitcher labelStyle="!text-green-primary" />
                        </div>
                    </Modal>
                </div>
            </header>

            <div className="my-8">
                <h1 className="racing-sans-one-regular text-black text-5xl text-center">
                    Your all needs <br /> everyday app
                </h1>
                <div className="p-8 space-y-8">
                    <p className="text-center">
                        {t('homePage.hero.description1')}
                    </p>
                    <p className="text-center">
                        {t('homePage.hero.description2')}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="flex items-center gap-4">
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
                    <SocialMedia />
                    <DownloadButton className="hover:cursor-pointer mt-8" />
                </div>
            </div>
        </div>
    )
}

export default HeroForMobile
