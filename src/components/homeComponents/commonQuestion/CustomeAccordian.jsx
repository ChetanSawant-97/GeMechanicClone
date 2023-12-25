import React from 'react'
import Accordion from 'react-bootstrap/Accordion';



const CustomeAccordian = ({question, detail, count}) => {
  return (
    <Accordion.Item eventKey={count}>
        <Accordion.Header >{question}</Accordion.Header>
        <Accordion.Body>{detail}</Accordion.Body>
    </Accordion.Item>
  )
}

export default CustomeAccordian;