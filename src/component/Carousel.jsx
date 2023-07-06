import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carrousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <h1 className="title-carousel">POPULAR MY TINERARIES</h1>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
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
          <div className="SwiperSlide">
            <div className='oneOne'>
              <div className="row-cities">
                <div className='blue'><h3>Amsterdam, Netherlands</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='oneTwo'>
              <div className="row-cities">
                <div className='blue'><h3>Athens, Grecce</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='oneThree'>
              <div className="row-cities">
                <div className='blue'><h3>Bangkok, Thailand</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='oneFour'>
              <div className="row-cities">
                <div className='blue'><h3>Berlin, Germany</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="SwiperSlide">
            <div className='twoOne'>
              <div className="row-cities">
                <div className='blue'><h3>Cairo, Egypto</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='twoTwo'>
              <div className="row-cities">
                <div className='blue'><h3>Dubai, United Arab Emirates</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='twoThree'>
              <div className="row-cities">
                <div className='blue'><h3>Hong Kong, Chinese</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='twoFour'>
              <div className="row-cities">
                <div className='blue'><h3>Johannesburg, South Africa</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className='threeOne'>
              <div className="row-cities">
                <div className='blue'><h3>Mexico City, Mexico</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='threeTwo'>
              <div className="row-cities">
                <div className='blue'><h3>Rio de Janeiro, Brazil</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='threeThree'>
              <div className="row-cities">
                <div className='blue'><h3>Sydney, Australia</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='threeFour'>
              <div className="row-cities">
                <div className='blue'><h3>Toronto, Canada</h3></div>
                <div className='yellow'></div>
              </div>
            </div>
          </div>
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
