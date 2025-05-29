import how1 from '../../../assets/image/how1.png'
import how2 from '../../../assets/image/how2.png'
import download from '../../../assets/icons/download.png'
import createAccount from '../../../assets/icons/create_account.png'
import execute from '../../../assets/icons/execute.png'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
    const { t } = useTranslation()
    const card = [
        {
            icon: download,
            title: t('homePage.howItWorks.download'),
            description: t('homePage.howItWorks.descriptionDownload'),
        },
        {
            icon: createAccount,
            title: t('homePage.howItWorks.createAccount'),
            description: t('homePage.howItWorks.createAccountDescription'),
        },
        {
            icon: execute,
            title: t('homePage.howItWorks.execute'),
            description: t('homePage.howItWorks.executeDescription'),
        },
    ]
    return (
        <section className="bg-gradient-to-r  from-[#FFFFFF] to-[#E7F6DE] py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <img
                        src={how1}
                        alt="illustration"
                        className="w-32 h-auto"
                    />
                    <div className="text-center px-24 space-y-8">
                        <h1 className="text-4xl text-green-secondary uppercase cwf-regular leading-relaxed">
                            {t('homePage.howItWorks.title')}
                        </h1>
                        <p className="text-gray-600 text-lg font-semibold leading-relaxed">
                            {t('homePage.howItWorks.description')}
                        </p>
                    </div>
                    <img
                        src={how2}
                        alt="illustration"
                        className="w-24 h-auto"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {card.map((card) => (
                        <div
                            key={card.title}
                            className="flex flex-col items-center justify-center gap-8 p-8"
                        >
                            <img
                                src={card.icon}
                                alt="icon"
                                className="w-16 h-auto"
                            />
                            <div className="space-y-4">
                                <h3 className="text-2xl !font-semibold text-center">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
