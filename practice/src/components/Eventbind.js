import React, { Component } from 'react'

export class Eventbind extends Component {
  constructor(){
    super()
    this.state={
      message:"Hello"
    }
  }
  clickHandler(){
    this.setState({
      message:"GoodBye"
    })
  } 
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}

export default Eventbind
