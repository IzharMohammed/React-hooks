import { useState } from "react";
import Counter from "./useEffect_Hook/Counter";
import Ref from "./Hooks/useRef/Ref";
import Ref1 from "./Hooks/useRef/Ref1";
import Index from "./Hooks/useReducer/Index";
import Callback from "./Hooks/useCallback/Index";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <>
    {/* useEffect hook */}

      {/*<button onClick={()=>setFlag(!flag)}>Toggle</button>
      {flag ? <Counter /> : ""} */}

      {/*useRef hook */}

     {/*  <Ref />
      <Ref1 /> */}

      {/* useReducer */}
    {/*   <Index /> */}

      {/* useCallback */}
      <Callback />

    </>
  );
}

export default App;
