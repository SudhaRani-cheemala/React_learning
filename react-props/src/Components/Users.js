import React from 'react'

const Users = (props) => {
  return (
    <div style={{border:'2px solid grey', width :300, margin:20}}>
      <h1>Hello iam {props.name} my age is {props.age} iam from {props.place}</h1>
      <h2>Hello ID:{props.id}</h2>
      
    </div>
  )
}

export default Users
