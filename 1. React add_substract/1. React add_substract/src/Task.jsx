

import React,{useState} from 'react'

function Task(){
const[state,setState]=useState((null));
const[data,setData]=useState((null));

const handleChange=(event)=>{
  setState( Number(event.target.value))
};

  const changeAddition =()=>{
  setData(state+data);
  };

  const changeSubstraction =()=>{
   
   setData(data-state);
  };

return ( 
  
<>
  
<h3> Enter a Value To Add/Substract </h3>

<input type="number" onChange ={handleChange}   /> <hr/>

<button style={{backgroundColor:'skyblue'}} onClick={changeAddition}> ADD </button>  <hr/>

<button style={{backgroundColor:'white'}} onClick={changeSubstraction}> SUBSTRACT </button> <hr/> <br/> <br/>

<h2> Result: {data} </h2>

</>

)

}

export default Task