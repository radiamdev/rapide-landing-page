// import { useState } from 'react'
// import logo from '../../assets/image/rapide_app_black.png'
import { Link } from 'react-router-dom'
import { RiMenuFoldLine } from 'react-icons/ri'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import { LanguageSwitcher } from '../LanguageSwitcher'
import Logo from '../../assets/icons/Logo'
import Container from '../common/Container'

function NavBar() {
    // const [selectedNav, setSelectedNav] = useState('home')
    const [opened, { open, close }] = useDisclosure(false)
    // const navigate = useNavigate()

    const headerLinkData = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Service', href: '#service' },
        { name: 'Functionality', href: '#howItWork' },
    ]
    return (
        <div
            className=" w-screen bg-green-quadritary text-white">
            <Container tag='header' className='flex justify-between py-5 p-5 lg:px-20 shadow items-center' >
                <div>
                    <Logo className='w-[120px] md:w-[150px] xl:w-[190px] ' />
                </div>
                <div className="hidden lg:flex items-center justify-center gap-5 relative z-10">
                    {
                        headerLinkData.map((link, index) => (
                            <Link
                                key={index}
                                to={link.href}
                                className=' text-center font-bold barlow-bold text-white hover:text-green-quadritary transition-all duration-300'
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                    {/* <a
                        href="#home"
                        className={`barlow-bold ${selectedNav === 'home' ? 'text-[#0c0]' : ''
                            }`}
                        onClick={() => setSelectedNav('home')}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className={`barlow-bold ${selectedNav === 'about-us' ? 'text-[#0c0]' : ''
                            }`}
                        onClick={() => setSelectedNav('about-us')}
                    >
                        About Us
                    </a>
                    <a
                        href="https://privacy.rapideapp.mg/"
                        className={`barlow-bold cursor-pointer ${selectedNav === 'term' ? 'text-[#0c0]' : ''
                            }`}
                    >
                        Term and conditions
                    </a>
                    <div
                        className={`barlow-bold cursor-pointer ${selectedNav === 'delete-account' ? 'text-[#0c0]' : ''
                            }`}
                        onClick={() => navigate('/delete-account')}
                    >
                        Delete account
                    </div>
                    <a
                        href="mailto:contact@rapideapp.mg"
                        className={`barlow-bold ${selectedNav === 'contact-us' ? 'text-[#0c0]' : ''
                            }`}
                        onClick={() => setSelectedNav('contact-us')}
                    >
                        Contact Us
                    </a> */}
                    <LanguageSwitcher />
                    <button className=' w-fit text-black !text-2xl lg:text-base !font-semibold bg-white py-3 px-4 rounded-md lg:hidden' > Contactez nous </button>
                </div>
                <button className='hidden lg:block text-black !font-semibold bg-white py-3 px-4 rounded-md' > Contactez nous </button>
                <div className="cursor-pointer block lg:hidden " >
                    <RiMenuFoldLine size={30} onClick={open} />
                    <Modal opened={opened} onClose={close} title="Menu">
                        <div className="flex flex-col gap-3 text-center ">
                            {
                                headerLinkData.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        className=' text-center text-black hover:text-[#0c0] transition-all duration-300'
                                    >
                                        {link.name}
                                    </Link>
                                ))
                            }
                            {/* <a
                                href="#home"
                                onClick={() => close()}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className={`barlow-bold ${selectedNav === 'about-us' ? 'text-[#0c0]' : ''
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
                                className={`barlow-bold cursor-pointer ${selectedNav === 'term' ? 'text-[#0c0]' : ''
                                    }`}
                            >
                                Term and conditions
                            </a>
                            <div
                                className={`barlow-bold cursor-pointer ${selectedNav === 'delete-account'
                                    ? 'text-[#0c0]'
                                    : ''
                                    }`}
                                onClick={() => navigate('/delete-account')}
                            >
                                Delete account
                            </div>
                            <a
                                href="mailto:contact@rapideapp.mg"
                                className={`barlow-bold ${selectedNav === 'contact-us'
                                    ? 'text-[#0c0]'
                                    : ''
                                    }`}
                                onClick={() => setSelectedNav('contact-us')}
                            >
                                Contact Us
                            </a> */}
                        </div>
                    </Modal>
                </div>

                {/* <div className="cursor-pointer block md:hidden">
                    <RiMenuFoldLine size={30} onClick={open} />
                    <Modal opened={opened} onClose={close} title="Menu">
                        <div className="flex flex-col gap-3 text-center">
                            <a
                                href="#home"
                                className={`barlow-bold ${selectedNav === 'home' ? 'text-[#0c0]' : ''
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
                                className={`barlow-bold ${selectedNav === 'about-us' ? 'text-[#0c0]' : ''
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
                                className={`barlow-bold cursor-pointer ${selectedNav === 'term' ? 'text-[#0c0]' : ''
                                    }`}
                            >
                                Term and conditions
                            </a>
                            <div
                                className={`barlow-bold cursor-pointer ${selectedNav === 'delete-account'
                                    ? 'text-[#0c0]'
                                    : ''
                                    }`}
                                onClick={() => navigate('/delete-account')}
                            >
                                Delete account
                            </div>
                            <a
                                href="mailto:contact@rapideapp.mg"
                                className={`barlow-bold ${selectedNav === 'contact-us'
                                    ? 'text-[#0c0]'
                                    : ''
                                    }`}
                                onClick={() => setSelectedNav('contact-us')}
                            >
                                Contact Us
                            </a>
                        </div>
                    </Modal>
                </div> */}
            </Container>
        </div>
    )
}

export default NavBar
