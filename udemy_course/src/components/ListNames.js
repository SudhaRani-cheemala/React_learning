import React from 'react'

function ListNames() {
  const   arrayObject=[
        {
            first_name:'Cheemala',
            last_name:'Sudha',
            gender:'female',
            age:20
        },
        {   first_name:'shaik',
            last_name:'apsheena',
            gender: 'female',
            age:20
        
        },
        {   first_name:'zion',
            last_name:'smith',
            gender: 'male',
            age:28
        
        },
        {
            first_name:'xyz',
            last_name:'vihaan',
            gender: 'male',
            age:29
        
        },
        {
            first_name:'yzx',
            last_name:'joseph',
            gender: 'male',
            age:30
        
        }
    ];

   
  return (
    <div>
       
     {arrayObject.map((item)=>(
       <p>{item.name}</p>
     ))}

{arrayObject.filter((item)=>(
      item.age<28
     )).map((item)=>item.name)}

{arrayObject.filter((item)=>(
     item.first_name==='xyz' && item.age===29
)).map((item)=>(
    item.first_name  + " " + item.last_name
))}    

 
      
    </div>
  )
}

export default ListNames
