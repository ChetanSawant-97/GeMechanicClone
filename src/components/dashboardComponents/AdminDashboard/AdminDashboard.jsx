import React from 'react'
import { useEffect, useState } from 'react';
import { GrServices } from "react-icons/gr";
import { TfiAgenda } from "react-icons/tfi";
import ServiceMaster from './ServiceMaster';
import { RxDashboard } from "react-icons/rx";
import ServiceRequestList from './ServiceRequestList';
import Dashboard from '../CustomerDashboard/Dashboard'
import { useGetServiceDetQuery } from '../../../services/serviceMaster';
import '../../../utils/adminDashboard.css';


const AdminDashboard = () => {
  const { data, error, isLoading } = useGetServiceDetQuery();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          setServicesList(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [data]);

  const username = sessionStorage.getItem('userName');
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach((tooltip) => {
      new window.bootstrap.Tooltip(tooltip);
    });
  }, []);

  const [selectedTab, useSelectedTab] = useState("DASHBOARD");
  return (
    <div className='d-flex w-100 align-content-center position-relative' style={{height:'calc(100vh - 75px)'}} >
      <div className='h-100 d-flex flex-column justify-content-around align-content-center' style={{width:'4%', background:'#5F0F40'}}>
        <div className='w-100 d-flex flex-column justify-content-around ' style={{height:'50%'}}>
          <div className={`text-white w-100 ${selectedTab=='DASHBOARD'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="Dashboard" onClick={()=> {useSelectedTab('DASHBOARD')}}> <RxDashboard style={{fontSize:'2.5em', cursor:'pointer', width:'100%'}}/></div>
          <div className={`text-white w-100 ${selectedTab=='SERVICEREQUEST'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="OnGoing Services" onClick={()=> {useSelectedTab('SERVICEREQUEST')}}> <TfiAgenda style={{fontSize:'2.5em', cursor:'pointer', width:'100%'}}/></div>
          <div className={`text-white w-100 ${selectedTab=='SERVICEMASTER'?'bg-dark':''}`} style={{padding:'10px'}} data-toggle="tooltip" data-placement="right" title="Service Master" onClick={()=> {useSelectedTab('SERVICEMASTER')}}> <GrServices style={{fontSize:'2.5em', cursor:'pointer', width:'100%'}}/></div>
        </div>
      </div>
      <div className='h-100' style={{width:'96%'}}>
          {selectedTab === 'DASHBOARD' && <Dashboard /> }
          {selectedTab === 'SERVICEMASTER' && <ServiceMaster serviceMasterList = {servicesList} setServiceList = {setServicesList} /> }
          {selectedTab === 'SERVICEREQUEST' && <ServiceRequestList />}
      </div>
    </div>
  )
}

export default AdminDashboard
