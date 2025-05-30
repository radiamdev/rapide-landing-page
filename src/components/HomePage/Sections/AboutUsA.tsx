// import aboutLeftImg from '../../../assets/image/aboute-imgs/about-left-img.png'
// import deco1 from '../../../assets/image/aboute-imgs/deco-1.png'
// import deco2 from '../../../assets/image/aboute-imgs/deco-2.png'
// import deco3 from '../../../assets/image/aboute-imgs/deco-3.png'
import Container from '../../common/Container'
import aboutImage from '../../../assets/image/aboute-imgs/about-image.png'

function AboutUsA() {
    return (
        <div className='w-screen bg-gradient-to-b from-[#43BF00] to-[#1F5900] relative ' >
            <Container tag='section' id='about' className='grid grid-cols-1 lg:grid-cols-2 text-white min-h-[80vh] py-10 relative z-10' >
                <div className='h-full flex flex-col gap-10 justify-center' >
                    <h1 className='text-white text-6xl barlow-bold max-w-[600px]  ' > We Serve customers for <span className='text-black barlow-bold' >Driver</span> </h1>
                    <p>At Rapide App, our priority is to provide customers with fast, reliable, and hassle-free services. Whether you need a ride, a package delivered, or an express shipment, we ensure a smooth experience with real-time tracking and dedicated support. Convenience, security, and efficiency are at the heart of what we do.</p>
                    <p>With our professional drivers, we guarantee high-quality service at competitive rates. No more waiting or uncertainties—just seamless transportation and delivery solutions tailored to your needs. Rapide App is here to make your daily life easier, one ride and one delivery at a time.</p>
                    <button className=' w-fit !font-semibold p-5 text-xl bg-green-quadritary rounded-3xl hover:text-green-quadritary hover:bg-white transition-colors hover:cursor-pointer' > Download App for Driver </button>
                </div>
                <div>
                    <img src={aboutImage} alt="car and phone image" className='w-[750px] h-auto hidden lg:block ' />
                </div>
            </Container>
            <div className='absolute left-0 bottom-[5%] w-full h-[150px] bg-gradient-to-r from-[#318C01] to-[#FFFDFD]  ' ></div>
        </div>


        // <div className="relative">
        //     <div className="p-5 sm:p-20 grid lg:grid-cols-2 gap-5" id="about">
        //         <div className="max-h-[500px]">
        //             <img
        //                 src={aboutLeftImg}
        //                 alt="about-left-img"
        //                 className="h-full m-auto"
        //             />
        //         </div>
        //         <div>
        //             <h1 className="barlow-bold text-6xl mb-10">
        //                 We Serve customers for{' '}
        //                 <span className="barlow-bold text-[#0c0]">Driver</span>
        //             </h1>
        //             <p className="text-justify mb-5">
        //                 At Rapide App, our priority is to provide customers with
        //                 fast, reliable, and hassle-free services. Whether you
        //                 need a ride, a package delivered, or an express
        //                 shipment, we ensure a smooth experience with real-time
        //                 tracking and dedicated support. Convenience, security,
        //                 and efficiency are at the heart of what we do.
        //             </p>
        //             <p className="text-justify">
        //                 With our professional drivers, we guarantee high-quality
        //                 service at competitive rates. No more waiting or
        //                 uncertainties—just seamless transportation and delivery
        //                 solutions tailored to your needs. Rapide App is here to
        //                 make your daily life easier, one ride and one delivery
        //                 at a time.
        //             </p>
        //         </div>
        //     </div>
        //     <div>
        //         <img
        //             src={deco1}
        //             alt="deco-1"
        //             className="absolute animate-pulse top-[5%] -z-10"
        //         />
        //         <img
        //             src={deco2}
        //             alt="deco-2"
        //             className="absolute animate-spin top-[15%] left-[45%] -z-10"
        //         />
        //         <img
        //             src={deco3}
        //             alt="deco-3"
        //             className="absolute animate-bounce bottom-[10%] right-[5%] -z-10"
        //         />
        //     </div>
        // </div>
    )
}

export default AboutUsA
