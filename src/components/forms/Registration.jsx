import React, { useReducer, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoCloseCircleSharp } from "react-icons/io5";
import '../../utils/form.css'
import { FaAsterisk } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRegisterUserMutation } from '../../services/customerService';
import {checkValidEmail,checkValidPassword} from '../../utils/utilities/common'


const Registration = ({handleRegClick}) => {
  const [registerUser, { data, error, isLoading }] = useRegisterUserMutation();

  const initialFormData = {
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : '',
    password : '',
  }

  const closeFormClearFormFields = () => {
    setFormData((prevData) => ({
      ...prevData,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
    }));        
    handleRegClick(false);
  }
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) =>{
    const {name , value } = e.target;
    setFormData((prevData) => ({
        ...prevData, 
        [name]: value,
    }))
  }

  const handleRegistration =async () => {
    if (validateFormData(formData)) {
      try {
        const response = await registerUser(formData);
        console.log("RESPONSE", response);
          toast.success("Registration Successful !");
          closeFormClearFormFields();
    } catch (error) {
        toast.error('Registration Failed');
        console.error(error);
      }
    }
  };

  const validateFormData = (formData) => {
    let toastWarningMsg = '';
    if(!checkValidEmail(formData.email)){
      toast.warning("Provide Valid Email Address !");
      return false;
    }else if(!checkValidPassword(formData.password)){
      toast.warning("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit");
      return false;
    }else if(formData.firstName===''){
      toast.warning("First Name Cannot Be Empty !");
      return false;
    }else if(formData.lastName===''){
      toast.warning("Last Name Cannot Be Empty !");
      return false;
    }else{
      return true;
    }
  };


  return (
        <div className="reg-form">
            <IoCloseCircleSharp className='pointerCursor' style={{position:"absolute", right:"3%", top:"3%", fontSize:"2em"}} onClick={closeFormClearFormFields} />
            <h2 className="py-2 text-center">Registration</h2>
            
            <div className="d-flex w-100 mb-3">
                <div style={{width:"25%"}}>
                    <p style={{fontSize:"1.2em"}}>Full Name <span><FaAsterisk style={{color:'red',fontSize:"0.4em", marginBottom:"14px"}}/> </span></p>
                </div>
                <div className='d-flex' style={{width:"75%"}}>
                    <div className="w-50 mx-2">
                        <input type="text" style={{background:'black', color:'white'}} value={formData.firstName} onChange={handleChange} name='firstName' className="form-control reg-focus" />
                        <label for="formGroupEmail" style={{color:"#B6BBC4", paddingLeft:"2px"}} className="form-label">First Name</label>
                    </div>
                    <div className="w-50 mx-2">
                        <input type="text" style={{background:'black', color:'white'}} value={formData.lastName} onChange={handleChange} name='lastName' className="form-control reg-focus"  />
                        <label for="formGroupEmail" style={{color:"#B6BBC4", paddingLeft:"2px"}} className="form-label">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="d-flex w-100 mb-3">
                <div style={{width:"25%"}}>
                    <p style={{fontSize:"1.2em"}}>Email <span><FaAsterisk style={{color:'red',fontSize:"0.4em", marginBottom:"14px"}}/> </span></p>
                </div>
                <div className='d-flex' style={{width:"75%"}} >
                    <div className="w-100 mx-2">
                        <input style={{background:'black', color:'white'}} type="email" value={formData.email} onChange={handleChange} name='email' className="form-control reg-focus" placeholder="ex: example@exaple.com" />
                        <label style={{color:"#B6BBC4", paddingLeft:"2px"}} htmlFor="formGroupPassword" className="form-label">example@exaple.com</label>
                    </div>
                </div>
            </div>
            <div className="d-flex w-100 mb-3">
                <div style={{width:"25%"}}>
                    <p style={{fontSize:"1.2em"}}>Phone Number </p>
                </div>
                <div className='d-flex' style={{width:"75%"}} >
                    <div className="w-100 mx-2">
                        <input style={{background:'black', color:'white'}} type="text" value={formData.phoneNumber} onChange={handleChange} name='phoneNumber' className="form-control reg-focus" placeholder="phone number" />
                    </div>
                </div>
            </div>
            <div className="d-flex w-100 mb-3">
                <div style={{width:"25%"}}>
                    <p style={{fontSize:"1.2em"}}>Password <span><FaAsterisk style={{color:'red',fontSize:"0.4em", marginBottom:"14px"}}/> </span></p>
                </div>
                <div className='d-flex' style={{width:"75%"}} >
                    <div className="w-100 mx-2">
                        <input style={{background:'black', color:'white'}} type="password" value={formData.password} onChange={handleChange} name='password' className="form-control reg-focus" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className='py-3 '>
                <Button className='w-100 custom-buttun' style={{backgroundColor:"#B6BBC4"}} onClick={handleRegistration} variant="light" >Registration</Button>
            </div>
        </div>
    
    
  )
}

export default Registration
