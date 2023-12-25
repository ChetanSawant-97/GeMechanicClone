import React from 'react'

const CustomServiceCard = ({serviceImg, serviceTitle}) => {
  return (
      <div className="card cust-service-card" >
        <img style={{width:"60%", margin:"auto"}} src={serviceImg} className="card-img-top" alt="Image Alt Text"/>
        <div className="card-body text-center">
            <h5 style={{fontSize:"1rem"}} className="card-title">{serviceTitle}</h5>
        </div>
      </div>
    
  )
}

export default CustomServiceCard
