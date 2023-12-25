import React from 'react'
import { useWindowWidth } from '../../utils/utilities/common';
import {workshopsData} from "../../assets/constants/data"
import { Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const Workshops = () => {
  const windowSize = useWindowWidth();
  const slidesPerView = windowSize < 560 ? 1 : (windowSize > 560 && windowSize < 1024 ? 3 : 3);
  return (
    <div>
        <div className='home-components' style={{marginTop:"50px"}}>
        <h1 className='home-component-title'>Choose the workshop near you</h1>
        <p className='home-component-sub-title'>Schedule a Pickup Today !</p>
        <div style={{position:"relative"}}>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    el: '.workshop-pagination',
                }}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={slidesPerView}
                >
                {workshopsData.map((workshop, index) => (
                    <SwiperSlide> <img style={{width:"100%", borderRadius:"10px"}} src={workshop.image} alt="" /> </SwiperSlide>
                ))}
            </Swiper>
            <div className="workshop-pagination" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-30px' }}></div>
        </div>
        </div>
        <div className='home-components' style={{marginTop:"50px"}}>
            <h1 className='home-component-title'>GoMechanics Guarantee</h1>
            <div className="d-grid" style={{gridTemplateColumns: "repeat(2, 1fr)" , gridGap:"40px 40px"}}> 
                <div className='guarantee-comp' style={{ backgroundColor:"#E0F4FF"}}>Free Pickup Drop</div>
                <div className='guarantee-comp' style={{ backgroundColor:"#F6F7C4"}}>Genuine Parts</div>
                <div className='guarantee-comp' style={{ backgroundColor:"#E5D4FF"}}>30 Days Warranty</div>
                <div className='guarantee-comp' style={{ backgroundColor:"#C3E2C2"}}>Affordable Prices</div>
            </div>
        </div>
    </div>
)
}
export default Workshops
