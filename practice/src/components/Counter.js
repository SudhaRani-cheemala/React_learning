import React, { Component } from "react";

class Counter extends Component{
constructor(){
    super()
    this.state={
        count:0
    }
    // calls to set state are asynchronous for this we have to use call back function in setSate method
    // setState method have state object,call back function
}
changeCount(){
    // use this.state.count for current state of an element or an object
//    this.setState({
//     count:this.state.count+1
  
//    },
//    ()=>{
//     console.log('Call Back Value',this.state.count)
//    }
//    )
// }
this.setState((prevState)=>({
    count:prevState.count+1
}))
console.log(this.state.count)
}
// if you wnat to chnage the state based on previous state just give a function as a second argumnet to the setState method call back function
incrementFive(){
    this.changeCount()
    this.changeCount()
    this.changeCount()
    
}
    render(){
        return(
<div>
 <button onClick={()=>this.incrementFive()}>Increment</button>
 <h1>Count - {this.state.count}</h1>
</div>

        )


    }
}
 export default Counter