import React, { useState } from 'react'

function Calculator() {
    const [counter, setCounter] = useState(0);
    
    
   const handleCounter = () =>{
    setCounter(()=>counter+1)
    }

    const handleCounter2 =() =>{
        if(counter>0)
        setCounter(()=>counter-1)
        
    }

    return (
        <div>
            <h3>Counter App</h3>
            <p>{counter}</p>
            <button onClick={()=>handleCounter()} >increment</button>
            <button onClick={()=>handleCounter2()} >decrement</button>
            



        </div>


    )
}

export default Calculator;
