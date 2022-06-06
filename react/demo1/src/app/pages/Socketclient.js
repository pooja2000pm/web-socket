import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap-v5";
import  io  from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function Socketclient() {
    const [message, setMessage] = useState("");
   const [messageReceived, setMessageReceived] = useState("");
    const sendMessage = () => {
      socket.emit("send_message", { message });
    }
  useEffect(() => {
   
    socket.on("receive_message", (data) => {setMessageReceived(data.message)});
  }, []);

  return (   
  <>
   
<div className="container my-3">
    <div className="row">
      <section>
   
<label>Hostname</label>
<input type="text" className ="form-control " placeholder=" Enter hostname / ip address" id = "hostname" name = "host" onChange={(event) => { 
  setMessage(event.target.value);

}} 
 />
 <Button className ="btn btn-primary btn-hover-rise me-4" type="submit " onClick={sendMessage()} >Scan </Button>
 <p>
      Web socket connection testing! 
      Message from server!!
      
      
    
     </p>
     <br>
     </br>
    
     {messageReceived}
     {/* <div align = "center">
            <br>
            </br>
        <div className="reportSection">
           <div className="sectionTitle"> {data.ip_data[0].testing_label} </div>
           <div className="sectionBody">
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-certificate.png" width = "65" height = "50" alt="noimage"></img>
               <table className="reprtTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert">Protocol details</div>
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="tableRow">
                           <td className="tableLabel">Requested Host</td>
                           <td className="tableCell">{dis.host}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Port</td>
                           <td className="tableCell">{dis.port}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">IP Address</td>
                           <td className="tableCell">{dis.endpoints[0].ipAddress}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Engine Version</td>
                           <td className="tableCell">{dis.engineVersion}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Grade</td>
                           <td className="tableCell">{dis.endpoints[0].grade}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Grade Trusted Ignore</td>
                           <td className="tableCell">{dis.endpoints[0].gradeTrustIgnored}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Duration</td>
                           <td className="tableCell">{dis.endpoints[0].duration}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Progress</td>
                           <td className="tableCell">{dis.endpoints[0].progress}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Protocol</td>
                           <td className="tableCell">{dis.protocol}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Start Time</td>
                           <td className="tableCell">{dis.startTime}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Status</td>
                           <td className="tableCell">{dis.status}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Test Time</td>
                           <td className="tableCell">{dis.testTime}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Criteria Vision</td>
                           <td className="tableCell">{dis.criteriaVersion}</td>
                       </tr>

                   </tbody>
               </table>
           
               </div>
               </div>
               <div>


     </div> */}
    

</section>
</div>
</div>
</>
  )

   
}
export default Socketclient;