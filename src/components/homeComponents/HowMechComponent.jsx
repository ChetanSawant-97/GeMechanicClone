import React from 'react'
import {howMechImg} from '../../assets/constants/ourServiceImg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../utils/howMech.css'
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Card from 'react-bootstrap/Card';
import { IoIosStar } from "react-icons/io";
import {featureImgs} from '../../assets/constants/ourServiceImg'

const HowMechComponent = () => {
  return (
    <div className='home-components'>
      <h1 className='home-component-title'>How GoMechanic Works ?</h1>
      <p className='home-component-sub-title'>Get Discounted and professional periodic car service, car repair, wheel care services, cashless insurance claim, and much more.</p>
      <div className="d-flex">
        <div className="d-flex flex-column how-mech-parent">
          <div className="d-flex">
            <div className="step-count_parent m3-rem"  >
              <div className='step-count' >1</div>
              <div className='pointer'></div>
            </div>
            <div className='step-det'>
              <h2>Select the Perfect Car Service</h2>
              <p>From Gomechanic's broad portfolio of services</p>
            </div>
            <div  style={{width:"40%"}}>
              <img src={howMechImg.selectThePerfectCarService} alt="" />
            </div>
          </div>

          <div className="d-flex">
            <div className='step-count_parent m3-rem'>
              <div className='step-count'>2</div>
              <div className='pointer'></div>
            </div>
            <div className='step-det' >
              <h2>Schedul Free Doorstep Pick-up</h2>
              <p>We Offer free pick up and drop for all services booked </p>
            </div>
            <div style={{width:"40%"}}>
              <img src={howMechImg.scheduleFreeDoorstepPickup} alt="" />
            </div>
          </div>
          <div className="d-flex">
            <div className='step-count_parent m3-rem'>
              <div className='step-count'>3</div>
              <div className='pointer' ></div>
            </div>
            <div className='step-det' >
              <h2>Track Your Car Service Real-Time</h2>
              <p>From Gomechanic's broad portfolio of services</p>
            </div>
            <div style={{width:"40%"}}>
              <img src={howMechImg.trackYourCarServiceRealTime} alt="" />
            </div>
          </div>
          <div className="d-flex">
            <div className='step-count_parent m3-rem'>
              <div className='step-count'>4</div>
            </div>
            <div className='step-det' style={{width:"65%"}}>
              <h2 >Earn While We Service </h2>
              <p >Spread the world! You get Rs.750. Your friends get Rs.750!</p>
            </div>
            <div style={{width:"40%"}}>
              <img src={howMechImg.earnWhileWeService} alt="" />
            </div>
          </div>
        </div>
        <div className='slider-parent'>
          <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{width: "52%"}}
         >
            <SwiperSlide >
              <Card style={{ width: '18rem' ,  height:'20rem', backgroundColor:"#F5EDDC"}}>
                <div className="w-100">
                  <Card.Img style={{width:"50%",margin: "2rem 0 0 4.2rem"}} variant="top" src={featureImgs.carServiced}/>
                </div>
                <Card.Body className='text-center' style={{paddingTop:"40px"}}>
                  <Card.Title style={{fontSize:"2rem"}}>2 Million+</Card.Title>
                  <p>Cars Serviced</p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: '18rem' ,  height:'20rem', backgroundColor:"#F5EDDC"}}>
                <div className='w-100'>
                  <Card.Img style={{width:"50%",margin: "2rem 0 0 4.2rem"}} variant="top" src={featureImgs.happyCustomer} />
                </div>
                <Card.Body className='text-center' style={{paddingTop:"40px"}}>
                  <Card.Title style={{fontSize:"2rem"}}>1 Million+</Card.Title>
                  <p>Happy Customers</p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: '18rem' ,  height:'20rem', backgroundColor:"#F5EDDC"}}>
                <div className="w-100">
                  <Card.Img style={{width:"50%",margin: "2rem 0 0 4.2rem"}} variant="top" src={featureImgs.ratings} />
                </div>
                <Card.Body className='text-center' style={{paddingTop:"40px"}}>
                  <Card.Title style={{fontSize:"2rem"}}>4.7 <IoIosStar /></Card.Title>
                  <p>Average Rating</p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: '18rem', height:'20rem' , backgroundColor:"#F5EDDC", margin:"auto"}}>
                <div className="w-100">
                  <Card.Img style={{width:"50%",margin: "2rem 0 0 4.2rem"}} variant="top" src={featureImgs.serviceStation} />
                </div>
                <Card.Body className='text-center' style={{paddingTop:"40px"}}>
                  <Card.Title style={{fontSize:"2rem"}}>800+</Card.Title>
                  <p>Touch Points  in India</p>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default HowMechComponent
