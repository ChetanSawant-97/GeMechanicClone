import React from 'react'
import styles from '../../utils/form.module.css';
import { IoStar } from "react-icons/io5";

const EnquiryForm = () => {
    return (
        <div className={`${styles["enquiry-form"]} container`} >
            <div className="row">
                <div className="mx-auto">
                    <div className="card mt-2 p-4 bg-light">
                        <div className=" text-left py-3">
                            <h1 >Experience the best car service in your town</h1>
                        </div>

                        <div className=" text-left">
                            <p style={{ fontSize: "1.4rem" }} >Get instant Quotes For Your Car Service</p>
                        </div>


                        <div className="bg-light">
                            <div className="container">
                                <form id="contact-form" role="form">
                                    <div className="controls">
                                        <div className="row pb-3">
                                            <div className="form-group">
                                                <select style={{ height: "50px" }} id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                                    <option defaultValue={''}>Select Your Car Brand</option>
                                                    <option value={"HONDA"} >HONDA</option>
                                                    <option value={"MARUTI SUZUKI"} >MARUTI SUZUKI</option>
                                                    <option value={"TATA"} >TATA</option>
                                                    <option value={"BMW"} >BMW</option>
                                                    <option value={"MERCEDES"} >MERCEDES</option>
                                                    <option value={"NISSAN"} >NISSAN</option>
                                                    <option value={"RENAULT"} >RENAULT</option>
                                                    <option value={"VOLKSWAGON"} >VOLKSWAGON</option>
                                                    <option value={"FORD"} >FORD</option>
                                                    <option value={"MAHINDRA"} >MAHINDRA</option>
                                                    <option value={"DATSUN"} >DATSUN</option>
                                                    <option value={"CHEVEROLET"} >CHEVEROLET</option>
                                                    <option value={"HYUNDAI"} >HYUNDAI</option>
                                                    <option value={"SKODA"} >SKODA</option>
                                                    <option value={"TOYOTA"} >TOYOTA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group">
                                                <input style={{ height: "50px" }} id="form_name" type="text" className="form-control" placeholder="ENTER MOBILE NUMBER*" required="required" data-error="Firstname is required." />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className='mt-4'>
                                                <button type="submit" className={`${styles["check-price-but"]}`} value="" >Check Price For Free</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 border-box"  style={{paddingTop:"12px"}}>
                                                <div  style={{color:"green"}} className="d-flex justify-content-center  align-items-center">
                                                    <IoStar style={{fontSize :"1.8rem"}} />
                                                    <div className="px-2 fw-bold">
                                                        <span style={{fontSize:"1.8rem"}}>4.7/</span>
                                                        <span className="_1pMok">5</span>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <div className="px-2 text-center"  style={{width:"80%"}}>
                                                        <p >Based on 100000+ Reviews</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" style={{paddingTop:"12px"}}>
                                                 <div className="d-flex justify-content-center align-items-center">
                                                    <div className="px-2 fw-bold text-center">
                                                        <p style={{ fontSize: "1.8rem", margin: 0 }}>2,50,000+</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <div className="px-2 text-center"  style={{width:"50%"}}>
                                                        <p >Happy Customers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnquiryForm;
