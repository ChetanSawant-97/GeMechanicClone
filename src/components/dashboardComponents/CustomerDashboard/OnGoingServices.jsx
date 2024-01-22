import React from 'react'
import { useState, useEffect } from 'react';
import RequestServiceForm from '../../forms/RequestServiceForm';
import { toast } from 'react-toastify';
import { useGetReqServicesQuery } from '../../../services/customerServiceDets';
import { AiOutlineCaretRight,AiOutlineCaretDown } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdPrint } from "react-icons/md";
import { serviceStatus } from '../../../assets/constants/data';

const OnGoingServices = () => {
  const { data, error, isLoading } = useGetReqServicesQuery();
  const [modalShow, setModalShow] = useState(false);
  const [requestedServiceList, setRequestedServiceList] = useState([]);
  const showSuccessMsg=()=>{
    toast.success("Service Requested !");
  } 

  const [subListIcons, setSubListIcons] = useState({});

  const openSublist=()=>{

  }



  console.log(data);  
  return (
    <div>
      <h1 className='p-4 my-3' style={{color:"rgb(95, 15, 64)"}}>On Going Services</h1>
      <div className='px-4'>
        <div className='d-flex justify-content-end'>
          <button className='btn px-4 py-2 bg-dark-subtle' onClick={()=>setModalShow(true)}>Request A Service</button>
        </div>
        <RequestServiceForm
          show={modalShow}
          onHide={() => setModalShow(false)}
          onSuccess={() => showSuccessMsg()}
        />
      </div>
      <div className='px-4 mt-4'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className='col-lg-4'><span style={{paddingLeft:"25px"}}>Service Request</span></th>
              <th scope="col" className='col-lg-2'>Request Date</th>
              <th scope="col" className='col-lg-1'>Request Status</th>
              <th scope="col" className='col-lg-3'>Expected Delivery</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map(serviceObj => (
                <tr>
                  <td scope="row"> <AiOutlineCaretRight className='pointerCursor' onClick={()=>openSublist()}/> <span style={{paddingLeft:"5px"}}>{serviceObj.serviceRequestTitle}</span></td>
                  <td>21-01-2024 22:47:00</td>
                  <td className='text-center'> <p style={{padding:"2px 5px", borderRadius:"15px", backgroundColor:"#54B435"}}>Requested</p></td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OnGoingServices
