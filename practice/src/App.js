import React from 'react'
import Hello from './components/Hello'  
import Mycomponent  from './components/greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
const App = () => {
  return (
    <div className='App'>
        <Mycomponent name="Bruce" heroname="BATSMAN">
          <p>This is children prop</p>
        </Mycomponent>
        <Mycomponent name="clark" heroname="spiderman">
          <button>
            Action
          </button>
        </Mycomponent>
        <Mycomponent name="diana" heroname="wonder women"/>
        <Hello name="Mark"/>
        <Hello name="Luke">
          <button>
            Hello
          </button>
        </Hello>
        <Welcome name="Smith" wish="Good Morning"/>
        <p>This is children prop</p>
        <Message/>
        <Counter/> 

    </div>
  )
}

export default App
