import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import { LanguageSwitcher } from '../LanguageSwitcher'
import Container from '../common/Container'
import logo from '../../assets/image/rapide_app_white.png'
import { PiDotsNineBold } from 'react-icons/pi'
import { Link as ScrollLink } from 'react-scroll'
import { useTranslation } from 'react-i18next'

function NavBar() {
    const [opened, { open, close }] = useDisclosure(false)

    const {t} = useTranslation()

    const headerLinkData = [
        { name: t('homePage.header.home'), href: 'home' },
        { name: t('homePage.header.aboutUs'), href: 'about' },
        {
            name: t('homePage.header.termsAndConditions'),
            href: 'https://privacy.rapideapp.mg/',
            external: true,
        },
        { name: t('homePage.header.deleteAccount'), href: '/delete-account', external: true },
        { name: t('homePage.header.contactUs'), href: 'contact' },
    ]

    return (
        <div className="w-screen bg-green-quadritary text-white">
            <Container
                tag="header"
                className="flex items-center justify-between py-4"
            >
                {/* Logo */}
                <div className="w-60">
                    <img
                        src={logo}
                        alt="logo rapide"
                        className="w-full h-auto"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center justify-center gap-6 relative z-10 flex-grow">
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
                </div>

                {/* Lang Switcher */}
                <div className="w-60 flex-1 text-end lg:block hidden">
                    <LanguageSwitcher />
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
            </Container>
        </div>
    )
}

export default NavBar
