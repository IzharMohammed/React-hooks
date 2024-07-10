import { useState } from "react";
import Counter from "./useEffect_Hook/Counter";
import Ref from "./Hooks/useRef/Ref";
import Ref1 from "./Hooks/useRef/Ref1";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <>
    {/* useEffect hook */}

{/*       <button onClick={()=>setFlag(!flag)}>Toggle</button>
      {flag ? <Counter /> : ""} */}

      {/*useRef hook */}
      <Ref />
      <Ref1 />
    </>
  );
}

export default App;
