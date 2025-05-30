// import { Button } from '@mantine/core'
// import heroImg from '../../../assets/image/hero-imgs/hero-img.png'
import { FaFacebook } from 'react-icons/fa'
// import playStoreIcon from '../../../assets/icons8_google_play_480px.png'
// import deco1 from '../../../assets/image/hero-imgs/deco-1.png'
// import deco2 from '../../../assets/image/hero-imgs/deco-2.png'
// import deco3 from '../../../assets/image/hero-imgs/deco-3.png'
// import deco4 from '../../../assets/image/hero-imgs/deco-4.png'
// import appleQrCode from '../../../assets/QrCode/Apple.png'
// import androidQrCode from '../../../assets/QrCode/Android.png'
import Container from '../../common/Container'
import AppStore from '../../../assets/icons/AppStore'
import PlayStore from '../../../assets/icons/PlayStore'
import Phone from '../../../assets/icons/Phone'
import World from '../../../assets/icons/World'
import car from '../../../assets/image/hero-imgs/car-image.png'
import DownloadButton from '../../../assets/icons/DownloadButton'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="w-screen bg-green-quadritary relative">
      <Container id='home' className='text-white z-10 relative' >
        <div className="w-full min-h-[100vh] lg:h-fit flex flex-col items-center justify-center gap-10 md:gap-20 lg:gap-0 ">
          <h1 className="w-fit text-center flex flex-col gap-1 lg:gap-3 racing-sans-one-regular text-black text-4xl md:text-6xl">
            <p className='racing-sans-one-regular' >Your all needs</p>
            <p className='racing-sans-one-regular' >everyday app</p>
          </h1>

          <div className=' w-full flex flex-col gap-[50px] xl:gap-[250px] ' >

            <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between gap-5 text-center lg:text-start' >
              <p className='max-w-[300px]'>At Rapide App, we are committed to providing the fastest, most reliable, and user-friendly services to simplify your daily life. Our platform integrates seamless transportation, quick food delivery, easy online shopping, and secure payments, all in one place.</p>
              <p className='max-w-[300px]'  >Save time, simplify your daily routine, and enjoy a modern digital experience with Rapide App.</p>
            </div>

            <div className=' flex flex-col gap-5 md:gap-10 items-center justify-center lg:flex-row w-full lg:justify-between lg:items-end'>
              <div className='flex flex-row lg:flex-col  gap-5' >
                <AppStore className='hover:cursor-pointer' />
                <PlayStore className='hover:cursor-pointer' />
              </div>
              <div className='flex gap-5' >
                <Link to={"https://www.facebook.com/share/1AKupQh8dm/"} target='_blank' ><FaFacebook color='white' size={33} className='hover:cursor-pointer' /></Link>
                <Link to={'tel:038 22 684 15'}> <Phone className='hover:cursor-pointer' /></Link>
                <Link to={'mailto:contact@rapideapp.mg'} > <World className='hover:cursor-pointer' /> </Link>
              </div>
            </div>
          </div>

          <DownloadButton className='hover:cursor-pointer mt-0 lg:mt-50 xl:mt-20 hover:scale-110 transition-all ' />

          <img alt='car image' src={car} className='absolute top-[50%] left-1/2 -translate-x-1/2 w-[805px] h-auto hidden lg:block ' />
          {/* <div className="max-w-[600px] p-5 text-center sm:p-20 flex flex-col gap-5 justify-between z-10 h-full m-auto lg:m-0"> */}
          {/* <div className=" flex flex-col gap-10 h-full"> */}

          {/* <p className="text-[#525252]">
                Save time, simplify your daily routine, and enjoy a
                modern digital experience with Rapide App.
              </p> */}
          {/* </div> */}
          {/* <div className="flex flex-wrap gap-3 justify-center">
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
            </div> */}
          {/* </div> */}
          {/* <div className="lg:absolute right-0 hidden md:block">
            <img src={heroImg} alt="hero-img" className="" />
          </div> */}
        </div>
        {/* <div>
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
        </div> */}


      </Container>
      <div className='absolute lg:h-[126%] xl:h-[121.5%] w-[570px] bg-green-secondary -top-50 bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#3EC200] to-[#EAFAE2] hidden lg:block' >

      </div>
    </div>
  )
}

export default Hero
