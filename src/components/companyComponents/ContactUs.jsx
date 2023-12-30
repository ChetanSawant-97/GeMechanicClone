import React from 'react'
import {moreImgs} from '../../assets/constants/ourServiceImg'
import Card from 'react-bootstrap/Card';

const ContactUs = () => {
  return (
    <div className='d-flex w-100' style={{width:"20%", marginTop:"78px"}}>
      <div className="d-flex justify-content-center align-content-center" style={{width:"20%"}}>
        <h1>Leave us a message!</h1>
      </div>
      <div className="d-flex p-4" style={{width:"60%"}}>
        <div className='d-flex flex-column' style={{width:"50%"}}>
          <div className='d-flex flex-column w-100 py-2'>
            <Card style={{ width: '100%', height:"25vh",boxShadow:" 5px 5px 10px rgba(0, 0, 0, 0.4)" }}>
              <Card.Body className='d-flex '>
                <div className='contact-card-det d-flex flex-column justify-content-center align-items-center' style={{width:"60%"}}>
                  <p className='px-1'>Helpline Number</p>
                  <p className='px-1'>9999999999</p>
                </div>
                <div style={{width:"40%", position:'relative'}}>
                  <img src={moreImgs.callImg} alt="" style={{position:'absolute', width:"280px", right:"-42%", top:"6%"}} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='d-flex flex-column w-100 py-2' >
            <Card style={{ width: '100%', height:"25vh",boxShadow:" 5px 5px 10px rgba(0, 0, 0, 0.4)" }}>
              <Card.Body className='d-flex '>
                <div className='contact-card-det d-flex flex-column justify-content-center align-items-center' style={{width:"60%"}}>
                  <p className='px-1'>Email</p>
                  <p  style={{color:"#607274"}}>Customer Support : <span style={{color:"#B31312"}}>sawantchiku8149@gmail.com</span> </p>
                </div>
                <div style={{width:"40%", position:'relative'}}> 
                  <img src={moreImgs.emailImg} alt="" style={{width:"280px",position:"absolute", right: "0%", bottom: "0%"}} />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{width:"50%", padding:"15px 0px 15px 30px"}}>
          <Card style={{ width: '100%', height:"50vh",boxShadow:" 5px 5px 10px rgba(0, 0, 0, 0.4)" }}>
            <Card.Body className='d-flex flex-column'>
              <div className='contact-card-det d-flex flex-column ' style={{width:"100%", height:"60%"}}>
                <p className='px-1'>Corporate Office Address</p>
                <p  style={{color:"#607274", fontWeight:"400"}}>7th Floor, Tower b , Novin Tech Park, Gurgaon Road, Block D, Sector 28, Gurugram, Haryana 122020 </p>
              </div>
              <div style={{width:"100%", height:"40%", position:'relative'}}> 
                <img src={moreImgs.officeImg} alt="" style={{width:"100%",position:"absolute",bottom:"0%"}} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="d-flex" style={{width:"20%"}}></div>
    </div>
  )
}

export default ContactUs
