import React from "react";
import { useState} from "react";
//import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Result } from "./Result";
//const queryClient = new QueryClient();
import axios from "axios";
import { Button, ProgressBar } from "react-bootstrap-v5";
//import { MenuItem } from "../../_metronic/layout/components/header/MenuItem";
//import { render } from "react-dom";
//import { render } from "react-dom";




//const Testssl: React.FC = () => {  
//   return (
//     <QueryClientProvider client={queryClient}>
//     <Testcomp />
// </QueryClientProvider>
//   )    
//   }
// export {Testssl}
    
//  function Testcomp() {
 export function Testssl()
 {
  const [testData, setTestData] = useState('');
  const [loading, setLoading] = useState(false);
  //const [tdata, setData] = useState([{}]);
 const [display, setDisplay] = useState([]);
 // let dis = '';
  // const [endPoint, setEndPoint] = useState('');
   //const data = {'host': "tml.ai"};
   
  // useEffect(() => {
   
  //      const options = {
  //       method: 'GET',
  //       url: 'https://api.ssllabs.com/api/v3/analyze',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //        params: {'host': "tml.ai"},
  //     };
      
  //     axios.request(options).then(function (response) {
  //     	console.log(response.data);
  //       setContainer(response.data.data);
        
      
  //     }).catch(function (error) {
  //     	console.error(error);
  //     });
  //     }, [endPoint])


   
    
   

 const onSubmitHandler = () => {

  // validateinput(inputip);
  // inputip.preventDefault();


  //setEndPoint(testData)
  //setTestData(testData)
  //console.log(testData)
  let data = {"data":testData};
  
  console.log(data)
  let options = {
        
    method: 'POST',
    url: 'http://localhost:5000/',
    headers: {
      'Content-type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
     data:data,
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
   // display.push(response);
   // console.log(response);
   // console.log(display[0].data.endpoints[0].ipAddress);
    setDisplay(response.data);
    setLoading(true);
  //  dis = response.data;
  //  console.log(dis);  
  
  }).catch(function (error) {
    console.error(error);
  });
  }
 
  
  // function validateinput(inputText) {
  //   var ipformat1 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
   // var ipformat2 = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\.-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\.-]*[A-Za-z0-9])$/;
//     var ipformat = ipformat1;
//  if(inputText.value.match(ipformat))
//  {
//  document.form1.text1.focus();
//  return true;
//  }
//  else
//  {
//  alert("You have entered an invalid IP address/Hostname!");
//  document.form1.text1.focus();return false;
//   }

// } 
  
   
  //  e.preventDefault()
  // {async () = {
  //   const todo = { testData };
  //   const response = await fetch("https://localhost:5000/", {
  //   method: "POST",
  //   headers: {
  //   'Content-Type' : 'application/json'
  //   },
  //   body: JSON.stringify(todo)
  //   })
  //   if (response.ok){
  //   console.log("it worked")}}

  //  setTestData(testData);
  //  //setEndPoint(testData);
  // // setContainer(testData);

  //   }

 

  return (
    <>
  <div className="container my-3">
    <div className="row">
      <section>
   {/* <form method="POST" name= " form1" >  */}
<label>Hostname</label>
<input type="text" className ="form-control " placeholder=" Enter hostname / ip address" id = "hostname" name = "host" value={testData} onChange={e => setTestData(e.target.value)} />
 <Button className ="btn btn-primary btn-hover-rise" type="submit " onClick={onSubmitHandler()} >Scan </Button>
 {/* <MenuItem title="Scan" to="result" onSubmit ={onSubmitHandler}/> */}
 {/* </form> */}
 </section>
 <div>
<div>
{loading ? (display && <Result display = {display}/> ) :  (<ProgressBar />)}
{/* {display && <Result display = {display}/>} */}
</div>
  

</div>
</div> 

 </div>

 
 </>
)

}
 

export default Testssl;

 




    
      
      
