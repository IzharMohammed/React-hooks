import React, { useDeferredValue, useEffect, useState } from "react";
import SlowList from "./SlowList";

export default function DeferredValue(){
    const[query,setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    // NOTE :- The state which we are passing in hook should be of primitive(string,boolean,number) type if the state variables
    // are non-primitive(arrays, objects) then our program enters an infinite loop

    // See the working of deferred value there is an  extra re-render at the end which is cause by  useDeferredValue hook when 
    // we stop giving input until then the deferredQuery value is same as of last render (render rendered by useDeferredValue)

/*     useEffect(()=>{
        console.log('Query :-', query);
        console.log('Deferred Query :-', deferredQuery);
        console.log('---End of query---');
    },[query , deferredQuery]) */
    

    return(
        <>
        <div>
            <input 
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="search..."
            />
            <SlowList text={deferredQuery} />
        </div>
        </>
    )
}