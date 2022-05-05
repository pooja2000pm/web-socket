import React from "react";
import "./Result.css";


export const Result = (props) => {
    const dis = props.display;
//     const revocation = {
//         0 : "not checked",
// 1 : "certificate revoked",
// 2 : "certificate not revoked",
// 3 : "revocation check error",
// 4 : "no revocation information",
// 5 : "internal error"
//     }
//     const res = {dis.endpoints[0].details.cert.revocationStatus};
   
    return (
        // <h5 style={{textAlign: "center"}}> SSL LABS RESULTS</h5>
        <div align = "center">
            <br>
            </br>
        <div className="reportSection">
           <div className="sectionTitle"> Basic information: {dis.host} </div>
           <div className="sectionBody">
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-certificate.png" width = "65" height = "50" alt="noimage"></img>
               <table className="reprtTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert">Host details</div>
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

               <div className="reportSection">
           <div className="sectionTitle"> Certificate #1: EC 256 bits (SHA256withRSA)   </div>
           <div className="sectionBody">
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-certificate.png" width = "65" height = "50" alt="noimage"></img>
               <table className="reportTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert"> Server Key and Certificate #1 </div>
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="tableRow">
                           <td className="tableLabel">Common names</td>
                           <td className="tableCell">{dis.host}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Issuer</td>
                           <td className="tableCell">{dis.endpoints[0].details.cert.issuerLabel}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Issuer subject</td>
                           <td className="tableCell">{dis.endpoints[0].details.cert.issuerSubject}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Key</td>
                           <td className="tableCell">{dis.endpoints[0].details.key.alg}   {dis.endpoints[0].details.key.size} bits</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Key Strength</td>
                           <td className="tableCell">{dis.endpoints[0].details.key.strength} </td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Signature Algorithm</td>
                           <td className="tableCell">{dis.endpoints[0].details.cert.sigAlg}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Issues</td>
                           <td className="tableCell">{dis.endpoints[0].details.cert.issues}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Revocation Info</td>
                           <td className="tableCell">{dis.endpoints[0].details.cert.revocationInfo}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Revocation Status</td>
                          
                           <td className="tableCell"> {dis.endpoints[0].details.cert.revocationStatus}</td>
                       </tr>
                       {/* <tr className="tableRow">
                           <td className="tableLabel">Certificates </td>
                           <td className="tableCell">{dis.endpoints[0].details.chain.certs.map((key, item) => (
                              <div> {item.issuerLabel} </div>

                           ))}</td>
                       </tr>
                        */}

                   </tbody>
               </table>
               <br>
               </br>
               
         
               {/* <img className="tIcon" src = "https://www.ssllabs.com/images/icon-certificate.png" width = "65" height = "50" alt="noimage"></img> */}
               <table className="reportTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert"> Additional certificates (if supplied) </div>
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="tableRow">
                           <td className="tableLabel">Number of certificates provided</td>
                           <td className="tableCell">{dis.endpoints[0].details.chain.certs.length}</td>
                       </tr>
                       <tr>
                           <td className="tablelabel">
                               {dis.endpoints[0].details.chain.certs.map((item) => (
                                   <table className="reportTable">
                                       <thead>
                                           #
                                       </thead>
                                       <tbody>
                                           <tr className="tableRow">
                                               <td className="tableLabel">Issuer</td>
                                               <td className="tableCell">{item.issuerLabel} </td>
                                           </tr>
                                           <tr className="tableRow">
                                               <td className="tableLabel">Issuer Subject</td>
                                               <td className="tableCell">{item.issuerSubject} </td>
                                           </tr>
                                           <tr className="tableRow">
                                               <td className="tableLabel">Issues</td>
                                               <td className="tableCell">{item.issues} </td>
                                           </tr>
                                           <tr className="tableRow">
                                               <td className="tableLabel">Key Algorithm</td>
                                               <td className="tableCell">{item.keyAlg} </td>
                                           </tr>
                                           <tr className="tableRow">
                                               <td className="tableLabel">Key Size</td>
                                               <td className="tableCell">{item.keySize} </td>
                                           </tr>
                                           <tr className="tableRow">
                                               <td className="tableLabel">Key Strength</td>
                                               <td className="tableCell">{item.keyStrength} </td>
                                           </tr>

                                           <tr className="tableRow">
                                               <td className="tableLabel">Signature Algorithm</td>
                                               <td className="tableCell">{item.sigAlg} </td>
                                           </tr>
                                           <tr className="tableRow">
                                               <td className="tableLabel">Label</td>
                                               <td className="tableCell">{item.label} </td>
                                           </tr>
                                       </tbody>
                                   </table>

                               ))}
                           </td>
                       </tr>
                      
                       
                      
                   </tbody>
               </table>

</div>
               </div>
               </div>

               <div className="reportSection">
           <div className="sectionTitle"> Configuration </div>
           <div className="sectionBody">
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-protocol.png" width = "65" height = "50" alt="noimage"></img>
               <table className="reprtTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert">Protocols</div>
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="tableRow">
                       <td className="tableLabel"> {dis.endpoints[0].details.protocols.map((item)=> (
                               <font color="green" className="tableCell"> {item.name} {item.version} <br></br> </font>
                                

                           ))}</td>
                           
                       </tr>
                      

                   </tbody>
               </table>
               <br></br>
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-cipher.png" width = "65" height = "50" alt="noimage"></img>
               <table className="reprtTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert">Cipher Suites</div>
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="tableRow">
                       <td className="tableCell"> {dis.endpoints[0].details.suites.list.map((item)=> (
                            <p className="tableCell">   {item.name}  ecdh {item.ecdhBits},  bits (eq. {item.ecdhStrength} bits RSA) ,  Cipher Strength = {item.cipherStrength} <br></br> </p>
                                

                           ))}</td>
                           
                       </tr>
                      

                   </tbody>
               </table>
               <br></br>
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-handshake.png" width = "65" height = "50" alt="noimage"></img>
               <table className="reprtTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert">Handshake Simulation</div>
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="tableRow">
                       <td className="tableCell"> {dis.endpoints[0].details.sims.results.map((item) => ( item.errorCode === 1) ? (<p className="tableCell"> <font color="red">{item.client.name} {item.client.version}:  Server sent fatal alert: handshake_failure</font> </p>) : (<p className="tableCell"> <font color ="green">{item.client.name} {item.client.version}</font> ({item.kxInfo})</p>))                         
}
                       </td>
                           
                       </tr>
                      

                   </tbody>
               </table>
               <br></br>
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-protocol-details.png" width = "65" height = "50" alt="noimage"></img>
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
                           <td className="tableLabel">Vulnerable to Beast Attack</td>
                           <td className="tableCell"> {
                                 dis.endpoints[0].details.vulnBeast.toString()
                         }</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Drown Errors</td>
                           <td className="tableCell">{dis.endpoints[0].details.drownErrors.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Secure Renegotiation</td>
                           <td className="tableCell">{dis.endpoints[0].details.renegSupport.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">POODLE (SSLv3)</td>
                           <td className="tableCell">{dis.endpoints[0].details.poodle.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">POODLE (TLS)</td>
                           <td className="tableCell">{dis.endpoints[0].details.poodleTls}</td>
                       </tr>
                      
                       <tr className="tableRow">
                           <td className="tableLabel">RC4</td>
                           <td className="tableCell">{dis.endpoints[0].details.rc4Only.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Heartbeat (extension)</td>
                           <td className="tableCell">{dis.endpoints[0].details.heartbeat.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Heartbleed (vulnerability)</td>
                           <td className="tableCell">{dis.endpoints[0].details.heartbleed.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Downgrade attack prevention</td>
                           <td className="tableCell"><font colo="green">{dis.endpoints[0].details.fallbackScsv.toString()}</font></td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">OpenSSL CCS vuln. (CVE-2014-0224)</td>
                           <td className="tableCell">{dis.endpoints[0].details.openSslCcs}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">OpenSSL Padding Oracle vuln.(CVE-2016-2107)</td>
                           <td className="tableCell">{dis.endpoints[0].details.openSSLLuckyMinus20}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Forward Secrecy</td>
                           <td className="tableCell">{dis.endpoints[0].details.forwardSecrecy}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">ALPN</td>
                           <td className="tableCell">{dis.endpoints[0].details.supportsAlpn.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">NPN</td>
                           <td className="tableCell">{dis.endpoints[0].details.supportsNpn.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Session resumption (caching)</td>
                           <td className="tableCell">{dis.endpoints[0].details.sessionResumption}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Session resumption (tickets)</td>
                           <td className="tableCell">{dis.endpoints[0].details.sessionTickets}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">OCSP stapling</td>
                           <td className="tableCell">{dis.endpoints[0].details.ocspStapling.toString()}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Strict Transport Security (HSTS)</td>
                           <td className="tableCell">{dis.endpoints[0].details.hstsPolicy.status}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">HSTS Preloading</td>
                           <td className="tableCell">{dis.endpoints[0].details.hstsPolicy.status}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Long handshake intolerance</td>
                           <td className="tableCell">{dis.endpoints[0].details.miscIntolerance}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">TLS version intolerance</td>
                           <td className="tableCell">{dis.endpoints[0].details.protocolIntolerance}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Incorrect SNI alerts</td>
                           <td className="tableCell">{dis.endpoints[0].details.sniRequired.toString()}</td>
                       </tr>
                       
                        




                   </tbody>
               </table>
               <br></br>
               <img className="tIcon" src = "https://www.ssllabs.com/images/icon-misc.png" width = "65" height = "50" alt="noimage"></img>
               <table className="reprtTable">
                   <thead>
                       <tr>
                           <td className="tableHead" >
                               <div className="serverKeyCert">Miscellaneous</div>
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                   <tr className="tableRow">
                           <td className="tableLabel">Test date</td>
                           <td className="tableCell"> {
                                 Date().toLocaleString()
                         }</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">Test duration</td>
                           <td className="tableCell">{dis.endpoints[0].duration}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">HTTP status code</td>
                           <td className="tableCell">{dis.endpoints[0].details.httpStatusCode}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">HTTP forwarding</td>
                           <td className="tableCell">{dis.endpoints[0].details.httpForwarding}</td>
                       </tr>
                       <tr className="tableRow">
                           <td className="tableLabel">HTTP server signature</td>
                           <td className="tableCell">{dis.endpoints[0].details.serverSignature}</td>
                       </tr>
                      
                       {/* <tr className="tableRow">
                           <td className="tableLabel">Server hostname</td>
                           <td className="tableCell">{dis.endpoints[0].details.rc4Only.toString()}</td>
                       </tr>
                        */}

                       </tbody>
               </table>
               <br></br>
               </div>
               </div>


    </div>
    
              
                
            
                      

                 
    // </div>
                 
                   
               
          



        
    )
    
    
}