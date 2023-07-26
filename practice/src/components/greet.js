import React from 'react'
// normal function
// function Greet(){
//     return <h1> Hello world with greetings</h1>
// }
// export default Greet
// ES6 ARROW FUNCTION


const greet = (props) => {
  return (
    <>
    <div>
      {/* we can retirn only one html element */}
      <h1> Hello world with greetings with arrow function {props.name} a.k.a  {props.heroname}</h1>
      {props.children}
    </div>
    </>
  )
}

export default greet
