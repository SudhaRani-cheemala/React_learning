// have to must import React 
import React from 'react'
// FUNCTIONAL COMPONENT 
const App=() =>{

//  jsx must be returned other wise error will come
// here we care calling MyName function into it
return (<div>
  <MyName/>
  <h1 className='myclassname'>Hello world {3 + 3}</h1>
  <p>Awesome</p>
</div>)
}
// Another componet which is functional component
const MyName=()=>{
return(<div>
 <p>My name is Sudha</p>
</div>)
}

export default App

// The above 3 are the must and should rules for any react app
// there is no mandatory to write import React from 'react' line raect with React afytre 17.0 version
// what is JSX: otherthan normal function we can use fat arrow function 
// const App=(){
//    return(
// <div>
//   <h1>Hello world</h1>
//   <div/>
//    );
// // }
// normal traditional approach
// function App(){

//   //  jsx must be returned other wise error will come
//   return <h1>Hello world</h1>
//   }
// now this JSX fat function have some rules:1).JSX always returns single element 2). <React.Fragment> use div of React.Fragment to wrapall your JSX code
// 3. ClassName in place of class 4.need to close all non closing tags in JSX 5).uSE Camle case for attributes className(second word letter must be capital)

