import aboutLeftImg from '../../../assets/image/aboute-imgs/about-left-img.png'
import deco1 from '../../../assets/image/aboute-imgs/deco-1.png'
import deco2 from '../../../assets/image/aboute-imgs/deco-2.png'
import deco3 from '../../../assets/image/aboute-imgs/deco-3.png'

function AboutUsA() {
    return (
        <div className="relative">
            <div className="p-5 sm:p-20 grid lg:grid-cols-2 gap-5" id="about">
                <div className="max-h-[500px]">
                    <img
                        src={aboutLeftImg}
                        alt="about-left-img"
                        className="h-full m-auto"
                    />
                </div>
                <div>
                    <h1 className="barlow-bold text-6xl mb-10">
                        We Serve customers for{' '}
                        <span className="barlow-bold text-[#0c0]">Driver</span>
                    </h1>
                    <p className="text-justify mb-5">
                        At Rapide App, our priority is to provide customers with
                        fast, reliable, and hassle-free services. Whether you
                        need a ride, a package delivered, or an express
                        shipment, we ensure a smooth experience with real-time
                        tracking and dedicated support. Convenience, security,
                        and efficiency are at the heart of what we do.
                    </p>
                    <p className="text-justify">
                        With our professional drivers, we guarantee high-quality
                        service at competitive rates. No more waiting or
                        uncertainties—just seamless transportation and delivery
                        solutions tailored to your needs. Rapide App is here to
                        make your daily life easier, one ride and one delivery
                        at a time.
                    </p>
                </div>
            </div>
            <div>
                <img
                    src={deco1}
                    alt="deco-1"
                    className="absolute animate-pulse top-[5%] -z-10"
                />
                <img
                    src={deco2}
                    alt="deco-2"
                    className="absolute animate-spin top-[15%] left-[45%] -z-10"
                />
                <img
                    src={deco3}
                    alt="deco-3"
                    className="absolute animate-bounce bottom-[10%] right-[5%] -z-10"
                />
            </div>
        </div>
    )
}

export default AboutUsA
