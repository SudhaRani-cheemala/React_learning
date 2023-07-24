import React, { useReducer } from "react";
import "./style.css";
// in big projects useReducer will be used in small projects useState will be used
const reducer=(state,action)=>{
if(action.type==="INCR")
{
  state=state+1;
}
if(state>0 && action.type==="DECR")
{
    state=state-1;
}
return state;

};
// useState incremnet and decrement 
const UseReducer = () => {
  // use state takes 1 argumets
//    const [myNum, setMyNum] = React.useState(0);
//   use reducer takes 2 argumets
const initialData=10
 const[state,dispatch]=useReducer(reducer,initialData);
//  dispatch will use for reducer funcion

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=>dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={()=>dispatch({type:"DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;