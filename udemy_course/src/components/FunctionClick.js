import React from 'react'
import '../index.css'
function FunctionClick() {
    function clickHandler(){
        console.log("Hello")
    }
  return (
    <div>

        <button className='button' onClick={clickHandler}>FunctionClick</button>
      
    </div>
  )
}

export default FunctionClick
