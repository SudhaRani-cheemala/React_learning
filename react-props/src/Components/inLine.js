import React from 'react'
const heading={
    fontSize:72,
    color:'blue'
}
function inLine() {
  return (
    <div>
        <h1 className='error'>Error</h1>
      <h1 style={heading}>inline</h1>
    </div>
  )
}

export default inLine
