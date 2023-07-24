import React, { useState } from 'react';
import "./style.css";

const Todo = () => {
    const[inputData,setInputData]=useState("");
    const[items,setItems]=useState([]);
    const addItems=()=>{
        if(!inputData){
            alert("please fill the data")
        }
        else{
            setItems([...items, inputData])
        }
    }
  return (
<>
    <div className='main-div'>
        <div className='child-div'>
          <figure>
            <img src="\images\todo.svg" alt="todologo"></img>
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className='addItems'>
            <input
            type='text'
            placeholder='Add Item'
            className='
            form-control'
            value={inputData }
            onChange={(event)=>setInputData(event.target.value)}
            ></input>
            <i class="fas fa-plus add-btn" onClick={addItems}></i>
          </div>
            <div className='showItems'>
                <div className='eachItem'>
                    <h3>Apple</h3>
                    <div className='todo-btn'>
                    <i class="fas fa-plus add-btn"></i>   
                    <i class="far fa-edit add-btn"></i>
                    <i class="far fa-trash add-btn"></i>
                    </div>
                </div>
                <button className='btn effect04' data-sm-link-text="Remove All">
                    <span>CheckList</span>
                    </button>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Todo
