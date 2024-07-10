import React, { useEffect, useState } from "react";

function Counter() {
  const [state, setState] = useState(0);

// Runs at first when the component mounts(displays) on screen
  useEffect(()=>{
    console.log('component mounting');
//Runs at first when the component ummounts(disappears) on screen
    return function (){
        console.log('unmounting');
    }
  },[])

  // Runs at first when the component mounts(displays) on screen and also when the state variable changes
  useEffect(()=>{
    console.log('component mounting with dependency',state);
//Runs at first when the component ummounts(disappears) on screen and also when the state variable changes then previous component will modify then
    return () => {
        console.log('unmounting with dependency',state);
    }
  },[state])

const handleIncrement = () => {
setState(prev=>prev+1);
}

const handleDecrement = () => {
setState(prev=>prev-1);
}

  return (
    <div>
      <span>{state}</span>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
