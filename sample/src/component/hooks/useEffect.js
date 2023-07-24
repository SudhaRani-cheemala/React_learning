import React, { useEffect } from "react";
import "./style.css";
// by using this your componnets needs any render
// UseEffect works after every render
const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);
  useEffect(()=>{
    document.title=`Chats(${myNum})`
  },);

//   useEffect(()=>{
   
//     console.log("Hii")
//   }[]); // if you use array depedency in use effect by refeshing page first time only it will show
// when should i use array in useeffect-->if a user want to see any content only once then only use array in useEffect

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;