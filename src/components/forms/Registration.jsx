import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoCloseCircleSharp } from "react-icons/io5";
import '../../utils/form.css'
import { FaAsterisk } from "react-icons/fa";

const Registration = ({handleRegClick}) => {
  return (
    <div className="container" style={{width: "40vw", color: "white", backgroundColor: "rgba(255, 255, 255, 0.2)", padding: "15px 30px", height: "55vh", borderRadius: "20px", position: "relative"}}>
        <IoCloseCircleSharp className='pointerCursor' style={{position:"absolute", right:"3%", top:"3%", fontSize:"2em"}} onClick={() => handleRegClick(false)} />
        <h2 className="py-2 text-center">Registration</h2>
        
        <div className="d-flex w-100 mb-3">
            <div style={{width:"25%"}}>
                <p style={{fontSize:"1.2em"}}>Full Name <span><FaAsterisk style={{color:'red',fontSize:"0.4em", marginBottom:"14px"}}/> </span></p>
            </div>
            <div className='d-flex' style={{width:"75%"}}>
                <div className="w-50 mx-2">
                    <input type="email" style={{background:'black', color:'white'}} className="form-control reg-focus" />
                    <label for="formGroupEmail" style={{color:"#B6BBC4", paddingLeft:"2px"}} className="form-label">First Name</label>
                </div>
                <div className="w-50 mx-2">
                    <input type="email" style={{background:'black', color:'white'}} className="form-control reg-focus" />
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
                    <input style={{background:'black', color:'white'}} type="email" className="form-control reg-focus" placeholder="ex: example@exaple.com" />
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
                    <input style={{background:'black', color:'white'}} type="text" className="form-control reg-focus" placeholder="phone number" />
                </div>
            </div>
        </div>
        <div className="d-flex w-100 mb-3">
            <div style={{width:"25%"}}>
                <p style={{fontSize:"1.2em"}}>Password <span><FaAsterisk style={{color:'red',fontSize:"0.4em", marginBottom:"14px"}}/> </span></p>
            </div>
            <div className='d-flex' style={{width:"75%"}} >
                <div className="w-100 mx-2">
                    <input style={{background:'black', color:'white'}} type="text" className="form-control reg-focus" placeholder="password" />
                </div>
            </div>
        </div>
        

        <div className='py-3 '>
            <Button className='w-100 custom-buttun' style={{backgroundColor:"#B6BBC4"}} variant="light">Registration</Button>
        </div>
    </div>
  )
}

export default Registration
