import React from 'react'
import backgroundImage from '../../assets/home2.jpg';
import EnquiryForm from '../forms/EnquiryForm';

const WelcomeComponent = () => {
  return (
   <div style={{ height: "90vh", position: "relative", marginTop:"83px" }}>
      {/* Background image container with brightness filter */}
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          filter: "brightness(0.5)",
        }}
      ></div>

      {/* EnquiryForm container */}
      <div className='enquiry-form-parent' style={{ position: "absolute", zIndex: 1, top:"5vh", right:"43vw", width:"30%" }}>
        <EnquiryForm />
      </div>
    </div>
  )
}

export default WelcomeComponent
