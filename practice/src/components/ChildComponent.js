import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* how to pass the parameters to the parent component from child component */}
      <button onClick={()=>props.greetHandler('child')}>Greet Parent</button> 
    </div>
  )
}

export default ChildComponent
