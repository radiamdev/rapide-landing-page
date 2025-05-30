import { Button } from '@mantine/core'
import aboutUsIllustration from '../../../assets/image/about_us_illustration.png'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <section id='about' className="bg-gradient-to-t  from-green-secondary to-green-quintinary relative py-16">
            <div className="flex lg:flex-row flex-col items-center justify-between w-full">
                <div className="lg:w-1/2 w-full lg:pl-28 p-0">
                    <div className="space-y-6 px-8 lg:px-0">
                        <h1 className="text-white text-5xl !barlow-bold leading-tight">
                            {t('homePage.aboutUs.title1')} <br />{' '}
                            {t('homePage.aboutUs.title2')}{' '}
                            <span className="text-black !font-medium">
                                {t('homePage.aboutUs.title3')}
                            </span>
                        </h1>
                        <p className="text-white/80 text-lg">
                            {t('homePage.aboutUs.description1')}
                        </p>
                        <p className="text-white/80 text-lg ">
                            {t('homePage.aboutUs.description2')}
                        </p>
                    </div>
                    <div className="!flex-1 !text-center lg:my-12 my-8">
                        <Button
                            size="lg"
                            className="!rounded-full !shadow-2xl !bg-green-quadritary !text-white !barlow-bold  !z-10"
                            component="a"
                            href="/"
                        >
                            {t('homePage.aboutUs.button')}
                        </Button>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full z-10 p-8">
                    <img
                        src={aboutUsIllustration}
                        className="w-full h-auto"
                        alt="illustration"
                    />
                </div>
            </div>

            {/* Specific background */}
            <div className="bg-gradient-to-r from-green-sextinary to-[#FFFDFD] absolute bottom-10 left-0 lg:w-[80%] w-full h-28 z-0" />
        </section>
    )
}

export default AboutUs
