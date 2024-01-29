import React from 'react'
import '../utils/jobCard.css'
import { styles } from './printsComponents/jobCardStyles'
import { CompanyImg } from '../assets/constants/ourServiceImg'

const DemoComponent = () => {
  return (
    <div style={{ width: "100%" }}>
        <div style={styles.companyHeader}>
            <div style={{...styles.companyInfo} }>
                <img src={CompanyImg.companyHeader} style={{width:"100%"}} />
            </div>
            <div style={styles.reportInfo}>
                
            </div>
        </div>
        <p style={{ fontWeight: 500, textAlign: "center", padding: "10px", color: "#860A35", backgroundColor: "#F0EEED" }}>Job Card</p>
        <div style={{ display: "flex", width: "100%", flexDirection: 'row', marginTop: "4mm" }}>
            <div style={styles.sectionBody}>
                <p style={styles.sectionTitle}>Customer Information</p>
                <div style={{ width: "100%" }}>
                    <div style={styles.headerInfo}>
                        Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <div style={{ width: "100%", marginTop: "2mm" }}>
                    <div style={styles.headerInfo}>
                        Contact :&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <div style={{ width: "100%", marginTop: "2mm" }}>
                    <div style={styles.headerInfo}>
                        Address :&nbsp;&nbsp;&nbsp;Flat No.110, Wing A
                    </div>
                </div>
            </div>
            <div style={styles.sectionBody}>
                <p style={styles.sectionTitle}>Vehicle Details</p>
                <div style={{ width: "100%" }}>
                    <div style={styles.headerInfo}>Make & Model :-</div>
                </div>
                <div style={{ width: "100%", marginTop: "2mm" }}>
                    <div style={styles.headerInfo}>VIN :-</div>
                </div>
                <div style={{ width: "100%", marginTop: "2mm" }}>
                    <div style={styles.headerInfo}>Registration No :-</div>
                </div>
            </div>
        </div>
        <div style={{ display: "flex", width: "100%", flexDirection: 'row', marginTop: "4mm" }}>
            <div style={{...styles.sectionBody, width:"100%", marginTop:"10px", boxSizing:"border-box"}}>
                <p style={styles.sectionTitle}>Job Details</p>
                <div style={{ width: "100%" }}>
                    <div style={styles.headerInfo}>
                        Date & Time of Appointment :&nbsp;&nbsp; ___/___/_____  ____:____
                    </div>
                </div>
                <div style={{ width: "100%", marginTop: "2mm" }}>
                    <div style={styles.headerInfo}>
                        Problem Description :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <div style={{ width: "100%", marginTop: "2mm", display:'flex', flexDirection:'row' }}>
                    <div style={{width:"50%"}}>
                        <div style={styles.headerInfo}>
                            Mileage/Hours :&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                    <div style={{width:"50%"}}>
                        <div style={styles.headerInfo}>
                            Odometer :&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DemoComponent
