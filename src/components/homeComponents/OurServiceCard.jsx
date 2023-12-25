import React from 'react'
import"../../utils/ourServices.css"


const OurServiceCard = ({serviceTitle, serviceImg}) => {
  return (
    <div className="card cust-card" >
      <img style={{width:"80%", margin:"auto"}} src={serviceImg} className="card-img-top" alt="Image Alt Text"/>
      <div className="card-body text-center">
        <h5 style={{fontSize:"1rem"}} className="card-title">{serviceTitle}</h5>
      </div>
    </div>
  )
}

export default OurServiceCard
