import React from 'react'
import '../index.css'

const Greetings = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello {props.name} iam from {props.native}</h1>
      {props.children}
    </div>
  )
}

export default Greetings
