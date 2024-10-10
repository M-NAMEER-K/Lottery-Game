import {useState} from "react";
export default function Form(){
    let [formData,setFormData]=useState({
         fullName:""
    });
  let handleInputChange=(event)=>{
         let fieldName=event.target.name;
         setFormData((currData)=>{
            currData[fieldName]=newValue;
            return{ ...currData};
         })
  }
  
    return(
        <form>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" placeholder="Enter the value" value={formData.fullName} onChange={handleInputChange} name=""/>
            <button>Submit</button>
        </form>
    );
}