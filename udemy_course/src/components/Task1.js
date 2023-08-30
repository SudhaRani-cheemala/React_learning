import React from 'react'
import {useState} from 'react'
function Task1() {
  const[text,setText]=useState("");

  const shudha = (e)=>{
    console.log(e.target.value,"shudha")
    const riyaz = e.target.value;
    setText(riyaz);
  }
  return (
    <div>
      <select onChange={shudha}>
        <option value='default'>--select options--</option>
        <option value='abc'>Chinnu</option>
        <option value='123'>Bannu</option> 
      </select>
      {(text === ('123' && 'abc') && 

<h1>Hello iam using dropdown</h1>
      )}
      
    </div>
  )
}

export default Task1
