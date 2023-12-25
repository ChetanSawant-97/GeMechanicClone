import React, { useEffect, useState } from 'react'
import "../../utils/homeComponents.css"
import {services} from "../../assets/constants/data"
import OurSeriveCard from './OurServiceCard'
import"../../utils/ourServices.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import { useWindowWidth } from '../../utils/utilities/common'


const OurServices = () => {
  const windowSize = useWindowWidth();
  const slidesPerView = windowSize < 560 ? 2 : (windowSize > 560 && windowSize < 1024 ? 3 : 0);
  return (
    <>
      <div className='home-components'>
        <h1 className='home-component-title'>Car Services We Provide</h1>
        <p className='home-component-sub-title'>Get Discounted and professional periodic car service, car repair, wheel care services, cashless insurance claim, and much more.</p>

        {windowSize > 1024 ? (
          <div className='services-container mt-4 '>
            {services.map((service, index) => (
              <OurSeriveCard key={index} serviceTitle={service.service} serviceImg={service.image} />
            ))}
          </div>
        ) : (
            <div  style={{ position: 'relative' }}>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  el: '.custom-pagination',
                }}
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={slidesPerView}
              >
                {services.map((service, index) => (
                  <SwiperSlide> <OurSeriveCard key={index} serviceTitle={service.service} serviceImg={service.image} /></SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-pagination" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-30px' }}></div>
            </div>
        )}
      </div>
    </>
  )
}

export default OurServices