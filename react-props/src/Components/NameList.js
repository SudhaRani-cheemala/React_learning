import React from 'react'


function NameList() {
    // const names=['Bruce','Clerk','Diana']
    // const nameList=names.map(name=><h2>{name}</h2>)
   
    const person=[
        {
            id:1,
            name:'a',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'b',
            age:29,
            skill:'Vue'
        },
        {
            id:3,
            name:'c',
            age:28,
            skill:'css'
        },
        {
            id:4,
            name:'d',
            age:27,
            skill:'HTML'
        }
    ]
    const personList=person.map(person=>
        <h1>
            iam {person.name}
        </h1>)
  return (
    <div>
      { 
      personList
    //    nameList
      }
    </div>
  )
}

export default NameList
