import React from 'react'
import {moreImgs} from '../../assets/constants/ourServiceImg'
import CustomeAccordian from '../homeComponents/commonQuestion/CustomeAccordian'
import { moreFaq } from '../../assets/constants/data'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className='d-flex flex-column' style={{ position: "relative", marginTop:"78px", padding:"30px 70px 70px 70px" , boxSizing:'border-box' }}>
      <div className='w-100'>
        <p style={{fontSize:'2.5em', fontWeight:'500'}}>Frequently Asked Questions</p>
      </div>
      <div className='w-100 d-flex'>
        <div style={{width:"80%"}} >
          <Accordion>
            {moreFaq.map((faqItem, index) => (
                <CustomeAccordian key={index} question={faqItem.que} detail={faqItem.ans} count={index} />
              ))}
          </Accordion>
        </div>
        <div style={{width:"20%"}}>
          <img style={{width:"100%"}} src={moreImgs.faqImg} alt="" />
        </div>
      </div>

    </div>
  )
}

export default FAQ
