import React, { Component } from "react";
 class Message extends Component{
    // FOR STATE USING CLASS CONSTRUCTOR
      constructor(){
            super()
            this.state={
                message:'Welcome visitor',
                msg:"hello world"
            }
      }
      changeMessage(){
        this.setState({

                message:"Thank you for subscribing"

        })
      }

    render(){
        return(
            <div>
            <h1>
                {this.state.message}                
            </h1>
            <span>{this.state.msg}</span>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    }
   
 }

 export default Message

 