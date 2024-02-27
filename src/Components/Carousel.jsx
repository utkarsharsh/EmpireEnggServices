import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Mousewheel} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';

const Carousel = () => {

  
    const handleClick = () => {
      const serviceSection = document.getElementById('services');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth' }); 
      }
    }

  return (
    <>
      <div className="main-carousel -z-1 pt-20 ">
      <Swiper
        
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        cssMode={true}
        sticky={false}
        freeMode={{ enable: true }}
        mousewheel={{
          mousewheel: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide>
            <div className='slide1 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex flex-col justify-center items-center '>
                    <div className='flex flex-col items-center'>
                    <h1 className='poppins text-white text-5xl '>EMPIRE ENGINEERING SERVICES</h1>
                    <h2 className='poppins mt-1 text-white font-semibold text-3xl '>Driven by excellence,built on culture</h2>
                    </div>
                    <div>
                      <Link to='/#services'><button onClick={handleClick} className='bg-[#00cc99] hover:bg-emerald-600 mt-8 w-30 px-3 py-2 rounded-md font-bold flex text-[1.15rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[1.5px]' size={25}/></button></Link>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide2 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide3 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide4 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide5 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide6 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide7 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide8 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='text-white text-4xl'>EMPIRE ENGINEERING SERVICES</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide9 flex w-full h-[60vh] md:h-[75vh] justify-center items-center'>
                 <div className='bg-black bg-opacity-40 w-full h-full flex justify-center items-center '>
                    <div>
                    <h1 className='poppins text-white font-semibold text-3xl '>Accountability, Adaptability and Customer Centric</h1>
                    </div>
                    
                    </div>
            </div>
          </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}

export default Carousel