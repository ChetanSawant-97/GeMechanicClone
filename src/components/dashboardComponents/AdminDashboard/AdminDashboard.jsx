import React from 'react'
import { IoCarSportOutline } from "react-icons/io5";

const AdminDashboard = () => {
  return (
    <div className='d-flex w-100' style={{height:'calc(100vh - 75px)'}} >
      <div className='h-100' style={{width:'3%', background:'#511281'}}>
        <div className='text-white'> <IoCarSportOutline/> Pro</div>
        <div className='text-white'> <IoCarSportOutline/> Req</div>
        <div className='text-white'> <IoCarSportOutline/> Veh</div>
        <div className='text-white'> <IoCarSportOutline/> Tran</div>
      </div>
      <div></div>
    </div>
  )
}

export default AdminDashboard
