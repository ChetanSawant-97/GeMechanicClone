import React from 'react'
import '../../utils/reviews.css'
import { FaStar } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { moreImgs } from '../../assets/constants/ourServiceImg';


const Reviews = () => {
  return (
    <div style={{width:"100%", marginTop:"80px"}}>
      <div className='d-flex ' style={{padding:"20px 100px 0px 100px"}} >
        <div style={{width:"50%" , padding:"50px 0px"}} >
          <div className='w-100 pb-4'>
            <p className='review-header-title'>11,21,300 Car Owners Made The Smarter Choice </p>
            <p className='review-header-title'>This is thier love for Us!</p>
          </div>
          <div className='d-flex w-100'>
            <div className='w-50 d-flex'>
              <div  style={{fontSize:"2.5em", fontWeight:"700"}}> <p className='mb-0 px-2'>4.7 <span style={{fontSize:"0.5em", color:"#9e9e9e"}}>/ 5</span></p></div>
              <div className=' text-center px-2 pt-1'>
                <p style={{color:"green"}} className='mb-0'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> </p>
                <p className='mb-0' style={{fontWeight:"700",fontSize:"1.1em", color:"#9e9e9e"}}>OVERALL RATING</p>
              </div>
            </div>
            <div className='w-50 d-flex'>
              <div style={{fontSize:"2.5em"}}> <p className='mb-0 px-2'>41248</p></div>
              <div className=' text-center d-flex flex-column justify-content-center align-items-center px-2' >
                <p style={{backgroundColor:"#F4CE14", width:"90%"}} className='mb-0'> <FaRegCheckCircle className='px-2' style={{color:"black", fontSize:"2em"}} /> Verified</p>
                <p className='mb-0' style={{fontWeight:"700",fontSize:"1.1em", color:"#9e9e9e"}}>USER REVIEWS</p>
              </div>
            </div>
          </div>
          <p>Rating And Review Recieved Last 3 Months</p>
        </div>
        <div  style={{width:"50%"}}>
          <img src={moreImgs.mechanicImg} style={{width:"35%", marginLeft:"50%"}} alt="" />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Reviews
