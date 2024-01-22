import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useGetServiceDetQuery } from '../../services/serviceMaster';
import { useState,useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import '../../utils/datePicker.css';
import ImageUploader from '../commonComponents/ImageUploader';
import {readFileAsDataURL} from '../../utils/utilities/common';
import { useRequestServiceMutation } from '../../services/customerServiceDets';
import { toast } from 'react-toastify';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();



const RequestServiceForm = (props) => {
    const { data, error, isLoading } = useGetServiceDetQuery();
    const [requestService, { requestServData, ReqServError, reqServIsLoading }] = useRequestServiceMutation();
    const [serviceList, setServiceList] = useState([]);
    const [requestFormData, setRequestFormData] = useState({});
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [pickupDate, onChange] = useState(new Date());

    const serviceListForSelect = serviceList.map(({ serviceId, serviceName }) => ({
      value: serviceId,
      label: serviceName
    }));

    useEffect(() => {
      const fetchData = async () => {
        try {
          if (data) {
            setServiceList(data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [data]);


    const closeFormAndResetData=()=>{
      setSelectedImages([]);
      setRequestFormData({});
      setSelectedServices([]);
      props.onHide();
      props.onSuccess();
      onChange(new Date());
    }

    const onServiceSelect = (selected) => {
      if (selected.length <= 4) {
        setSelectedServices(selected);
      }
    };

    const onFormDataChange=(event)=>{
      let elementId = event.target.id;
      let elementValue = event.target.value;
      if(event.target.type == 'radio'){
        elementId = 'isPickupAndDropRequested';
        elementValue = Boolean(event.target.value);
      }
      const updatedFormData = {
        ...requestFormData,
        [elementId] : elementValue,
      }
      setRequestFormData(updatedFormData);
    }

    const onSubmitRequest =async()=>{
      const serviceDescImages = await Promise.all(
        selectedImages.map(async (file) => {
          const base64String = await readFileAsDataURL(file);
          return {
            imgName: file.name,
            base64String: base64String,
          };
        })
      );
    
      const updatedFormData = {
        ...requestFormData,
        selectedServices : selectedServices,
        pickupDateAndTime : pickupDate,
        serviceDescImages : serviceDescImages,
      }
      try {
        const response = await requestService(updatedFormData);
        console.log(response);
      } catch (error) {
        toast.error('Requesting Service Failed');
      }
      closeFormAndResetData();
    }

    const onDrop = (acceptedFiles) => {
      if (selectedImages.length + acceptedFiles.length > 4) {
          alert('You can upload a maximum of 4 images.');
          return;
      }
      setSelectedImages([...selectedImages, ...acceptedFiles]);
    };
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Request a Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div className="d-flex w-100">
                <div className="mb-3 w-50 px-2">
                    <label for="serviceRequestTitle" className="form-label" >Request Title</label>
                    <input type="text" className="form-control" id="serviceRequestTitle" onChange={onFormDataChange} />
                </div>
                <div className="mb-3 w-50 px-2">
                  <label htmlFor="serviceName">Type Of Service</label>
                  <Select
                    style={{padding:"0.375rem 0.75rem"}}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    maxMenuHeight={100}
                    value={selectedServices}
                    isMulti
                    onChange={onServiceSelect}
                    options={serviceListForSelect}
                    placeholder="Select up to 4 options"
                  />
                </div>
            </div>
            <div className="mb-3">
                <label for="" className="form-label">Description Of Service</label>
                <textarea className="form-control" aria-label="With textarea" id="serviceDescription" onChange={onFormDataChange}></textarea>
            </div>
            <div className='w-100 d-flex '>
                <div className='w-50'>
                    <label for="" className="form-label m-2">pick up and drop ?</label>
                    <div className="form-check form-check-inline m-2">
                        <input className="form-check-input" type="radio" name="isPickupAndDropRequested" id="pickupRequested" value="true" onClick={onFormDataChange}/>
                        <label className="form-check-label" for="pickupRequested">Yes</label>
                    </div>
                    <div className="form-check form-check-inline m-2">
                        <input className="form-check-input" type="radio" name="isPickupAndDropRequested" id="pickupNotRequested" value="false" onClick={onFormDataChange}/>
                        <label className="form-check-label" for="pickupNotRequested">No</label>
                    </div>
                </div>
                <div className="w-50 d-flex justify-content-between">
                    <label for="" className="form-label m-2">Time For Pickup</label>
                    <DateTimePicker
                        onChange={onChange}
                        value={pickupDate}
                        calendarIcon={true}
                        clockIcon={true}
                        className="dark-mode-container"
                    />
                </div>
            </div>
            <div className="mb-3">
                <ImageUploader setSelectedImages = {setSelectedImages} onDrop={onDrop} selectedImages={selectedImages}/>
            </div>
            <div className="mb-3">
                <button className='btn w-100 px-5 btn-primary' onClick={onSubmitRequest}>Request</button>
            </div>
      </Modal.Body>
    </Modal>
    
  )
}

export default RequestServiceForm
