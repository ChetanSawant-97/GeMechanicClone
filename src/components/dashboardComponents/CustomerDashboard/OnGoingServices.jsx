import React from 'react'
import { useState } from 'react';
import RequestServiceForm from '../../forms/RequestServiceForm';
import { toast } from 'react-toastify';


const OnGoingServices = () => {
  const [modalShow, setModalShow] = useState(false);

  const showSuccessMsg=()=>{
    toast.success("Service Requested !");
  }
  
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
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OnGoingServices
