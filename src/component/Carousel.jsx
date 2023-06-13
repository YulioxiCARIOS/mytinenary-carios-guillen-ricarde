import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style/carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>        
        <div className='oneOne'></div>
        <div className='oneTwo'></div>
        <div className='oneThree'></div>
        <div className='oneFour'></div>
        </SwiperSlide>
    
        <SwiperSlide>
        <div className='twoOne'></div>
        <div className='twoTwo'></div>
        <div className='twoThree'></div>
        <div className='twoFour'></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='threeOne'></div>
        <div className='threeTwo'></div>
        <div className='threeThree'></div>
        <div className='threeFour'></div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
