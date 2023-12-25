import React from 'react'
import CustomeAccordian from './CustomeAccordian';  
import { faq } from '../../../assets/constants/data'
import Accordion from 'react-bootstrap/Accordion';


const CommonQuestion = () => {
  return (
    <div className='home-components' style={{marginTop:"40px"}}>
      <h1 className='home-component-title'>Common Car Service Question In Nagpur</h1>
      <Accordion>
        {faq.map((faqItem, index) => (
          <CustomeAccordian key={index} question={faqItem.que} detail={faqItem.det} count={index} />
        ))}
      </Accordion>
    </div>
  )
}

export default CommonQuestion;
