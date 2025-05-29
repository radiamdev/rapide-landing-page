import serviceImage1 from '../../../assets/image/service-imgs/service-img-1.png'
import serviceImage2 from '../../../assets/image/service-imgs/service-img-2.png'
import serviceImage3 from '../../../assets/image/service-imgs/service-img-3.png'
import deco1 from '../../../assets/image/service-imgs/deco-1.png'
import deco2 from '../../../assets/image/service-imgs/deco-2.png'

function Service() {
    return (
        <div className="relative">
            <div className="p-3 sm:p-20 flex flex-col gap-20 shadow">
                <div className="flex flex-col gap-10">
                    <h1 className="barlow-bold text-center text-5xl">
                        Our{' '}
                        <span className="text-[#0c0] barlow-bold">
                            Best Service
                        </span>
                    </h1>
                    <p className="text-center text-[#525252] sm:max-w-[70%] m-auto">
                        At Rapide App, we are committed to providing the
                        fastest, most reliable, and user-friendly services to
                        simplify your daily life. Our platform integrates
                        seamless transportation, quick food delivery, easy
                        online shopping, and secure payments, all in one place.
                    </p>
                </div>
                <div className="flex justify-around gap-3 flex-wrap">
                    <div className="p-3 shadow-lg rounded-xl max-w-[360px]">
                        <div>
                            <img src={serviceImage1} alt="service-img-1" />
                        </div>
                        <h3 className="barlow-bold text-3xl mb-5">
                            Package Delivery
                        </h3>
                        <p className="text-[#525252] text-justify">
                            With Rapide App, sending and receiving packages has
                            never been easier. Whether it's urgent documents,
                            online orders, or personal deliveries, our fast and
                            secure service ensures your items reach their
                            destination safely. Trust Rapide App for efficiency,
                            speed, and convenience!
                        </p>
                    </div>
                    <div className="p-3 shadow-lg rounded-xl max-w-[360px]">
                        <div>
                            <img src={serviceImage2} alt="service-img-2" />
                        </div>
                        <h3 className="barlow-bold text-3xl mb-5">
                            Ride Hailing
                        </h3>
                        <p className="text-[#525252] text-justify">
                            Need a ride? Rapide App connects you to reliable
                            drivers in just a few clicks. Whether you're
                            commuting to work, heading out with friends, or
                            running errands, our service offers fast,
                            affordable, and safe transportation. With a fleet of
                            cars and motorcycles, we ensure a smooth and
                            hassle-free ride anytime, anywhere. Travel with
                            ease—choose Rapide App!
                        </p>
                    </div>
                    <div className="p-3 shadow-lg rounded-xl max-w-[360px]">
                        <div>
                            <img src={serviceImage3} alt="service-img-2" />
                        </div>
                        <h3 className="barlow-bold text-3xl mb-5">
                            Express delivery
                        </h3>
                        <p className="text-[#525252] text-justify">
                            Need to send something urgently? Rapide App offers
                            Express Delivery for fast, secure, and hassle-free
                            shipments. Whether it's documents, parcels, or
                            last-minute essentials, our service ensures quick
                            delivery with real-time tracking. Get your items
                            where they need to be—fast and reliable, just the
                            way you need it!
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={deco1}
                    alt="deco-1"
                    className="absolute animate-bounce top-[30%] right-0 -z-10"
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
        </div>
    )
}

export default Service
