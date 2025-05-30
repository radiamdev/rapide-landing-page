import deco1 from '../../../assets/image/deco-1.png'
import deco2 from '../../../assets/image/deco-2.png'
import Container from '../../common/Container'
import serviceImage from '../../../assets/image/moto-image.png'
import PackageDelivery from '../../../assets/icons/PackageDelivery'
import RideHilling from '../../../assets/icons/RideHilling'
import ExpressDelivery from '../../../assets/icons/ExpressDelivery'
import { useTranslation } from 'react-i18next'

function Service() {
    const { t } = useTranslation()

    const serviceData = [
        {
            title: t('homePage.service.title1'),
            description: t('homePage.service.description1'),
            icon: <PackageDelivery />,
        },
        {
            title: t('homePage.service.title2'),
            description: t('homePage.service.description2'),
            icon: <RideHilling />,
        },
        {
            title: t('homePage.service.title3'),
            description: t('homePage.service.description3'),
            icon: <ExpressDelivery />,
        },
    ]

    return (
        <div className=" w-screen  relative">
            <Container
                tag="section"
                id="service"
                className="grid grid-cols-1 lg:grid-cols-2 lg:py-16 py-8 gap-10 lg:gap-0"
            >
                <div className="flex flex-col lg:gap-24 gap-10 lg:border-r border-r-black lg:justify-evenly xl:justify-start ">
                    <div className="space-y-4">
                        <p className=" text-lg md:text-2xl">
                           {t('homePage.service.subtitle')}
                        </p>
                        <h1 className=" text-4xl md:text-6xl cwf-regular text-green-tertiary">
                            {t('homePage.service.title')}
                        </h1>
                    </div>
                    <img
                        src={serviceImage}
                        alt="moto imago"
                        className="w-full h-auto"
                    />
                </div>

                <div className=" pl-0 lg:pl-10">
                    {serviceData.map((service) => (
                        <div
                            key={service.title}
                            className="flex flex-col lg:flex-row gap-5 "
                        >
                            <div> {service.icon} </div>
                            <div className="flex flex-col gap-5">
                                <h2 className="barlow-bold  text-3xl">
                                    {' '}
                                    {service.title}{' '}
                                </h2>
                                <p className="mb-10 border-b border-b-black pb-5 text-justify">
                                    {' '}
                                    {service.description}{' '}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <img
                        src={deco1}
                        alt="deco-1"
                        className="absolute animate-bounce top-[30%] right-10 -z-10"
                    />
                    <img
                        src={deco2}
                        alt="deco-2"
                        className="absolute animate-ping bottom-[20%] left-[2%] -z-10"
                    />
                    <img
                        src={deco2}
                        alt="deco-2"
                        className="absolute bottom-[20%] left-[2%] -z-10"
                    />
                </div>
            </Container>
        </div>
    )
}

export default Service
