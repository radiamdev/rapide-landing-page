import { Button } from '@mantine/core'
import { IoSend } from 'react-icons/io5'
import logo from '../../../assets/image/rapide_app_white.png'
import { SiGmail } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function FooterA() {
    const navigate = useNavigate()
    return (
        <div className="bg-[#0c0] p-5 text-white flex flex-col gap-5 bg-image">
            <div className="max-w-[700px] text-center m-auto flex flex-col gap-3">
                <h3 className="barlow-bold text-3xl">
                    Want more information ?
                </h3>
                <p>
                    If you have any questions or need more information about
                    Rapide App, don’t hesitate to reach out! Our team is here to
                    assist you and ensure you have all the details you need to
                    get started. We look forward to helping you with your
                    transportation needs!
                </p>
                <a href="mailto:contact@rapideapp.mg">
                    <Button
                        rightSection={<IoSend />}
                        className="!bg-white !text-[#0c0] !rounded-full !w-[200px] m-auto"
                    >
                        Send email
                    </Button>
                </a>
            </div>
            <hr className="w-1/2 m-auto" />
            <div className="flex justify-around gap-5 flex-wrap">
                <div className="flex flex-col justify-center w-[250px]">
                    <img src={logo} alt="rapide-white-logo" className="h-16" />
                </div>
                <div className="w-[250px]">
                    <h3 className="barlow-bold text-2xl">Menu</h3>
                    <ul className="list-disc ml-10">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            {' '}
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="https://privacy.rapideapp.mg/">
                                Term and conditions
                            </a>
                        </li>
                        <li
                            className="cursor-pointer"
                            onClick={() => navigate('/delete-account')}
                        >
                            Delete account
                        </li>
                    </ul>
                </div>
                <div className="w-[250px]">
                    <h3 className="barlow-bold text-2xl">Phone contact</h3>
                    <ul className="list-disc ml-10">
                        <li>+261 38 32 684 15</li>
                    </ul>
                </div>
                <div className="w-[250px]">
                    <h3 className="barlow-bold text-2xl mb-3">All contact</h3>
                    <div className="flex gap-3">
                        <a
                            href="mailto:contact@rapideapp.mg"
                            className="bg-white rounded-full p-2 cursor-pointer"
                        >
                            <SiGmail color="#0c0" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61574903333284"
                            target="_blank"
                            className="bg-white rounded-full p-2 cursor-pointer"
                        >
                            <FaFacebook color="#0c0" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="w-1/2 m-auto" />
            <div className="text-center">
                © 2025 Rapide App. All rights reserved.{' '}
            </div>
        </div>
    )
}

export default FooterA
