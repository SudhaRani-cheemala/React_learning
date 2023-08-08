import React from "react";
function Person({person}){
    return(
        <div>
          <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill} with id {person.id}
          </h2>
        </div>
    )
}

export default Person