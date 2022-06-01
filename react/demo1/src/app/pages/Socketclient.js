import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
function Socketclient() {
    const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("", data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
     Web socket connection testing! {response}
    </p>
  );

   
}
export default Socketclient;