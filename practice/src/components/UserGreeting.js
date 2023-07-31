import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
          super(props)
          this.state={
            isloggedIn:true
          }
    }

  render() {
    // one way
    return this.state.isloggedIn && <div>Welcome Sudha</div>
    // second way
    // let Message
    // if (this.state.isloggedIn){
    //     Message=<div>Welcome Sudha</div>
    // }
    // else{
    //     Message=<div>Welcome Guest</div>
    // }
    // return <div>{Message}</div>
    // third way
    // if(this.state.isloggedIn){
    //     return(
    //         <div>Welcom Vishwas</div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return(
    //     this.state.isloggedIn?
    //     <div>Welcome Sudha</div>:
    //     <div>Welcome Guest</div>
    // )
  }
}

export default UserGreeting
