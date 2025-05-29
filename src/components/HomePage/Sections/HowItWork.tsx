import motoLivreur from '../../../assets/image/moto-livreur.png'

function HowItWork() {
    let inc = 0
    const howItWork: { title: string; description: string }[] = [
        {
            title: 'Download the app',
            description:
                'Download the Rapide App on your mobile device with Play Store or App Store.',
        },
        {
            title: 'Create an account',
            description:
                'Create an account with your phone number, first name, last name, email, and an Confirmation code that we will send to you.',
        },
        {
            title: 'Execute',
            description:
                'After creating an account, you can start using the Rapide App to book a ride, send a package, or receive a package.',
        },
    ]
    return (
        <div className="">
            <div className="bg-[#F9F9F9] p-5 sm:p-20">
                <div className="text-center sm:max-w-[70%] m-auto">
                    <h1 className="barlow-bold text-center text-5xl mb-5">
                        How it Works
                    </h1>
                    <p className="text-[#525252]">
                        With Rapide App, enjoy fast and reliable transportation
                        and delivery services at your fingertips. Simple and
                        efficient.
                    </p>
                </div>
                <div className="flex justify-around gap-3 flex-wrap mt-10">
                    {howItWork.map((item) => {
                        inc++
                        return (
                            <div className="p-3 shadow-lg rounded-xl max-w-[360px]">
                                <div className="barlow-bold text-5xl mb-5 text-[#E2E2E2]">
                                    {inc.toString().padStart(2, '0')}
                                </div>
                                <h3 className="barlow-bold text-3xl mb-5">
                                    {item.title}
                                </h3>
                                <p className="text-[#525252] text-justify">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-white p-3 sm:p-20 text-white">
                <div className="bg-[#0c0] px-10 rounded-xl flex justify-between flex-wrap lg:flex-nowrap items-center">
                    <img
                        src={motoLivreur}
                        alt="moto-livreur"
                        className="relative lg:-left-20 h-[300px] m-auto"
                    />
                    <div className="flex flex-col justify-around py-7 pr-10 gap-2">
                        <h1 className="barlow-bold text-5xl">
                            ALL YOU NEED EVERYDAY
                        </h1>
                        <p>
                            Rapide App is designed to simplify your everyday
                            transportation needs. Whether you choose a quick
                            ride on a Moto, a comfortable Lite car, or the
                            luxurious Premium service, we ensure that every
                            journey is tailored to your preferences. With our
                            dedicated drivers ready to assist you, getting to
                            your destination has never been easier.
                        </p>
                        <p>
                            Remember, with Rapide App, it’s not just about the
                            ride; it’s about convenience and comfort. Experience
                            it today, because "ALL YOU NEED EVERYDAY" is just a
                            tap away!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork
