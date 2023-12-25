import React from 'react'
import {curatedServices} from "../../../assets/constants/data"
import {Swiper, SwiperSlide} from 'swiper/react'
import CustomServiceCard from './CustomServiceCard';
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import { useWindowWidth } from '../../../utils/utilities/common';

const CuratedCustomeServices = () => {
  const windowWidth = useWindowWidth();
  const slidesCount = windowWidth < 560 ? 3 : 6;

  return (
    <div className='home-components' style={{marginTop:"50px"}}>
        <h1 className='home-component-title'>Curated Custom Service</h1>
        <div  style={{ position: 'relative' }}>
            <Swiper
            pagination={{
                dynamicBullets: true,
                el: '.service-pagination',
            }}
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={slidesCount}
            >
            {curatedServices.map((service, index) => (
                <SwiperSlide> <CustomServiceCard key={index} serviceTitle={service.service} serviceImg={service.image} /></SwiperSlide>
            ))}
            </Swiper>
            <div className="service-pagination" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-30px' }}></div>
        </div>
    </div>
  )
}

export default CuratedCustomeServices
