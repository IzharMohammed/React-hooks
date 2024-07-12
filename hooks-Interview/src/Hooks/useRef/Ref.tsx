import React, { useRef, useState } from "react";

/* 
-> useRef doesnt need to re-render the component unlike useState renders when the state variable changes 
-> useRef is a React Hook that lets you reference a value that’s not needed for rendering.
-> Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect 
the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can 
put it in a ref. To update the value inside the ref, you need to manually change its current property\
-> Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to 
display on the screen. Use state for that instead. 
*/

function Ref() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncremet = () => {
    // If we comment the setCount(count+1) then the rendering of component doesnt happens because state hasn't changed but the countRef increases but rendering doesnt happens
    setCount(count + 1);
    countRef.current++;

    /*
    This state variable will change after the complete function completes then rendering of the component happens
    but in case of countRef it is not dependent on rendering it will change without rendering of component also 
    */
    console.log("state", count);
    console.log("ref", countRef.current);
  };

  //console.log('state',count);
  return (
    <div>
      count : {count}
      <br />
      countRef : {countRef.current}
      <br />
      <button onClick={handleIncremet}>Increment</button>
    </div>
  );
}

export default Ref;
