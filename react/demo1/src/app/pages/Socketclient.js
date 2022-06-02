import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap-v5";
import  io  from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8081";

const socket = io.connect(ENDPOINT);

function Socketclient() {
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");
    const sendMessage = () => {
      socket.emit("send_message", { message  });
    }
  useEffect(() => {
   
    socket.on("receive-message", (data) => {setMessageReceived(data.message)});
  }, []);

  return (   
  <>
   
<div className="container my-3">
    <div className="row">
      <section>
   <form method="POST" name= "form2" > 
<label>Hostname</label>
<input type="text" className ="form-control " placeholder=" Enter hostname / ip address" id = "hostname" name = "host" onChange={(event) => {
  setMessage(event.target.value)
}} />
 <Button className ="btn btn-primary btn-hover-rise me-4" type="submit " onClick={sendMessage()} >Scan </Button>
 <p>
      Web socket connection testing! 
      Message from server!!
      {messageReceived}
     </p>
 </form>
 </section>
 </div>
</div>
</>
  )

   
}
export default Socketclient;