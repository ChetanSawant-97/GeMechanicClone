import React,{useState, useEffect} from 'react'
import { useGetAllServicesQuery } from '../../../services/adminService';
import '../../../utils/servicecss/adminservice.css';
import { BsSearch } from "react-icons/bs";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { startOfWeek, endOfWeek } from 'date-fns';
import { FaCalendarAlt } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineCaretRight,AiOutlineCaretDown } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { formatDateString } from '../../../utils/utilities/common';
import { MdDeleteForever } from "react-icons/md";
import {JobCard} from '../../printsComponents/JobCard';
import { pdf } from '@react-pdf/renderer';
import { FaFilePdf } from "react-icons/fa6";

const ServiceRequestList = () => {
  const [selectedTab, setSelectedTab] = useState("REQUESTED");
  const [startDateFormatted, setStartDateFormatted ] = useState('');
  const [endDateFormatted, setEndDateFormatted ] = useState('');
  const [showDatePicker, setShowDatePicker ] = useState(false);
  const [customerName, setCustomerName ] = useState('');
  const [fetchData, setFetchData ] = useState('');
  const [requestedServices, setRequestedServices ] = useState([]);
  const [rotatedRows, setRotatedRows] = useState([]);

  const today = new Date();
  const currentWeekStartDate = startOfWeek(new Date(today.setDate(today.getDate() - 7)), { weekStartsOn: 1 });
  const currentWeekEndDate = endOfWeek(new Date(), { weekStartsOn: 7 });

  const defaultDateRange = [
    {
      startDate: formatDateString(currentWeekStartDate),
      endDate: formatDateString(currentWeekEndDate),
      key: 'selection',
    },
  ];

  const defaultDateRangeForDatePicker = [
    {
      startDate: currentWeekStartDate,
      endDate: currentWeekEndDate,
      key: 'selection',
    },
  ];
  
  const [dateRange, setDateRange] = useState(defaultDateRange);
  const [dateRangeForDatePicker, setDateRangeForDatePicker] = useState(defaultDateRangeForDatePicker);


  const { data, error, isLoading, refetch } = useGetAllServicesQuery({
    fromDate: dateRange[0].startDate,
    toDate: dateRange[0].endDate,
    status: selectedTab,
    customerName: customerName,
  });
  
  useEffect(() => {
    if (data) {
      setRequestedServices(data);
      console.log(data);
    }
  }, [data]); 
  
  useEffect(() => {
    if (dateRange || selectedTab || customerName) {
      refetch();
    }
  }, [dateRange , selectedTab, customerName]);

  const toggleRotation = (id) => {
    setRotatedRows((prevRotatedRows) => {
      if (prevRotatedRows.includes(id)) {
        return prevRotatedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevRotatedRows, id];
      }
    });
  };

  const handlePrint = async(customerDetails) => {  
    const blob = await pdf(JobCard({ customerDetails })).toBlob();
    const url = URL.createObjectURL(blob);
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const windowWidth = 700; 
    const windowHeight = 1000; 
    const leftPosition = (screenWidth - windowWidth) / 2;
    const topPosition = (screenHeight - windowHeight) / 2;

    const pdfWindow = window.open(
      url,
      '_blank',
      `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`
    );
    if (!pdfWindow) {
      window.open(url, '_blank', 'width=700,height=1000');
    }

    const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.click();
      URL.revokeObjectURL(url);
    };

  const handleDateChange = (ranges) => {
    const selectedRange = ranges.range1 || ranges.selection; 
    const fromDateForm = new Date(selectedRange.startDate);
    const toDateForm = new Date(selectedRange.endDate);
  
    const updatedDateRange = {
      startDate: formatDateString(fromDateForm),
      endDate: formatDateString(toDateForm),
      key: 'selection',
    };
  
    setDateRange([updatedDateRange]);
    setDateRangeForDatePicker([selectedRange]);
  };
  

  return (
    <div className='w-100 px-3'>
      <div className='d-flex px-4 pt-2' style={{borderBottom:"2px solid #E5E1DA"}}>
        <div className={selectedTab=='REQUESTED'?'tab-selected':'tab'} onClick={()=> setSelectedTab("REQUESTED")}>Requested</div>
        <div className={selectedTab=='ONHOLD'?'tab-selected':'tab'} onClick={()=> setSelectedTab("ONHOLD")}>OnHold</div>
        <div className={selectedTab=='ONGOING'?'tab-selected':'tab'} onClick={()=> setSelectedTab("ONGOING")}>OnGoing</div>
        <div className={selectedTab=='COMPLETED'?'tab-selected':'tab'} onClick={()=> setSelectedTab("COMPLETED")}>Completed</div>
      </div>
      <div className='d-flex px-4 py-2 w-100 justify-content-between'>
        <div className="my-3 col-lg-3 d-flex">
          <input type="text" className="form-control custName" name="customerNameForSearch" placeholder="Customer Name" onChange={(e) => setCustomerName(e.target.value)} autocomplete="off" style={{borderTopRightRadius:"0px", borderBottomRightRadius:"0px"}}/>
          <div class="input-group-append">
            <button className="btn bg-body-secondary" type="button" style={{borderTopLeftRadius:"0px", borderBottomLeftRadius:"0px"}}><BsSearch/></button>
          </div>
        </div>
        <div className='d-flex col-lg-3 datePickerParent' style={{width:"28%"}}>
          <div className='w-50 position-relative my-3' >
            <label htmlFor="" style={{width:"88px",fontStyle:"italic"}}>From Date :</label>
            <input className='date-field' value={dateRange[0].startDate} /> <FaCalendarAlt className='calendar-icon' onClick={()=>setShowDatePicker(true)}/>
          </div>
          <div className='w-50 position-relative my-3' >
            <label htmlFor="" style={{width:"88px", paddingLeft:"15px", fontStyle:"italic"}}>To Date :</label>
            <input className='date-field' value={dateRange[0].endDate} /> <FaCalendarAlt className='calendar-icon' onClick={()=>setShowDatePicker(true)}/>
          </div>
          <Modal centered show={showDatePicker} onHide={setShowDatePicker} >
            <Modal.Body>
              <DateRangePicker
                style={{width:"100%"}}
                ranges={dateRangeForDatePicker}
                onChange={handleDateChange}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
              />
            </Modal.Body>
            <Modal.Footer>
              <button className='btn btn-success' onClick={()=>setShowDatePicker(false)}>Done</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="table-container">
        <div className="table-header-row">
          <div style={{ width: "18%", }}>Customer Name</div>
          <div style={{ width: "20%" }}>Service Request</div>
          <div style={{ width: "12%" }}>Request Date</div>
          <div style={{ width: "12%" }}>Request Status</div>
          <div style={{ width: "12%" }}>Expected Delivery</div>
          <div style={{ width: "17%" }}>Contact Details</div>
          <div style={{ width: "9%" }}>Actions</div>
        </div>
        <div className="table-body">
          {requestedServices.map((service, index) => (
            <div className="table-row" key={service.id}>
              <div className='d-flex'>
                <div style={{ width: "18%" }}>
                  <AiOutlineCaretRight className={`dropdown-icon pointerCursor ${rotatedRows.includes(index) ? 'rotate-90' : ''}`} style={{fontSize:'1.2em'}} onClick={() => toggleRotation(index)}/>
                  <span style={{paddingLeft:'5px'}}>{service.customerName}</span>
                </div>
                <div style={{ width: "20%" }}>{service.requestTitle}</div>
                <div style={{ width: "12%" }} >{service.requestedDate}</div>
                <div style={{ width: "12%", textAlign:'center' }}>
                  <p className='text-capitalize' style={{ padding: "2px 5px",width:"70%" , borderRadius: "15px", backgroundColor: "#54B435" }}>{service.status} <span> <AiOutlineCaretDown/></span></p>
                </div>
                <div style={{ width: "12%" }}>{service.expectedDelivery}</div>
                <div style={{ width: "17%" }}>
                  <p style={{textOverflow:'ellipsis'}}> <IoCallSharp style={{color:'#7D7C7C'}} /> <span style={{color:'#7D7C7C'}}>{service.contactNumber}</span></p>
                  <p style={{width:'100%',textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}}> <IoIosMail style={{color:'#7D7C7C'}} /> <span style={{color:'#7D7C7C'}}>{service.emailAddress}</span></p>
                </div>
                <div className='d-flex justify-content-around' style={{ width: "9%" }}>
                  <FaFilePdf className='pointerCursor' style={{fontSize:'1.5em', color:'#13005A'}} title='Print Job Card' onClick={()=> handlePrint(service)}/>
                  <MdDeleteForever className='pointerCursor' style={{fontSize:'1.8em', color:'#F30A49'}} title='Ignore Request'/>
                </div>
              </div>
              <div style={{ display: rotatedRows.includes(index) ? 'flex' : 'none', padding:'2px 15px', margin:"0px 8px 8px 8px",minHeight:"10vh", border:"0.5px solid #DDE6ED", borderRadius:"8px", background:"#F9F5F6"}}>
                <div className='p-3 border-1' style={{display:"grid", gridTemplateRows:"repeat(2, 1fr)", gridTemplateColumns:"repeat(2, 1fr)", width:"38%"}}>
                   {service.servicesList.map((subService=>(
                      <div className='text-ellipsis' title={subService.serviceName}>{subService.serviceName}</div>
                    )))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceRequestList
