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
              <div className="oneOne-row">
                <div className='blue'><p>AMSTERMDAM, NETHERLANDS</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='oneTwo'>
              <div className="oneOne-row">
                <div className='blue'><p>ATHENS, GREECE</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='oneThree'>
              <div className="oneOne-row">
                <div className='blue'><p>BANGKOK, THAILAND</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='oneFour'>
              <div className="oneOne-row">
                <div className='blue'><p>BERLIN, GERMANY</p></div>
                <div className='yellow'></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="SwiperSlide">
            <div className='twoOne'>
              <div className="oneOne-row">
                <div className='blue'><p>CAIRO, EGYPT</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='twoTwo'>
              <div className="oneOne-row">
                <div className='blue'><p>DUBAI, UNITED ARAB EMIRATES</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='twoThree'>
              <div className="oneOne-row">
                <div className='blue'><p>HONG KONG, CHINESE</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='twoFour'>
              <div className="oneOne-row">
                <div className='blue'><p>JOHANNESBURG, SOUTH AFRICA</p></div>
                <div className='yellow'></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="SwiperSlide">
            <div className='threeOne'>
              <div className="oneOne-row">
                <div className='blue'><p>MEXICO CITY, MEXICO</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='threeTwo'>
              <div className="oneOne-row">
                <div className='blue'><p>RIO DE JANEIRO, BRAZIL</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='threeThree'>
              <div className="oneOne-row">
                <div className='blue'><p>SYDNEY AUSTRALIA</p></div>
                <div className='yellow'></div>
              </div>
            </div>
            <div className='threeFour'>
              <div className="oneOne-row">
                <div className='blue'><p>TORONTO, CANADA</p></div>
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
