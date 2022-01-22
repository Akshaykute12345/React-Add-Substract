import React,{useState} from 'react'

function Practice(){

  const [data,setData]=useState()

const handleChange=(even)=>{
  setData(event.target.value)
}

  const [state,setState]=useState([])

  const [task,setTask]=useState([])

  const addLists=(()=>{

    setState([...state,task])
  })

  

  return(

    <div> <input type="text" onChange={handleChange}/>

    <button onClick={handleClick}> ADD TASK </button>

    <ul> 

   {state.map((elem=>

       <li> elem.task </li>
    ))
}
    
    
    </ul>
    
    
    </div>
  )
}

export default Practice