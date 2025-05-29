import { Button } from '@mantine/core'
import heroImg from '../../../assets/image/hero-imgs/hero-img.png'
import { FaApple } from 'react-icons/fa'
import playStoreIcon from '../../../assets/icons8_google_play_480px.png'
import deco1 from '../../../assets/image/hero-imgs/deco-1.png'
import deco2 from '../../../assets/image/hero-imgs/deco-2.png'
import deco3 from '../../../assets/image/hero-imgs/deco-3.png'
import deco4 from '../../../assets/image/hero-imgs/deco-4.png'
import appleQrCode from '../../../assets/QrCode/Apple.png'
import androidQrCode from '../../../assets/QrCode/Android.png'

function Hero() {
    return (
        <div className="relative">
            <div className="md:h-[100vh] flex items-center">
                <div className="max-w-[600px] p-5 text-center sm:p-20 flex flex-col gap-5 justify-between z-10 h-full m-auto lg:m-0">
                    <div className=" flex flex-col gap-10 h-full">
                        <h1 className="racing-sans-one-regular text-6xl">
                            Your all needs everyday app
                        </h1>
                        <p className="text-[#525252]">
                            Save time, simplify your daily routine, and enjoy a
                            modern digital experience with Rapide App.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <div className="flex flex-col items-center gap-3">
                            <img
                                src={androidQrCode}
                                alt="https://android.rapideapp.mg"
                                className="max-w-[200px] border-2 border-black rounded-md"
                            />
                            <a
                                href="https://android.rapideapp.mg"
                                target="_blank"
                            >
                                <Button
                                    leftSection={
                                        <img
                                            src={playStoreIcon}
                                            alt="google-play"
                                            className="w-[40px] slide-down "
                                        />
                                    }
                                    className="!bg-[#010001] barlow-bold !rounded-full !w-[200px] !h-[50px]"
                                >
                                    Google Play
                                </Button>
                            </a>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img
                                src={appleQrCode}
                                alt="https://apple.rapideapp.mg"
                                className="max-w-[200px] border-2 border-black rounded-md"
                            />
                            <a
                                href="https://apple.rapideapp.mg"
                                target="_blank"
                            >
                                <Button
                                    leftSection={<FaApple size={40} />}
                                    className="!bg-[#010001] barlow-bold !rounded-full !w-[200px] !h-[50px]"
                                >
                                    App Store
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute right-0 hidden md:block">
                    <img src={heroImg} alt="hero-img" className="" />
                </div>
            </div>
            <div>
                <img
                    src={deco1}
                    alt="deco-1"
                    className="absolute top-10 animate-bounce"
                />
                <img
                    src={deco2}
                    alt="deco-2"
                    className="absolute animate-spin left-[30%] bottom-[25%]"
                />
                <img
                    src={deco3}
                    alt="deco-3"
                    className="absolute animate-ping right-[35%] top-[10%]"
                />
                <img
                    src={deco3}
                    alt="deco-3"
                    className="absolute right-[35%] top-[10%]"
                />
                <img
                    src={deco4}
                    alt="deco-4"
                    className="absolute animate-bounce right-0 bottom-[20%]"
                />
            </div>
        </div>
    )
}

export default Hero
