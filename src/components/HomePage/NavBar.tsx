import { useState } from 'react'
import logo from '../../assets/image/rapide_app_black.png'
import { useNavigate } from 'react-router-dom'
import { RiMenuFoldLine } from 'react-icons/ri'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import { LanguageSwitcher } from '../LanguageSwitcher'

function NavBar() {
    const [selectedNav, setSelectedNav] = useState('home')
    const [opened, { open, close }] = useDisclosure(false)
    const navigate = useNavigate()
    return (
        <div
            className="flex justify-between py-5 p-5 lg:px-20 shadow items-center"
            id="home"
        >
            <div>
                <img
                    src={logo}
                    alt="rapide-black-logo"
                    className="h-12 grayscale-50"
                />
            </div>
            <div className="hidden md:flex gap-5">
                <a
                    href="#home"
                    className={`barlow-bold ${
                        selectedNav === 'home' ? 'text-[#0c0]' : ''
                    }`}
                    onClick={() => setSelectedNav('home')}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={`barlow-bold ${
                        selectedNav === 'about-us' ? 'text-[#0c0]' : ''
                    }`}
                    onClick={() => setSelectedNav('about-us')}
                >
                    About Us
                </a>
                <a
                    href="https://privacy.rapideapp.mg/"
                    className={`barlow-bold cursor-pointer ${
                        selectedNav === 'term' ? 'text-[#0c0]' : ''
                    }`}
                >
                    Term and conditions
                </a>
                <div
                    className={`barlow-bold cursor-pointer ${
                        selectedNav === 'delete-account' ? 'text-[#0c0]' : ''
                    }`}
                    onClick={() => navigate('/delete-account')}
                >
                    Delete account
                </div>
                <a
                    href="mailto:contact@rapideapp.mg"
                    className={`barlow-bold ${
                        selectedNav === 'contact-us' ? 'text-[#0c0]' : ''
                    }`}
                    onClick={() => setSelectedNav('contact-us')}
                >
                    Contact Us
                </a>
                <LanguageSwitcher />
            </div>
            <div className="cursor-pointer block md:hidden">
                <RiMenuFoldLine size={30} onClick={open} />
                <Modal opened={opened} onClose={close} title="Menu">
                    <div className="flex flex-col gap-3 text-center">
                        <a
                            href="#home"
                            className={`barlow-bold ${
                                selectedNav === 'home' ? 'text-[#0c0]' : ''
                            }`}
                            onClick={() => {
                                setSelectedNav('home')
                                close()
                            }}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`barlow-bold ${
                                selectedNav === 'about-us' ? 'text-[#0c0]' : ''
                            }`}
                            onClick={() => {
                                setSelectedNav('about-us')
                                close()
                            }}
                        >
                            About Us
                        </a>
                        <a
                            href="https://privacy.rapideapp.mg/"
                            className={`barlow-bold cursor-pointer ${
                                selectedNav === 'term' ? 'text-[#0c0]' : ''
                            }`}
                        >
                            Term and conditions
                        </a>
                        <div
                            className={`barlow-bold cursor-pointer ${
                                selectedNav === 'delete-account'
                                    ? 'text-[#0c0]'
                                    : ''
                            }`}
                            onClick={() => navigate('/delete-account')}
                        >
                            Delete account
                        </div>
                        <a
                            href="mailto:contact@rapideapp.mg"
                            className={`barlow-bold ${
                                selectedNav === 'contact-us'
                                    ? 'text-[#0c0]'
                                    : ''
                            }`}
                            onClick={() => setSelectedNav('contact-us')}
                        >
                            Contact Us
                        </a>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default NavBar
