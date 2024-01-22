import React,{useState, useEffect} from 'react'
import { useGetReqServicesQuery } from '../../../services/customerServiceDets';
import '../../../utils/servicecss/adminservice.css';
import { BsSearch } from "react-icons/bs";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const ServiceRequestList = () => {
  const { data, error, isLoading } = useGetReqServicesQuery();
  const [selectedTab, setSelectedTab] = useState("REQUESTED");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };  

  return (
    <div className='w-100 px-3'>
      <h1 className='py-3' style={{color:"#5F0F40", fontWeight:"600"}}>Service Requests</h1>
      <div >
        <div className='d-flex px-4 pt-2' style={{borderBottom:"2px solid #E5E1DA"}}>
          <div className={selectedTab=='REQUESTED'?'tab-selected':'tab'} onClick={()=> setSelectedTab("REQUESTED")}>Requested</div>
          <div className={selectedTab=='ONHOLD'?'tab-selected':'tab'} onClick={()=> setSelectedTab("ONHOLD")}>OnHold</div>
          <div className={selectedTab=='ONGOING'?'tab-selected':'tab'} onClick={()=> setSelectedTab("ONGOING")}>OnGoing</div>
          <div className={selectedTab=='COMPLETED'?'tab-selected':'tab'} onClick={()=> setSelectedTab("COMPLETED")}>Completed</div>
        </div>
        <div className='d-flex px-4 py-2 w-100'>
          <div className="my-3 col-lg-3 d-flex">
            <input type="text" className="form-control custName" name="customerNameForSearch" placeholder="Customer Name" autocomplete="off" style={{borderTopRightRadius:"0px", borderBottomRightRadius:"0px"}}/>
            <div class="input-group-append">
              <button className="btn bg-body-secondary" type="button" style={{borderTopLeftRadius:"0px", borderBottomLeftRadius:"0px"}}><BsSearch/></button>
            </div>
          </div>
          <div>
            <DateRangePicker
              ranges={dateRange}
              onChange={handleDateChange}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
            />
          </div>
        </div>
        <div>
          <table className="table">
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
    </div>
  )
}

export default ServiceRequestList
