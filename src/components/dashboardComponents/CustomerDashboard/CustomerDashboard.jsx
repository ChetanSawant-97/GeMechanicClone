import React, { useEffect } from 'react';
import { useState } from 'react';
import CustomerProfile from './CustomerProfile';
import OnGoingServices from './OnGoingServices';
import VehicleDetails from './VehicleDetails';
import Dashboard from './Dashboard';
import TransactionHistory from './TransactionHistory';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiMechanicGarage } from "react-icons/gi";
import { IoIosCar } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useGetUserQuery } from '../../../services/customerService';


const CustomerDashboard = () => {
  const username = sessionStorage.getItem('userName');
  const { data, error, isLoading } = useGetUserQuery(username);

  console.log(data);
  console.log(error);


  useEffect(() => {
    const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach((tooltip) => {
      new window.bootstrap.Tooltip(tooltip);
    });
  
  }, []);

  const [selectedTab, useSelectedTab] = useState("DASHBOARD");
  return (
    <div className='d-flex w-100 align-content-center' style={{height:'calc(100vh - 75px)'}} >
      <div className='h-100 d-flex flex-column justify-content-around align-content-center' style={{width:'4%', background:'#5F0F40'}}>
        <div className='w-100 d-flex flex-column justify-content-around ' style={{height:'50%'}}>
          <div className={`text-white w-100 ${selectedTab=='DASHBOARD'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="Dashboard" onClick={()=> {useSelectedTab('DASHBOARD')}}> <RxDashboard style={{fontSize:'2.5em', cursor:'pointer', width:'100%'}}/></div>
          <div className={`text-white w-100 ${selectedTab=='PROFILE'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="Profile Summary" onClick={()=> {useSelectedTab('PROFILE')}}> <BsFillPersonLinesFill style={{fontSize:'2.5em', cursor:'pointer', width:'100%'}}/></div>
          <div className={`text-white w-100 ${selectedTab=='SERVICES'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="OnGoing Services" onClick={()=> {useSelectedTab('SERVICES')}}> <GiMechanicGarage style={{fontSize:'2.5em', cursor:'pointer', width:'100%'}}/></div>
          <div className={`text-white w-100 ${selectedTab=='VEHICLE'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="Vehicles Owned" onClick={()=> {useSelectedTab('VEHICLE')}}> <IoIosCar style={{fontSize:'2.5em', cursor:'pointer', width:'100%'}}/></div>
          <div className={`text-white w-100 ${selectedTab=='HISTORY'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="Transactions" onClick={()=> {useSelectedTab('HISTORY')}}> <FaHistory style={{fontSize:'2.5em', cursor:'pointer',width:'100%'}}/></div>
        </div>
      </div>
      <div className='h-100' style={{width:'96%'}}>
          {selectedTab === 'DASHBOARD' && <Dashboard /> }
          {selectedTab === 'PROFILE' && <CustomerProfile /> }
          {selectedTab === 'SERVICES' && <OnGoingServices/>}
          {selectedTab === 'VEHICLE' && <VehicleDetails/>}
          {selectedTab === 'HISTORY' && <TransactionHistory/>}
      </div>
    </div>
  )
}

export default CustomerDashboard
