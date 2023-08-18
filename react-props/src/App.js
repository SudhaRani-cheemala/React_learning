import React, { useState } from 'react';
import './Components/test.css';
import ParentComponent from './Components/ParentComponent';
import Users  from './Components/Users';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet'
import InLine from './Components/inLine';
import './appStyles.css'
import styles from './appstyle.module.css'
import Form from './Components/Form_Handling'
import Props from './Components/props'
function App() {
  let users=[
  {
    id:23,
    name:'joseph',
    place:'hyd',
    age:20
  },
  {
    id:24,
    name:'fooo',
    place:'hyd',
    age:32
  }
]
  const [old_name, setName] = useState('Anil');
  // const Name="Ahalya"
  
    // if(Name==="Ahalya")
    // {
    //   return(
    //     <>
    //     <h1>hello if condition is passed</h1>
    //     </>
    //   )
    // }else{
    //   <ParentComponent/>
    // }
  
  const handleChange = () => {
    const updated_name = 'Smith'; // Change this to the desired new name
    setName(updated_name);
  };

  return (
    <div>
      <h1 className='font-color'>Hello</h1>
      <h2 className='error'>Error</h2>
      <h3 className={styles.success} >Success</h3>
      <>
      <Header/>
      <InLine/>
      <Form/>
      <Props/>
      <Stylesheet primary={false}/>
     {
      isAdmin?<Admin></Admin>: null
     }
      <ParentComponent
        name={old_name}
        email='anil@gmail.com'
        other={{ address: 'hyd', mobile: '4141314224' }}
      />
      <Users name="john" age='23' place='hyderabad'/>
      <NameList/>
      {
        users.map( 
          (u)=>{
            return <Users key={u.id} id={u.id} name={u.name}  age={u.age}/>
          }
        )
      }
      </>
      <button className='btn-color' onClick={handleChange}>
        Update Name
      </button>
    </div>
  );
}

let loggedIn=true;
let isAdmin=true;
function Header(){
  return(
    <ul className='ul'>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
    {
      loggedIn?(<li>Logout</li>):(<li>Login</li>)
    }
    </ul>
  )
}

function Admin(){
  return(
    <>
    <h1 style={{color:'pink'}}>Hello conditional</h1>
    
    </>
  )
}


export default App;
