import React from 'react'

function List() {
  const names=['Sudha','Rani','Clark','Diana']  
  return (
    <div>
      {
        names.map(name=><h1>{name}</h1>)
      }
    </div>
  )
}
 export default List