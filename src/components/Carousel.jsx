import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { modelingImagesListArray } from '../constants';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/free-mode'
import { Link } from 'react-router-dom';
import { instaLogo } from '../assets/pictures';

const Carousel = () => {
  return (
    <Swiper
            style={{
                "--swiper-navigation-color": "gold",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction:false
            }}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 50
                },
                1030: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
            }}
      

        >
            {modelingImagesListArray.map((image) => {
                return (
                    <SwiperSlide className='flex items-center justify-center' key={image.imageSrc}>
                        <div>
                            <div>
                                <img className='w-[300px] rounded-tr-md rounded-tl-md h-[310px]' src={image.imageSrc} />
                            </div>

                            <div className='black-gradient rounded-bl-md rounded-br-md text-gold font-bold font-mono h-[80px] flex flex-col justify-evenly p-2'>   
                                <Link className='flex underline underline-offset-[7px]' to={image.instaLink} target='_blank'><img src={instaLogo} alt='insta icon '/>: Check Out on Insta</Link>
                                <Link className='flex underline underline-offset-[7px]'><img src={instaLogo} alt='photographer icon'/>: {image.photographer}</Link>
                            </div>
                        </div>
                    </SwiperSlide>)
            })}
        </Swiper>
  )
}

export default Carousel