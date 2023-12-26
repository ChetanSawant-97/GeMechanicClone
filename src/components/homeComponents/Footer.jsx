import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter  } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import { BsInstagram,BsWhatsapp  } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import {downloadsImg} from '../../assets/constants/ourServiceImg'
import '../../utils/footer.css'


const Footer = () => {
  return (
    <div className='d-flex w-100 p-4 footer-parent' style={{backgroundColor:"#191717", color:"white"}}>
      <div className="d-flex w-100 footer-sub">
        <div className="footer-sub-add" >
            <p className='py-2'><IoCarSportOutline style={{ fontSize: '3rem' }}  /> <span style={{fontSize:"1.5rem", fontWeight:"700", paddingLeft:"12px"}}>GoMechanic</span></p>
            <p className='footer-add-det py-2'>7th Floor, Tower b , Novin Tech Park, Gurgaon Road, Block D, Sector 28, Gurugram, Haryana 122020</p>
            <div className='footer-add-det py-2'> <FaFacebookF style={{fontSize:"1.5em", marginRight:"12px"}} /> <FaTwitter style={{fontSize:"1.5em", marginRight:"12px"}} /> <BsInstagram style={{fontSize:"1.5em",  marginRight:"12px"}}/> <BsWhatsapp style={{fontSize:"1.5em",  marginRight:"12px"}} /> <ImYoutube style={{fontSize:"1.5em", marginRight:"12px"}} />  </div>
        </div>
        <div className="footer-sub-det" >
          <div >
              <div className='p-2'> < MdOutlineMail style={{fontSize:"1.5rem"}} /> <span style={{paddingLeft:"8px"}}>Email</span></div>
              <div className='p-2' > <FaPhoneAlt style={{fontSize:"1.5rem"}}/> <span style={{paddingLeft:"8px"}}>Phone Number</span></div>
              <div className='p-2' > <IoCalendarNumber style={{fontSize:"1.5rem"}} /> <span style={{paddingLeft:"8px"}}>Working Days</span></div>
              <div className='p-2' > <LuClock9 style={{fontSize:"1.5rem"}}/> <span style={{paddingLeft:"8px"}}>Working Hours</span></div>
          </div>
          <div>
              <div className='p-2'> <a hrea={""}>info@goMechanic.in</a> </div>
              <div className='p-2'>9999999999 </div>
              <div className='p-2'>Monday - Sunday </div>
              <div className='p-2'>7.00AM - 9.00PM </div>
          </div>
        </div>
        <div className="footer-sub-det" >
          <div className='w-100'> <img style={{width:"60%" ,margin:"auto"}} src={downloadsImg.playstore} alt="" /> </div>
          <div className='w-100 mt-3'> <img style={{width:"60%", margin:"auto"}} className='w-80' src={downloadsImg.appstore} alt="" /></div>
        </div>
      </div>
      <div className="footer-copyright">
        <p > <FaRegCopyright />  2016-2023 Service Easy Technology Private Limited</p>
      </div>
    </div>
  )
}

export default Footer
50