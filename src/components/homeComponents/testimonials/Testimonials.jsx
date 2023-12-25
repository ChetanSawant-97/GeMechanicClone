import React from 'react'
import TestimonialCard from './TestimonialCard'
import {testimonialsData} from '../../../assets/constants/data.js'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowWidth } from '../../../utils/utilities/common'
import '../../../utils/testimonials.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const windowSize = useWindowWidth();
  const slidesPerView = windowSize < 1024 ? 1 : 3;


  return (
    <div className='home-components'>
      <h1 className='home-component-title'>What car Owners Say About GoMechanic</h1>
      <p className='home-component-sub-title'>Get Discounted and professional periodic car service, car repair, wheel care services, cashless insurance claim, and much more.</p>
      <div style={{ position: 'relative' }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
        </Swiper>
        <div className="testimonial-pagination" ></div>
      </div>
    </div>
  )
}

export default Testimonials
