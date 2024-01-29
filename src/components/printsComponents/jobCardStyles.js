import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    companyHeader:{
        width:"100%",
    },
    companyHeaderTitle:{
        color:"white",
        fontWeight:"bold",
        fontSize:"18px"
    },
    companyHeaderDesc:{

    },
    companyInfo:{
        width:"60%",
        backgroundColor:"#030637"
    },
    reportInfo:{
        width:"40%",
    },


    sectionTitle:{
        color:"#860A35",
        fontSize:"3.5mm",
        marginBottom: "5px",
        display: "inline-block",
        fontWeight: "600",
        position: "absolute",
        top: "-3mm",
        left: "1mm",
        backgroundColor: "white",
        padding: "2px 4px 2px 4px",
        boxSizing:"border-box",
        backgroundColor:"#EEEDEB",
        color:"#030637",
        borderRadius:"8px",
        border:"0.7px solid #B0A4A4"
    },
    sectionBody:{
        width:"50%",
        padding:"8px 5px 5px 5px",
        position:"relative",
        border:"1px solid #B0A4A4",
        borderRadius:"5px",
        boxSizing:"border-box",
        marginHorizontal:"5px",
    },
    headerInfo:{
        fontSize:"3.5mm",
        fontWeight:"normal",
        width:'100%',
        display:'inline-flex',
        flexWrap: "nowrap",
    },
    headerInfoField:{
        fontSize:"3.5mm",
    },
    fieldContent:{
        color:"#696464",
    },
    repairItemsParent:{
        display:"flex",
        flexWrap: "wrap",
        width:"100%",
    },
    repairItemText:{
        fontSize:"3.5mm",
        width:"90%"
    },
    repairItem:{
        width:"30%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    checkboxes:{
        width:"4mm",
        height:"4mm",
        border:"1px solid #000000",
        margin:"0mm 4mm 0mm 4mm",
        borderRadius:"0.8mm"
    },
    partItem:{
        width:"50%"
    },
    partItemText:{
        fontSize:"3.5mm",
    }
});
