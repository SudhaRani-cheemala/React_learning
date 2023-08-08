import React from 'react'
import Hello from './components/Hello'  
import Mycomponent  from './components/greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import Eventbind from './components/Eventbind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import List from './components/List'
import NameList from './components/NameList'
import Stylesheet from './components/stylesheet'
import Inline from '/components/Inline.js'


const App = () => {
  return (
    <div className='App'>
        {/* <Mycomponent name="Bruce" heroname="BATSMAN">
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
        <Message/> */}
        {/* <Counter/> 
        <FunctionClick/>
        <ClassClick/>
        <Eventbind/>
        <ParentComponent/>
        <UserGreeting/>
        <List/>
        <NameList/> */}
        <Stylesheet primary={true}/>
        <Inline/>
    </div>
  )
}

export default App
