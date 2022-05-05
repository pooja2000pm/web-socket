import { useState } from "react";
export const Input = (props) => {
    const [testData, setTestData] = useState('')
    return(
        <div className="test">
        <span>
      <label>Hostname</label>
      <input type="text" className ="form-control " placeholder=" Enter hostname / ip address" id = "hostname" value={testData} onChange={e => setTestData(e.target.value)} />
       <button className ="btn btn-primary btn-hover-rise me-4" >Scan</button></span>
</div>
      
    );
}