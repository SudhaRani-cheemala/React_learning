import React,{useState} from 'react'


function Form_Handling() {
    const[details,setDetails]=useState({
        name:"",
        mailid:"",
        contact:"",
        gender:""
    })
    const handleChnage=(e)=>{
        const {name,value}=e.target
        setDetails((prev)=>{
            return {...prev,[name]:value}
        })
    };
    const handleSubmit=()=>{
        console.log(details)
    }
  return (
    <div>
      <div><input type="text" placeholder='Name' name="name" onChange={handleChnage}/></div>
      <div><input type="mail" placeholder='mailid' name="email" onChange={handleChnage}/></div>
      <div><input type="text" placeholder='Contact' name="contact" onChange={handleChnage}/></div>
      <div><input type="text" placeholder='Gender'  name= "gender" onChange={handleChnage}/></div>
      <div><button type='submit'style={{backgroundColor:'red'}} onClick={handleSubmit}>Submit</button></div>
     
    </div>
  )
}

export default Form_Handling
