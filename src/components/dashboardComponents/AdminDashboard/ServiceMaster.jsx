import React, { useState } from 'react'
import { useAddOrUpdateServiceMutation, useDeleteServiceMutation } from '../../../services/serviceMaster';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaRupeeSignSolid } from "react-icons/lia";
import ReactPaginate from 'react-paginate';
import "../../../utils/pagination.css"
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';


const ServiceMaster = ({serviceMasterList, setServiceList}) => {
  const [deleteService, { isLoading, isError }] = useDeleteServiceMutation();

  const deleteServiceFun = async (serviceMasterId) => {
    try {
      console.log(serviceMasterId);
      const result = await deleteService(serviceMasterId);
      setServiceList(result.data);
      toast.success("Deleted Successfully !");
      console.log(result);
    } catch (error) {
      console.error("Error Occured WHile Deleting Service");
    }
  };

    //Pagination Functions
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 7;
    const currentServiceList = serviceMasterList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(serviceMasterList.length / 7);
    
    const handlePageClick=(event)=>{
      const newOffset = (event.selected * 7) % serviceMasterList.length;
      setItemOffset(newOffset);
    }
    const [addOrUpdateService, { newData, saveError, isSaveLoading }] = useAddOrUpdateServiceMutation();
    const initialFormDate = {
      serviceMasterId : '' ,
      serviceName: '',
      description: '',
      serviceRate: '',
      expectedTime:'',
    }

    const [formFields, setFormFields] = useState(initialFormDate);
                                        
    const handleDeleteService =(serviceMasterId)=>{
      console.log(serviceMasterId);  
      confirmAlert({
        message: 'Are you sure you want to delete this ?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => deleteServiceFun(serviceMasterId)
          },
          {
            label: 'No',
            onClick: () => console.log('CLICKED NO')
          }
        ]
      });
    }

    const handleEditService =(serviceMasterId)=>{
      const serviceObject = serviceMasterList.find(service => service.serviceId === serviceMasterId);
      if (serviceObject) {
        setFormFields(serviceObject);
      } else {
        console.log('Service not found');
      }
    }

    const saveOrUpdateService=async()=>{
      try {
        const response = await addOrUpdateService(formFields);
        setServiceList(response.data);
        setFormFields(initialFormDate);
        toast.success("Saved Successfully !");
      } catch (error) {
        toast.error('Login Failed !');
      }
    }

    const handleOnChange =(event)=>{
      const { id, value } = event.target;
      setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [id]: value,
      }));
      console.log(formFields);
    }


  return (
    <>
      <div className='w-100 px-3'>
      <h1 className='py-3' style={{color:"#5F0F40", fontWeight:"600"}}>Service Master</h1>
      <div className="d-flex justify-content-between w-100 p-3 pb-4" style={{ borderBottom:"1px solid #5F0F40", borderRadius:"15px", backgroundColor:"#F5F5F5"}}>
        <input type="hidden" class="form-control" id="serviceMasterId" value={formFields.serviceMasterId} required />
        <div class="col-md-3 p-1">
            <label for="validationCustom01" class="form-label">Service Name</label>
            <input type="text" class="form-control" id="serviceName" value={formFields.serviceName} required onChange={handleOnChange} />
        </div>
        <div class="col-md-1 p-1">
            <label for="validationCustom01" class="form-label">Expected Time</label>
            <div class='d-flex align-items-center'>
                <input type="text" class="form-control w-75" id="expectedTime" maxLength="2" value={formFields.expectedTime} required onChange={handleOnChange}/>
                <p className='align-self-center m-2'>Hrs</p>
            </div>
        </div>
        <div class="col-lg-1 p-1 mx-1">
            <label for="validationCustom02" class="form-label">Price</label>
            <div class='d-flex align-items-center'>
                <input type="text" class="form-control w-75" id="serviceRate" value={formFields.serviceRate} required onChange={handleOnChange}/>
                <FaIndianRupeeSign className='align-self-center m-2'></FaIndianRupeeSign>
            </div>
        </div>
        <div class="col-lg-4 p-1">
            <label for="validationCustom02" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" value={formFields.description} required onChange={handleOnChange} />
        </div>
        <div className='col-lg-2 d-flex justify-content-around p-4 '>
            <button type="button" class="btn btn-success px-4" onClick={()=>saveOrUpdateService()}>Save</button>
            <button type="button" class="btn btn-secondary px-4" onClick={()=>setFormFields(initialFormDate)}>Reset</button>
        </div>
      </div>


      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col" style={{width:"4%"}} >Sr No</th>
            <th scope="col" style={{width:"23%"}}>Service Name</th>
            <th scope="col" style={{width:"8%"}}>Expected Time</th>
            <th scope="col" style={{width:"8%"}}>Price</th>
            <th scope="col" style={{width:"45%"}}>Description</th>
            <th scope="col" >Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentServiceList.map((service, index) => (
            <tr key={index}>
              <td scope="row" style={{ width: '4%' }}>{index + 1}</td>
              <td style={{ width: '23%' }}>{service.serviceName}</td>
              <td style={{ width: '11%' }}>{service.expectedTime}</td>
              <td style={{ width: '10%' }}>{service.serviceRate} <LiaRupeeSignSolid /> </td>
              <td style={{ width: '40%' }}>{service.description}</td>
              <td className='d-flex justify-content-around'>
                <button className='btn' style={{ backgroundColor: '#424769', color: 'white' }} onClick={()=>handleEditService(service.serviceId)}>
                   <span style={{ marginLeft: '5px' }}><MdEdit /></span>
                </button>
                <button className='btn' style={{ backgroundColor: '#C70039', color: 'white' }} onClick={()=>handleDeleteService(service.serviceId)}>
                   <span><RiDeleteBin6Line /></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="py-4 d-flex justify-content-center position-absolute" style={{bottom:"0", left:"45%", transform:" translateX(-50%)"}}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="prev"
        renderOnZeroPageCount={null}
      />
    </div>
    </>
  )
}

export default ServiceMaster
