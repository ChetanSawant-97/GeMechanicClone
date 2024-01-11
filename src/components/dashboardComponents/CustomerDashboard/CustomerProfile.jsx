import React from 'react'
import {otherImg} from '../../../assets/constants/ourServiceImg'
import { MdEdit } from "react-icons/md";
import { useState } from 'react';


const CustomerProfile = () => {
  const [editForm, setEditForm] = useState(false);

  const handleEdit =()=>{
    setEditForm(true);
  }
  
  const updateDetails =()=>{
    setEditForm(false);
  }

  return (
    <div className='w-100'>
      <div>
        <h1 className='p-4'>Customer Profile</h1>
      </div>
      <div className='d-flex'>
        <div style={{width:'22%'}} className='d-flex flex-column'>
          <div className='w-100 d-flex justify-content-center' style={{marginTop:'48%'}}>
            <img className='w-50' sticky-bottom src={otherImg.maleProfile} alt="" />
          </div>
          <div className='pt-4 w-100 text-center'style={{color:'#647D87', fontWeight:'450', fontSize:'1.2em'}}><p className='mb-0'>sawantchetan8149@gmail.com</p></div>
          <div className='py-2 w-100 text-center'><p  className='mb-0'>Nagpur, Maharashtra , India</p></div>
          <div className='py-2 w-100 text-center'><button className='btn btn-info' onClick={handleEdit}>Edit Profile <MdEdit/></button></div>
        </div>
        <div className='d-flex justify-content-center' style={{width:'78%'}}>
          <form style={{width:'65%'}}>
            <div className="form-row d-flex justify-content-evenly">
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="inputEmail4">First Name</label>
                <input type="email" disabled={!editForm} className="form-control" />
              </div>
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="inputPassword4">Last Name</label>
                <input type="text" disabled={!editForm} className="form-control" />
              </div>
            </div>
            <div className="form-row d-flex justify-content-evenly pt-3">
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="inputEmail4">Username Or Email</label>
                <input type="email" disabled={!editForm} className="form-control"/>
              </div>
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" disabled={!editForm} className="form-control" />
              </div>
            </div>
            <fieldset className="form-group p-3">
              <div className="d-flex">
                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                <div className="col-sm-10 d-flex justify-content-between" style={{width:'20%'}}>
                  <div className="form-check">
                    <input className="form-check-input pointerCursor" disabled={!editForm} type="radio" name="gridRadios" id="genderMale" value="option1" checked />
                    <label className="form-check-label pointerCursor" for="genderMale">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input pointerCursor" disabled={!editForm} type="radio" name="gridRadios" id="genderFemale" value="option1" checked />
                    <label className="form-check-label pointerCursor" for="genderFemale">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <legend className="col-form-label col-sm-2 pt-0" style={{fontSize:'1.1em'}}>Primary Address</legend>
            <div className="form-row d-flex justify-content-evenly">
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="inputEmail4">Street 1</label>
                <input type="email" disabled={!editForm} className="form-control" />
              </div>
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="inputPassword4">Street 2</label>
                <input type="text" disabled={!editForm} className="form-control" />
              </div>
            </div>
            <div className="form-row d-flex justify-content-evenly pt-3">
              <div className="form-group col-lg-6 px-3">
                <label for="inputCity">City</label>
                <input type="text" disabled={!editForm} className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-lg-4 px-3">
                <label for="inputState">State</label>
                <select id="inputState" disabled={!editForm} className="form-control">
                  <option selected>Choose...</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="form-group col-md-2 px-3">
                <label for="inputZip">Zip</label>
                <input type="text" disabled={!editForm} className="form-control" id="inputZip" />
              </div>
            </div>
            <legend className="col-form-label col-sm-2 pt-3 ">Secondary Address</legend>
            <div className="form-row d-flex justify-content-evenly">
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="">Street 1</label>
                <input type="text" disabled={!editForm} className="form-control" />
              </div>
              <div className="form-group col-lg-6 px-3">
                <label htmlFor="inputPassword4">Street 2</label>
                <input type="text" disabled={!editForm} className="form-control" />
              </div>
            </div>
            <div className="form-row d-flex justify-content-evenly pt-3">
              <div className="form-group col-lg-6 px-3">
                <label for="inputCity">City</label>
                <input type="text" disabled={!editForm} className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-lg-4 px-3">
                <label for="inputState">State</label>
                <select id="inputState" disabled={!editForm} className="form-control">
                  <option selected>Choose...</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="form-group col-md-2 px-3">
                <label for="inputZip">Zip</label>
                <input type="text" disabled={!editForm} className="form-control" id="inputZip" />
              </div>
            </div>
            { editForm &&  <button type="submit" className="btn btn-success float-end px-4 m-3" onClick={updateDetails}>Update</button>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile
