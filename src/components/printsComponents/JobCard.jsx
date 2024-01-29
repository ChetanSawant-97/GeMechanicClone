import React from 'react';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import '../../utils/jobCard.css';
import { styles } from './jobCardStyles';
import { CompanyImg } from '../../assets/constants/ourServiceImg';

export const JobCard = ({ customerDetails }) => (
    <Document>
        <Page size="A4">
            <div style={{ width: "100%" }}>
                <div style={styles.companyHeader}>
                    <Image src={CompanyImg.companyHeader} width={100} height={100} style={{padding:"0px", margin:"0px", borderRight:"0px", borderBottom:"0px"}}/>
                </div>
                <div style={{ display: "flex", width: "100%", flexDirection: 'row', marginTop: "4mm" }}>
                    <div style={styles.sectionBody}>
                        <p style={styles.sectionTitle}><Text>Customer Information</Text></p>
                        <div style={{ width: "100%" , marginTop:"2mm"}}>
                            <div style={styles.headerInfo}>
                                <Text>Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text style={styles.fieldContent}>{customerDetails.customerName}</Text></Text>
                            </div>
                        </div>
                        <div style={{ width: "100%", marginTop: "2mm" }}>
                            <div style={styles.headerInfo}>
                                <Text>Contact :&nbsp;&nbsp;&nbsp;&nbsp;<Text style={styles.fieldContent}>{customerDetails.contactNumber}</Text></Text>
                            </div>
                        </div>
                        <div style={{ width: "100%", marginTop: "2mm" }}>
                            <div style={styles.headerInfo}>
                                <Text>Address :&nbsp;&nbsp;&nbsp;<Text style={styles.fieldContent}>Flat No.110, Wing A</Text></Text>
                            </div>
                        </div>
                    </div>
                    <div style={styles.sectionBody}>
                        <p style={styles.sectionTitle}><Text>Vehicle Details</Text></p>
                        <div style={{ width: "100%" , marginTop:"2mm" }}>
                            <div style={styles.headerInfo}><Text>Make & Model :</Text></div>
                        </div>
                        <div style={{ width: "100%", marginTop: "2mm" }}>
                            <div style={styles.headerInfo}><Text>VIN :</Text></div>
                        </div>
                        <div style={{ width: "100%", marginTop: "2mm" }}>
                            <div style={styles.headerInfo}><Text>Registration No :</Text></div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%", flexDirection: 'row', marginTop: "4mm" }}>
                    <div style={{...styles.sectionBody, width:"100%", marginTop:"10px", boxSizing:"border-box"}}>
                        <p style={styles.sectionTitle}><Text>Job Details</Text></p>
                        <div style={{ width: "100%", marginTop:"2mm" }}>
                            <div style={styles.headerInfo}>
                                <Text>Date & Time of Appointment :&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>_____&nbsp;/&nbsp;_____&nbsp;/&nbsp;_________  ____:____</Text></Text>
                            </div>
                        </div>
                        <div style={{ width: "100%", marginTop: "2mm" }}>
                            <div style={styles.headerInfo}>
                                <Text>Problem Description :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text >{''}</Text></Text>
                                <Text >{''}</Text>
                            </div>
                        </div>
                        <div style={{ width: "100%", marginTop: "2mm", display:'flex', flexDirection:'row' }}>
                            <div style={{width:"50%"}}>
                                <div style={styles.headerInfo}>
                                    <Text>Mileage/Hours :&nbsp;&nbsp;&nbsp;<Text ></Text>{''}</Text>
                                </div>
                            </div>
                            <div style={{width:"50%"}}>
                                <div style={styles.headerInfo}>
                                    <Text>Odometer :&nbsp;&nbsp;&nbsp;<Text ></Text>{''}</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%",flexDirection: 'column', margin: "7mm 2mm 0mm 2mm" }}>
                    <p style={{fontSize:'4mm', color:"#030637"}}><Text style={{padding:"0.7mm 2mm 0.7mm 2mm",backgroundColor:"#E5E1DA",borderTopRightRadius:"3mm", borderBottomRightRadius:"3mm", width:"30mm"}}>Repair Details</Text></p>
                    <div style={styles.repairItemsParent} >
                        <div style={{display:'flex', flexDirection:'row', paddingTop:"2mm"}}>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Car Wash</Text></div>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Oil Change</Text></div>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Alignment and Wheel Balancing</Text></div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', paddingTop:"2mm"}}>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Brake Inspection/Repair</Text></div>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Tire Rotation/Replacement</Text></div>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Air Conditioning Service</Text></div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', paddingTop:"2mm"}}>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Battery Check/Replacement</Text></div>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Coolant System Flush</Text></div>
                            <div style={styles.repairItem}><p style={styles.checkboxes}></p><Text style={styles.repairItemText}>Other</Text></div>
                        </div>    
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%",flexDirection: 'column', margin: "7mm 2mm 0mm 2mm" }}>
                    <p style={{fontSize:'4mm', color:"#030637"}}><Text style={{padding:"0.7mm 2mm 0.7mm 2mm",backgroundColor:"#E5E1DA",borderTopRightRadius:"3mm", borderBottomRightRadius:"3mm", width:"32mm"}}>Parts Required</Text></p>
                    <div style={{...styles.repairItemsParent,padding:"0mm 2mm"}} >
                        <div style={{display:'flex', flexDirection:'row', paddingTop:"2mm",width:"100%"}}>
                            <div style={styles.partItem}><Text style={styles.partItemText}>Part 1:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>____________________________________________</Text></Text></div>
                            <div style={styles.partItem}><Text style={styles.partItemText}>Part 2:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>____________________________________________</Text></Text></div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', paddingTop:"2mm"}}>
                            <div style={styles.partItem}><Text style={styles.partItemText}>Part 3:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>____________________________________________</Text></Text></div>
                            <div style={styles.partItem}><Text style={styles.partItemText}>Part 4:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>____________________________________________</Text></Text></div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', paddingTop:"2mm"}}>
                            <div style={styles.partItem}><Text style={styles.partItemText}>Part 5:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>____________________________________________</Text></Text></div>
                            <div style={styles.partItem}><Text style={styles.partItemText}>Part 6:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>____________________________________________</Text></Text></div>
                        </div>    
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%",flexDirection: 'column', margin: "7mm 2mm 0mm 2mm" }}>
                    <p style={{fontSize:'4mm', color:"#030637"}}><Text style={{padding:"0.7mm 2mm 0.7mm 2mm",backgroundColor:"#E5E1DA",borderTopRightRadius:"3mm", borderBottomRightRadius:"3mm", width:"61mm"}}>Service And Technician Details</Text></p>
                    <div style={{...styles.repairItemsParent,padding:"0mm 2mm"}} >
                        <div style={{display:'flex', flexDirection:'row', paddingTop:"2mm",width:"100%"}}>
                            <div style={{...styles.partItem,width:"23%"}}><Text style={styles.partItemText}>Estimated Cost:<Text style={{color:"#B6BBC4"}}>________<Image src={CompanyImg.rupee} style={{width:"5mm"}}/></Text></Text></div>
                            <div style={{...styles.partItem,width:"30%"}}><Text style={{...styles.partItemText,paddingLeft:"5px"}}>Estimated Labour Hours:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>&nbsp;________</Text></Text></div>
                            <div style={{...styles.partItem,width:"47%"}}><Text style={styles.partItemText}>Technician Name:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>_______________________________</Text></Text></div>
                        </div> 
                        <div style={{display:'flex', flexDirection:'row',justifyContent:"space-between", paddingTop:"2mm", width:"100%"}}>
                            <div style={{width:"40%", fontSize:"3.7mm"}}><Text >Date :&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>_____&nbsp;/&nbsp;_____&nbsp;/&nbsp;_________</Text></Text></div>
                            <div style={{width:"40%", fontSize:"3.7mm"}}><Text >Signature :&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>___________________________</Text></Text></div>
                        </div>  
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%",flexDirection: 'column', margin: "7mm 2mm 0mm 2mm" }}>
                    <p style={{fontSize:'4mm', color:"#030637"}}><Text style={{padding:"0.7mm 2mm 0.7mm 2mm",backgroundColor:"#E5E1DA",borderTopRightRadius:"3mm", borderBottomRightRadius:"3mm", width:"34mm"}}>Additional Notes</Text></p>
                    <div style={{...styles.repairItemsParent,padding:"0mm 2mm", display:"felx", flexDirection:"column"}} >
                        <div style={{width:"100%",fontSize:"3.7mm"}}>
                            <Text style={{color:"#B6BBC4", lineHeight:"0.8mm", marginTop:"2.5mm"}}>
                                _________________________________________________________________________________________________
                                <br />
                                _________________________________________________________________________________________________
                                <br />
                                _________________________________________________________________________________________________
                            </Text>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%",flexDirection: 'column', margin: "2mm 2mm 0mm 2mm" }}>
                    <p style={{fontSize:'4mm', color:"#030637"}}><Text style={{padding:"0.7mm 2mm 0.7mm 2mm",backgroundColor:"#E5E1DA",borderTopRightRadius:"3mm", borderBottomRightRadius:"3mm", width:"51mm"}}>Authorisation and consent</Text></p>
                    <div style={{...styles.repairItemsParent,padding:"0mm 2mm", display:"felx", flexDirection:"column", width:"100%"}} >
                        <Text style={{fontSize:"3.7mm",width:"100%", padding:"10px 10px 10px 0px", textAlign:"center", lineHeight:"0.5mm",}}>"I authorize the listed services and agree to the estimated costs. I understand that additional expenses may arise, and I consent to the recommended services for my vehicle. I acknowledge the estimated completion time and agree to pay the final invoice upon completion. By signing below, I confirm my consent to the outlined terms."</Text>
                        <div style={{display:'flex', flexDirection:'row',justifyContent:"space-between", width:"100%"}}>
                            <div style={{width:"50%", fontSize:"3.7mm"}}><Text >Customer Signature:&nbsp;<Text style={{color:"#B6BBC4"}}>___________________________</Text></Text></div>
                            <div style={{width:"29%", fontSize:"3.7mm"}}><Text >Date :&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>_____&nbsp;/&nbsp;_____&nbsp;/&nbsp;_________</Text></Text></div>
                        </div> 
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%",flexDirection: 'column', margin: "5mm 2mm 0mm 2mm" }}>
                    <p style={{fontSize:'4mm', color:"#030637"}}><Text style={{padding:"0.7mm 2mm 0.7mm 2mm",backgroundColor:"#E5E1DA",borderTopRightRadius:"3mm", borderBottomRightRadius:"3mm", width:"51mm"}}>Completion Details:</Text></p>
                    <div style={{...styles.repairItemsParent,padding:"0mm 2mm", display:"felx", flexDirection:"column", width:"100%"}} >
                        <div style={{display:'flex', flexDirection:'row',justifyContent:"space-between", width:"100%"}}>
                            <div style={{width:"50%", fontSize:"3.7mm", padding:"10px 0px"}}><Text >Actual Time Taken:&nbsp;<Text style={{color:"#B6BBC4"}}>__________<Image src={CompanyImg.rupee} style={{width:"5mm"}}/></Text></Text></div>
                            <div style={{...styles.partItem,width:"30%"}}><Text style={{...styles.partItemText,paddingLeft:"5px"}}>Estimated Labour Hours:&nbsp;&nbsp;<Text style={{color:"#B6BBC4"}}>&nbsp;________</Text></Text></div>
                        </div> 
                    </div>
                </div>
            </div>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30px', backgroundColor: '#030637' }}>
                <Text style={{fontSize:"4.5mm" ,width:"100%", textAlign:"center", color:"#FFFFFF", margin:"auto"}}>Thank you for choosing our service center!</Text>
            </View>
        </Page>
    </Document>
);

