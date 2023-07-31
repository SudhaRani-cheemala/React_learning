import React from "react";
import "./style.css";
// useState incremnet and decrement 
const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);

  const [abc,setAbc] = useState(false);

  const handleSubmit = () => {
    
setAbc(true)
  }

  const dimple = () => {
    setAbc(false)
  }

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
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>

{abc && (

        <button type='submt' onClick={handleSubmit}></button>
)}
      </div>
    </>
  );
};

export default UseState;

