import React from 'react'

const ParentComponent = (props) => {   
    console.log(props)
  return (
    <div>
      <h1 className='font-color'>Hello my name is {props.name}</h1>
      <h2 className='font-color'>Hello {props.email}</h2>
      <h3 className='font-color'>Address:{props.other.address}</h3>
      <h4 className='font-color'>Mobile No:{props.other.mobile}</h4>
    
    </div>
  )
}

export default ParentComponent
