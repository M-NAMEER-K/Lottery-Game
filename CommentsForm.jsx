import {useState} from "react"
export  default function CommentsForm(){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });
    let handleInputChange=(event)=>{
                     setFormData((currdata)=>{
                        return{...currdata,[event.target.name]:event.target.value}

                     })  
    };
    let handleSubmit=(event)=>{
              console.log(formData);
              event.preventDefault();
    }
    return(
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" onChange={handleInputChange} name="username" value={formData.username}/>
                <br/><br/>
                <textarea onChange={handleInputChange} value={formData.remarks} name="remarks">Remarks</textarea>
                <br/><br/>
                <input type="number" onChange={handleInputChange} placeholder="rating" name="rating" min={1} max={5}></input>
                <button>Add Comment</button>
            </form>
        </div>
    );
}