import React from 'react'
import '../index.css'
import { useState } from 'react'

function Eventbind() {
    const[message,setData]=useState("Hello iam from hyderabad")
    function eventBind(){
        setData('Iam from chennai')
    }
  return (
    <div>
      <button className='button' onClick={eventBind}>Eventbind</button>
      <h1>{message}</h1>
    </div>
  )
}

export default Eventbind
