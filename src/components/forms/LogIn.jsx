import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoCloseCircleSharp } from "react-icons/io5";
import '../../utils/form.css'

const LogIn = ({handleLogInClick}) => {
  return (
    
    <div className="login-form" >
        <IoCloseCircleSharp className='pointerCursor' style={{position:"absolute", right:"5%", top:"5%", fontSize:"2em"}} onClick={() => handleLogInClick(false)} />
        <h2 className="py-2 text-center">LogIn</h2>
        
        <div className="mb-3">
            <label for="formGroupEmail" className="form-label">Email address</label>
            <input type="email" style={{background:'black', color:'white'}} className="form-control field-focus" id="formGroupEmail" placeholder="Enter email" />
        </div>
        
        <div className="mb-3">
            <label for="formGroupPassword" className="form-label">Password</label>
            <input style={{background:'black', color:'white'}} type="password" className="form-control field-focus" id="formGroupPassword" placeholder="Password" />
        </div>

        <div className='py-3 '>
            <Button className='w-100 custom-buttun' style={{backgroundColor:"#B6BBC4"}} variant="light">Log In</Button>
        </div>
    </div>
  )
}

export default LogIn
