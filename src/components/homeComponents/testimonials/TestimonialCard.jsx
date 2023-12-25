import React from 'react'
import Card from 'react-bootstrap/Card';
import {socialsLogo} from '../../../assets/constants/ourServiceImg'
import { BsQuote } from "react-icons/bs";
import '../../../utils/testimonials.css';




const TestimonialCard = ({ testimonial }) => {
    const { title, desc, customerName, workshopName, social } = testimonial;


    return (
    <div style={{padding:"15px 10px", position:"relative" }}>
        <Card className='testimonial-card' style={{backgroundColor:"#D2E9E9"}}>
            <Card.Body>
                <BsQuote className='quote-icon' />
                <Card.Title className='testimonial-card-title text-center'>{title}</Card.Title>
                <Card.Text className='testimonial-card-desc'>{desc}</Card.Text>
                <div className='d-flex'>
                    <div style={{width:"20%"}}>
                        {social==='Google' && <img className='w-50' src={socialsLogo.google} alt="" />}
                        {social==='Facebook' && <img className='w-50' src={socialsLogo.facebook} alt="" />}
                        {social==='Twitter' && <img className='w-50' src={socialsLogo.twitter} alt="" />}
                    </div>
                    <div style={{widows:"80%"}}>
                        <h4 style={{marginBottom:"0"}}>{customerName}</h4>
                        <p>{social}</p>
                    </div>
                </div>
                <div>
                    <p style={{marginBottom:"0"}}>Workshop Name</p>
                    <h6>{workshopName}</h6>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default TestimonialCard
