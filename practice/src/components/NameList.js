import React from "react";
import Person from "./Person";
function NameList(){
    const names=['Hima','Snigdha','Maya']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:"React"
        },
        {
            id:1,
            name:'Smith',
            age:30,
            skill:"Python"
        },
        {
            id:1,
            name:'Alok',
            age:30,
            skill:"AWS"
        },
    ]
    const personList=persons.map(person => <Person key={person.id}person={person}/>)
    return <div>{personList}</div>
    const Namelist=names.map(name=> <h2>{name}</h2>)
    return <div>{Namelist}</div>
}

export default NameList