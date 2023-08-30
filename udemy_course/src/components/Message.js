import React from 'react';
import {useState} from 'react';
import '../index.css'

 function Message() {
    const [data,setData]=useState(0)

    function updateName(){
        setData(data+1)
    }
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button  className='button' onClick={updateName}>Click Here</button>
    </div>
  )
}

export default Message;